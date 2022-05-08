import React from "react";
import { Modal, Steps } from "antd";
import "../../components/clients/modal.css";
const { Step } = Steps;

const TraitementFacture = ({ isOpen, handleClose }) => {
  return (
    <Modal
      className="modalStyle"
      visible={isOpen}
      width={900}
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
            <h6>NFacture:</h6>
            <Steps direction="vertical" current={1}>
              <Step title="Finished" description="This is a description." />
              <Step title="In Progress" description="This is a description." />
              <Step title="Waiting" description="This is a description." />
            </Steps>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card"></div>
        </div>
      </div>
    </Modal>
  );
};

export default TraitementFacture;
