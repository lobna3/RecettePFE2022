import React from "react";
import { Modal } from "antd";
import { BsArrowLeftSquare, BsFillFileEarmarkPlusFill } from "react-icons/bs";

const ModalOP = ({ isOpen, handleClose, handleFirstBtn, handleSecondBtn }) => {
  return (
    <Modal
      footer={null}
      visible={isOpen}
      onCancel={handleClose}
      title={
        <div>
          <h6 className="text-primary">Nouvelle opération</h6>
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
      <div className="card">
        <button class="btn btn-outline-primary" onClick={handleFirstBtn}>
          <i class="d-flex" style={{ margin: "0 8px" }}>
            <BsFillFileEarmarkPlusFill />
          </i>
          <span className="d-inline-block text-left text-dark">
            {" "}
            Créer votre Devis
            <small className="font-weight-light d-block text-muted">
              Nouveau devis
            </small>
          </span>
        </button>
        <p></p>
        <p></p>
        <button class="btn btn-outline-primary" onClick={handleSecondBtn}>
          <i class="d-flex" style={{ margin: "0 8px" }}>
            <BsFillFileEarmarkPlusFill />
          </i>
          <span className="d-inline-block text-left text-dark">
            {" "}
            Créer votre Facture
            <small className="font-weight-light d-block text-muted">
              Nouvelle facture
            </small>
          </span>
        </button>
      </div>
    </Modal>
  );
};

export default ModalOP;
