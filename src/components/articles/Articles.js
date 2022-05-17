import React, { useEffect, useState } from "react";
import { Table, Space, Typography, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesApi } from "../../redux/actions/article.action";
import { CloseCircleOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Articles = () => {
  
  const columns = [
    {
      title: "Produits/ Services",
      dataIndex: "titre",

      render: (text, record) => (
        <>
          <Space direction="vertical">
            <button
              className="btn btn-light"
              onClick={() => {
                dispatch({
                  type: "DELETE_SELECTED_ARTICLE",
                  payload: record._id,
                });
              }}
            >
              <Text strong>
                {record.service.titre} {"  "}
                <span style={{ marginLeft: 50 }}>
                  <CloseCircleOutlined />
                </span>
              </Text>
            </button>
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
            <Input
              className="text-center"
              style={{
                padding: 0,
                borderWidth: 1,
                borderStyle: "dashed",
                borderColor: "#0d6efd",
                width: 80,
              }}
              value={record.qte}
              type="text"
              onChange={(event) => {
                dispatch({
                  type: "UPDATE_QTE_ARTICLE",
                  payload: {
                    id: record._id,
                    value: event.target.value,
                  },
                });
              }}
            />
          </Space>
        </>
      ),
    },
    {
      title: "P.U.",
      dataIndex: "pu",
      render: (text, record) => (
        <Space direction="vertical">
          <Input
            className="text-center"
            style={{
              padding: 0,
              borderWidth: 1,
              borderStyle: "dashed",
              borderColor: "#0d6efd",
              width: 80,
            }}
            value={record.pu}
            type="text"
            onChange={(event) => {
              dispatch({
                type: "UPDATE_PU_ARTICLE",
                payload: {
                  id: record._id,
                  value: event.target.value,
                },
              });
            }}
          />
        </Space>
      ),
    },
    {
      title: "Taxes",
      dataIndex: "taxe",
      render: (text, record) => (
        <Space direction="vertical">
          <Input
            className="text-center"
            style={{
              padding: 0,
              borderWidth: 1,
              borderStyle: "dashed",
              borderColor: "#0d6efd",
              width: 80,
            }}
            value={record.taxe}
            type="text"
            onChange={(event) => {
              dispatch({
                type: "UPDATE_TAXE_ARTICLE",
                payload: {
                  id: record._id,
                  value: event.target.value,
                },
              });
            }}
          />
        </Space>
      ),
    },
    {
      title: "Prix",
      dataIndex: "prix",
      render: (text, record) => (
        <Space>
          <Input
            className="text-center"
            style={{
              padding: 0,
              borderColor: "#ffff",
              width: 50,
            }}
            value={record.prix}
            type="text"
            onChange={(event) => {
              dispatch({
                type: "UPDATE_PRIX_ARTICLE",
                payload: {
                  id: record._id,
                  value: event.target.value,
                },
              });
            }}
          />
          DT
        </Space>
      ),
    },
  ];

  //const { articleList } = useSelector((state) => state.article);
  const { selectedArticles } = useSelector((state) => state.commande);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticlesApi());
  
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={selectedArticles}
      style={{ width: 1000 }}
    />
  );
};

export default Articles;
