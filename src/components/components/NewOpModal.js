import React from "react";
import { Modal } from "antd";
import {
  BsPersonPlusFill,
  BsPersonSquare,
  BsArrowLeftSquare,
  BsFillFileEarmarkPlusFill,
} from "react-icons/bs";
const ModalHeader = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "red", height: "100px" }}>
      <h1>Nouvelle opération</h1>
    </div>
  );
};
const NewOpModal = ({
  isOpen,
  handleClose,
  handleFirstBtn,
  handleSecondBtn,
}) => {
  return (
    <Modal
      footer={null}
      visible={isOpen}
      onCancel={handleClose}
      title={
        <div >
          <h6 className="text-primary">Nouvelle opération</h6>
        </div>
      }
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
            <BsPersonPlusFill />
          </i>
          <span className="d-inline-block text-left text-dark">
            {" "}
            Nouveau Client
            <small className="font-weight-light d-block text-muted">
              Créer un nouvelle client
            </small>
          </span>
        </button>
          <p></p>
          <p></p>
        <button
          class="btn btn-outline-primary"
          data-bs-toggle="modal"
          data-bs-target="#ExtralargeModal"
        >
          <i class="d-flex" style={{ margin: "0 8px" }}>
            <BsPersonSquare />
          </i>
          <span className="d-inline-block text-left text-dark">
            {" "}
            Ancien Client
            <small className="font-weight-light d-block text-muted">
              Aller au tableau des clients
            </small>
          </span>
        </button>
      </div>
    </Modal>
  );
};

export default NewOpModal;
