
import React, { useEffect, useState } from 'react';
import { Table, Space, Typography } from 'antd';
import axios from '../config/axios';
import { Link, } from 'react-router-dom';

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};
const { Text } = Typography;


const TableClient = () => {
  const [selectionType, setSelectionType] = useState('checkbox');

  const columns = [
    {
      title: 'Client',
      dataIndex: 'nom',
      render: (text, record) => (
        <Space direction="vertical">
          <Link to="/" target="_blank">{record.nom}</Link>
        </Space>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      render: (text, record) => {
        return (
          <>
            <Space direction="vertical">
              <Text type="secondary">{record.email}</Text>
            </Space>

          </>
        )

      },
    },
    {
      title: 'Status de paiemet',
      dataIndex: 'status',
      render: (text, record) => {
        return (
          <>
            {
              record.commandes.map(item => {
                return (
                  <>
                    <Space direction="vertical">
                      <Text mark> {item.status}</Text>
                    </Space>

                  </>
                )
              })
            }
          </>
        )
      }
    },
    {
      title: 'Montant',
      dataIndex: 'total',
      render: (text, record) => {
        return (
          <>
            {
              record.commandes.map(item => {
                return (
                  <>
                    <Space direction="vertical">
                      <Text strong> {item.total}</Text>
                    </Space>

                  </>
                )
              })
            }
          </>
        )
      }
    },
  ];

  const [clients, setclients] = useState([])

  useEffect(() => {
    axios.get('clients')
      .then(res => {
        setclients(res.data)
      })
  }, [])



  return (
    <div>
      <Table dataSource={clients} columns={columns} rowSelection={{
        type: selectionType,
        ...rowSelection,
      }} />
    </div>
  )
}

export default TableClient