import React from "react";
import { Modal, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import "../../components/clients/modal.css";

const EnvoyerEmail = ({ isOpen, handleClose }) => {
  return (
    <Modal
    className="modalStyle"
      visible={isOpen}
      width={700}
      onCancel={handleClose}
      title={
        <div>
          <h6 className="text-white">
            <MailOutlined style={{ fontSize: "24px", color: "" }} />
            {"  "}composer un nouveau message
          </h6>
        </div>
      }
      onOK={() => {
        handleClose();
      }}
      footer={[
        <Button onClick={handleClose}>Annuler</Button>,
        <Button type="primary" icon={<MailOutlined />}>
          Envoyer Message
        </Button>,
      ]}
    >
      <form>
        <div className="row">
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              placeholder="To"
            ></input>
          </div>
          <p></p>
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              placeholder="Cc"
            ></input>
          </div>
          <p></p>
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              placeholder="Bcc"
            ></input>
          </div>
          <p></p>
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
            ></input>
          </div>
          <p></p>
          <div className="col-md-12">
            <textarea
              type="text"
              className="form-control"
              placeholder="Message"
            ></textarea>
          </div>
          <p></p>
          <div className="form-group">
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default EnvoyerEmail;
