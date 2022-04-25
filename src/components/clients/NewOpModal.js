import React from "react";
import { Modal, Button, Typography } from "antd";
import "antd/dist/antd.css";
import {
  BsPersonPlusFill,
  BsPersonSquare,
  BsArrowLeftSquare,
} from "react-icons/bs";
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
      <h6 className="d-flex">
        {" "}
        <i className="d-flex" style={{ margin: "0 8px" }}>
          {" "}
          <BsArrowLeftSquare />{" "}
        </i>{" "}
        Choissisez votre opération souhaité
      </h6>
      <Button onClick={handleFirstBtn} block style={{ height: "80px" }}>
        <i className="d-flex" style={{ margin: "0 8px" }}>
          <BsPersonPlusFill />
        </i>
        <span className="d-inline-block text-left text-dark">
          {" "}
          <Text strong>Nouveau Client</Text>
          <small className="font-weight-light d-block text-muted">
            Créer un nouvelle client
          </small>
        </span>
      </Button>
      <p></p>
      <p></p>
      <Button onClick={handleSecondBtn} block style={{ height: "80px" }}>
        <i className="d-flex" style={{ margin: "0 8px" }}>
          <BsPersonSquare />
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
