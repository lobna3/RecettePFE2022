import React from "react";
import { Modal, Button, Typography } from "antd";
import { BsArrowLeftSquare, BsFillFileEarmarkPlusFill } from "react-icons/bs";
import "./modal.css";
import { Link } from "react-router-dom";
const { Text } = Typography;
const ModalOP = ({ isOpen, handleClose, handleFirstBtn, handleSecondBtn }) => {
  return (
    <Modal
      className="modalStyle"
      footer={null}
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
    >
      {" "}
      <h5 className="d-flex">
        {" "}
        <i class="d-flex" style={{ margin: "0 8px" }}>
          {" "}
          <BsArrowLeftSquare />{" "}
        </i>{" "}
        Choissisez votre opération souhaité
      </h5>
      <Link to="/ajouter_devis1">
        <Button
          style={{ height: "80px", width: "370px", margin: "8px 40px" }}
          onClick={handleFirstBtn}
          block
        >
          <i class="d-flex" style={{ margin: "0 8px" }}>
            <BsFillFileEarmarkPlusFill />
          </i>
          <span className="d-inline-block text-left text-dark">
            {" "}
            <Text strong> Créer votre Devis</Text>
            <small className="font-weight-light d-block text-muted">
              Nouveau devis
            </small>
          </span>
        </Button>
      </Link>
      <Link to="/">
        <Button
          style={{ height: "80px", width: "370px", margin: "8px 40px" }}
          onClick={handleSecondBtn}
          block
        >
          <i class="d-flex" style={{ margin: "0 8px" }}>
            <BsFillFileEarmarkPlusFill />
          </i>
          <span className="d-inline-block text-left text-dark">
            {" "}
            <Text strong>Créer votre Facture</Text>
            <small className="font-weight-light d-block text-muted">
              Nouvelle facture
            </small>
          </span>
        </Button>
      </Link>
    </Modal>
  );
};

export default ModalOP;
