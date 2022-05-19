import React from "react";
import { Modal, Steps, Button } from "antd";
import "../../components/clients/modal.css";
import { MailOutlined } from "@ant-design/icons";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { BASE_URL } from "../../utils/apiHelpers";

const { Step } = Steps;

const TraitementFacture = ({ isOpen, handleClose }) => {

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

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
            <div>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js">
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Viewer
                    fileUrl={`${process.env.PUBLIC_URL}/pdf-open-parameters.pdf`}
                    plugins={[defaultLayoutPluginInstance]}
                  />
                </div>
              </Worker>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TraitementFacture;
