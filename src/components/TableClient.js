import React, { useEffect, useState } from "react";
import { Table, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClientListApi } from "../redux/actions/client.actions";
import moment from 'moment';
const { Text } = Typography;

const TableClient = () => {
  const displayStatus = (note) => {
    if (note == "Non Payé") {
      return <span className="badge bg-danger">{note}</span>;
    } else if (note == "Payé") {
      return <span className="badge bg-success">{note}</span>;
    } else {
      return <span className="badge bg-secondary">{note}</span>;
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
      dataIndex: "note",
      render: (text, record) => {
        return (
          <>
            {record.commandes.map((item) => {
              return (
                <>
                  <Space direction="vertical">
                    {displayStatus(item.note)}
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
                    <Text strong> {item.total} TND</Text>
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
