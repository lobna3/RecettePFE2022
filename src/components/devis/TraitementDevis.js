import React from "react";
import { Modal ,Button} from "antd";
import { Link } from "react-router-dom";
import {
  PrinterFilled,
  MailOutlined,
  FormOutlined,
} from "@ant-design/icons";
import "../../components/clients/modal.css";

const TraitementDevis = ({ isOpen, handleClose, handleFirstBtn,
    handleSecondBtn }) => {
  return (
    <Modal
      className="modalStyle"
      visible={isOpen}
      width={700}
      onCancel={handleClose}
      title={
        <div>
          <h6 className="text-white">Traitement devis</h6>
        </div>
      }
      onOK={() => {
        handleClose();
      }}
      footer={[
        <Button onClick={handleClose}>Retour</Button>,
        <Button
        type="primary"
        style={{ backgroundColor: "#95de64", borderColor: "white" }}
      >
        Accepter
      </Button>,
      <Button type="primary">Enregistrer</Button>
        
      ]}
    >
      <div className="row">
        <div className="col-md-4">
          <div className="card" style={{ marginLeft: 20, height: 200 }}>
            <div className="card-body text-center">
              <Link to="">
                <h6 className="card-title">
                  <PrinterFilled
                    style={{
                      fontSize: "42px",
                      color: "#1890ff",
                    }}
                  />
                </h6>
                <h6 className="card-subtitle mb-2 ">Imprimer</h6>
                <p className="card-subtitle mb-2 text-muted">
                  Imprimer votre devis
                </p>
                <p class="card-text"></p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card"
            style={{ marginLeft: 10, marginRight: 10, height: 200 }}
          >
            <div className="card-body text-center">
              <span type="button" onClick={handleFirstBtn}>
                <h6 class="card-title">
                  <MailOutlined
                    style={{
                      fontSize: "42px",
                      color: "#1890ff",
                    }}
                  />
                </h6>
                <h6 className="card-subtitle mb-2 ">Envoyer</h6>
                <p className="card-subtitle mb-2 text-muted">
                  Envoyer votre devis
                </p>
                <p class="card-text"></p>
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ marginRight: 20, height: 200 }}>
            <div className="card-body text-center">
              <Link to="">
                <h6 className="card-title">
                  <FormOutlined
                    style={{
                      fontSize: "42px",
                      color: "#1890ff",
                    }}
                  />
                </h6>
                <h6 className="card-subtitle mb-2">Visualiser</h6>
                <p className="card-subtitle mb-2 text-muted">
                  Modifier votre devis
                </p>
                <p className="card-text"></p>
              </Link>
            </div>
          </div>
          <div className="card" style={{ height: 25, marginRight: 15 }}>
            <p className="text-muted">
              <small>
                Pour modifier votre devis <Link to=""> cliquez ici !</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TraitementDevis;
