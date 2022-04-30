import React, { useEffect, useState } from "react";
import { Table, Space, Typography } from "antd";
import axios from "../config/axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClientListApi } from "../redux/actions/client.actions";

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
const { Text } = Typography;

const TableClient = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const displayStatus = (status) => {
    if (status == "devis en cours") {
      return <span className="text-danger">{status}</span>;
    } else if (status == "Non payé") {
      return <span className="text-success">{status}</span>;
    } else {
      return <span className="text-success">{status}</span>;
    }
  };
  const columns = [
    {
      title: "Client",
      dataIndex: "nom",
      render: (text, record) => (
        <Space direction="vertical">
          <Link to="/" target="_blank">
            {record.nom}
          </Link>
        </Space>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text, record) => {
        return (
          <>
            <Space direction="vertical">
              <Text type="secondary">{record.email}</Text>
            </Space>
          </>
        );
      },
    },
    {
      title: "Status de paiemet",
      dataIndex: "status",
      render: (text, record) => {
        return (
          <>
            {record.commandes.map((item) => {
              return (
                <>
                  <Space direction="vertical">
                    {displayStatus(item.status)}
                  </Space>
                </>
              );
            })}
          </>
        );
      },
    },
    {
      title: "Montant",
      dataIndex: "total",
      render: (text, record) => {
        return (
          <>
            {record.commandes.map((item) => {
              return (
                <>
                  <Space direction="vertical">
                    <Text strong> {item.total}</Text>
                  </Space>
                </>
              );
            })}
          </>
        );
      },
    },
  ];

  const { clientList } = useSelector((state) => state.client);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClientListApi());
  }, []);

  return (
    <div>
      <Table
        dataSource={clientList}
        columns={columns}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
      />
    </div>
  );
};

export default TableClient;
