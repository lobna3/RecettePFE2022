import React from "react";
import { Modal, Button } from "antd";
import TableClient from "../TableClient";

const ListeClients = ({ isOpen, handleClose , handleFirstBtn }) => {
  return (
    <Modal
      visible={isOpen}
      onCancel={handleClose}
      width={800}
      title={
        <div>
          <h6 className="text-primary">Tableau des clients</h6>
        </div>
      }
      onOK={() => {
        handleClose();
      }}
      footer={[
        <Button onClick={handleClose}>
          Retour
        </Button>,
        <Button type="primary" onClick={handleFirstBtn} >
          Suivant
        </Button>,
      ]}
    >
      
      <div className="card">
        <div className="card-body">
        <h5 className="card-title d-flex text-dark"> Choisir votre client</h5>
        <TableClient />
        </div>
       
      </div>
    </Modal>
  );
};

export default ListeClients;
