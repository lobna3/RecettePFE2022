import React, { useEffect, useState } from "react";
import { Modal, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "../components/clients/modal.css";

const AddArticleModal = ({ showModal, handleClose }) => {
  const dispatch = useDispatch();
  const addArticles = () => {
    dispatch({
      type: "SET_SELECTED_ARTICLE",
      payload: selectedArticle,
    });
    handleClose();
  };
  const [localArticleList, setArticleListe] = useState([]);
  const { articleList } = useSelector((state) => state.article);
  const [selectedArticle, setSelectedArticles] = useState([]);
  useEffect(() => {
    let newList = articleList.map((elm) => {
      return { ...elm, key: elm._id };
    });
    setArticleListe(newList);
  }, [articleList]);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedArticles(selectedRows);
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      console.log("Selected ARticle", selectedRows);
    },
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Nom produit",
      dataIndex: "service",
      render: (text) => {
        return <span>{text.titre}</span>;
      },
    },
    {
      title: "Prix",
      dataIndex: "prix",
      render: (text) => {
        return <span>{text}DT</span>;
      },
    },
  ];

  return (
    <Modal
      className="modalStyle"
      width={600}
      title={
        <div>
        <h6 className="text-white">Ajouter article</h6>
        </div>
      }
      visible={showModal}
      onOk={addArticles}
      onCancel={handleClose}
    >
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={localArticleList}
      />
    </Modal>
  );
};

export default AddArticleModal;
