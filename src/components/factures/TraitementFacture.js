import React from "react";
import { Modal, Steps, Button } from "antd";
import "../../components/clients/modal.css";
import { MailOutlined } from "@ant-design/icons";
const { Step } = Steps;

const TraitementFacture = ({ isOpen, handleClose }) => {
  return (
    <Modal
      className="modalStyle"
      visible={isOpen}
      width={1000}
      onCancel={handleClose}
      title={
        <div>
          <h6 className="text-white">Traitement facture</h6>
        </div>
      }
      onOK={() => {
        handleClose();
      }}
      footer={null}
    >
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h6>NFacture:</h6>
              <p>Vous devez envoyer le facture pour passer au paiement</p>
              <Button block style={{ marginBottom: 10, height: 100 }}>
                <MailOutlined
                  style={{
                    fontSize: "42px",
                    color: "#1890ff",
                  }}
                />
                <br />
                <span className="text-primary">Envoyer par mail</span> <br />
                <span className="text-muted">
                  Envoyer votre facture par mail{" "}
                </span>
              </Button>
              <Steps direction="vertical" current={1}>
                <Step title="Finished" description="This is a description." />
                <Step
                  title="In Progress"
                  description="This is a description."
                />
                <Step title="Waiting" description="This is a description." />
              </Steps>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <h1>Facture</h1>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TraitementFacture;
