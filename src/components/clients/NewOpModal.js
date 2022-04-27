import React from "react";
import { Modal, Button, Typography } from "antd";
import {
  UserAddOutlined,
  TeamOutlined,
  LeftSquareTwoTone,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./modal.css";
const { Text } = Typography;

const NewOpModal = ({
  isOpen,
  handleClose,
  handleFirstBtn,
  handleSecondBtn,
}) => {
  return (
    <Modal
      className="modalStyle"
      visible={isOpen}
      onCancel={handleClose}
      title={
        <div>
          <h6 className="text-white">Nouvelle opération</h6>
        </div>
      }
      onOK={() => {
        handleClose();
      }}
      footer={null}
    >
      {" "}
      <h5 className="d-flex">
        {" "}
        <i className="d-flex" style={{ margin: "0 8px" }}>
          {" "}
          <LeftSquareTwoTone style={{ fontSize: "24px" }} />{" "}
        </i>{" "}
        Choissisez votre opération souhaité
      </h5>
      <Button
        onClick={handleFirstBtn}
        block
        style={{ height: "80px", width: "370px", margin: "8px 40px" }}
      >
        <i className="d-flex" style={{ margin: "0 8px" }}>
          <UserAddOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
        </i>
        <span className="d-inline-block text-left text-dark">
          {" "}
          <Text strong>Nouveau Client</Text>
          <small className="font-weight-light d-block text-muted">
            Créer un nouvelle client
          </small>
        </span>
      </Button>
      <Button
        onClick={handleSecondBtn}
        block
        style={{ height: "80px", width: "370px", margin: "8px 40px" }}
      >
        <i className="d-flex" style={{ margin: "0 8px" }}>
          <TeamOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
        </i>
        <span className="d-inline-block text-left text-dark">
          {" "}
          <Text strong>Ancien Client</Text>
          <small className="font-weight-light d-block text-muted">
            Aller au tableau des clients
          </small>
        </span>
      </Button>
    </Modal>
  );
};

export default NewOpModal;
