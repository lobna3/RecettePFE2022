import React, { useEffect, useState } from "react";
import { Table, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClientListApi } from "../redux/actions/client.actions";

const { Text } = Typography;

const TableClient = () => {
  const displayStatus = (etat) => {
    if (etat == "NonPayé") {
      return <span className="badge bg-danger">{etat}</span>;
    } else if (etat == "Payé") {
      return <span className="badge bg-success">{etat}</span>;
    } else {
      return <span className="badge bg-secondary">{etat}</span>;
    }
  };
  const columns = [
    {
      title: "Client",
      dataIndex: "nom",
      render: (text, record) => (
        <Space >
            <input type="checkbox" className="checkmail" />
          <Link to="/" target="_blank">
            {record.nom} {record.prenom}
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
      dataIndex: "etat",
      render: (text, record) => {
        return (
          <>
            {record.commandes.map((item) => {
              return (
                <>
                  <Space direction="vertical">
                    {displayStatus(item.etat)}
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
       
      />
    </div>
  );
};

export default TableClient;
