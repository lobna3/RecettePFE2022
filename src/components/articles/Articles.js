import React, { useEffect, useState } from "react";
import { Table, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesApi } from "../../redux/actions/article.action";

const { Text } = Typography;

const Articles = () => {
  const columns = [
    {
      title: "Produits/ Services",
      dataIndex: "titre",

      render: (text, record) => (
        <>
          <Space direction="vertical">
            <span
              style={{
                margin: 10,
                paddingLeft: 10,
                height: 300,
                marginBottom: 10,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "",
              }}
            >
              <Text strong>{record.service.titre} *</Text>
            </span>
          </Space>
        </>
      ),
    },
    {
      title: "Qté",
      dataIndex: "qte",
      render: (text, record) => (
        <>
          <Space direction="vertical">
            <span
              style={{
                margin: 10,
                paddingLeft: 10,
                height: 300,
                marginBottom: 10,
                borderWidth: 1,
                borderStyle: "dashed",
                borderColor: "#0d6efd",
              }}
            >
              <Text>{record.qte}</Text>
            </span>
          </Space>
        </>
      ),
    },
    {
      title: "P.U.",
      dataIndex: "pu",
      render: (text, record) => (
        <Space direction="vertical">
          <span
            style={{
              margin: 10,
              paddingLeft: 10,
              height: 300,
              marginBottom: 10,
              borderWidth: 1,
              borderStyle: "dashed",
              borderColor: "#0d6efd",
            }}
          >
            <Text>{record.pu}</Text>
          </span>
        </Space>
      ),
    },
    {
      title: "Taxes",
      dataIndex: "taxe",
      render: (text, record) => (
        <Space direction="vertical">
          <span
            style={{
              margin: 10,
              paddingLeft: 10,
              height: 300,
              marginBottom: 10,
              borderWidth: 1,
              borderStyle: "dashed",
              borderColor: "#0d6efd",
            }}
          >
            <Text>{record.taxe}</Text>
          </span>
        </Space>
      ),
    },
    {
      title: "Prix",
      dataIndex: "prix",
      render: (text, record) => (
        <Space direction="vertical">
          <Text>{record.prix}</Text>
        </Space>
      ),
    },
  ];

  const { articleList } = useSelector((state) => state.article);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticlesApi());
  }, []);
 

  return <Table columns={columns} dataSource={articleList} />;
};

export default Articles;
