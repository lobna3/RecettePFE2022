import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Form, Select } from 'antd';
import axios from '../config/axios';
const EditableContext = React.createContext(null);



const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {

  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'Produits/ Services',
        dataIndex: 'service',
        width: '30%',
        editable: true,
        render: (text, record) => (

          <Form.Item>
            <Select >
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>

        ),
      },
      {
        title: 'Qté',
        dataIndex: 'qte',
        render: (text, record) => (

          <Form.Item><Input placeholder='2'></Input></Form.Item>

        ),
      },
      {
        title: 'P.U.',
        dataIndex: 'pu',
        render: (text, record) => (

          <Form.Item><Input></Input></Form.Item>

        ),
      },
      {
        title: 'Taxes',
        dataIndex: 'taxe',
        render: (text, record) => (

          <Form.Item><Input placeholder='20%'></Input></Form.Item>

        ),
      },
      {
        title: 'Prix',
        dataIndex: 'prix',
        render: (text, record) => (

          <Form.Item><Input placeholder='200Dt'></Input></Form.Item>

        ),

      },
    ];
    this.state = {
      dataSource: [
        {
          key: '0',
          service: "623efa58cef38dae7b89e586",
          qte: '2',
          pu: '32',
          taxes: '20%',
          prix: '200Dt',
        }

      ],
      count: 2,
    };
  }


  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };
  handleAdd = () => {

    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      service: ` ${count}`,
      qte: '3',
      pu: '100',
      taxe: '33',
      prix: '200'

    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };


  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button
          onClick={this.handleAdd}
          type="primary"
          block>
          + Ajouter un article
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}

 export function Test1() {
  const [componentSize, setComponentSize] = useState('default');

  const [data, setdata] = useState({
    qte: "5",
    pu: "150",
    taxe: "8",
    prix: "250",
    service: "623efa58cef38dae7b89e586",
    commande: "62612736ca054e83bdaae618",


  })
  const handleChange = e => {
    const { value, name } = e.target
    setdata(prev => ({
      ...prev,
      [name]: value,

    }))
  }

  const [success, setsuccess] = useState(false)
  const [error, seterror] = useState('')
  const createArticle = () => {
    let obj = {
      article: data,
    }
    axios.post('ajouter_article', obj)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          setsuccess(true)
        }
      })
      .catch(err => {
        console.log(err.response);
      })

  }

  return (
    <div></div>
  )
}

export default () => <EditableTable />;
