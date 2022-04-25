import React from "react";
import { Table, Form,Select,Input } from "antd";

const Articles = () => {
  const columns = [
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

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default Articles;
