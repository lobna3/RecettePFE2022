import React from "react";
import { Modal } from "antd";
import {MailOutlined} from "@ant-design/icons";

const EnvoyerEmail = ({isOpen, handleClose}) => {
  return (
    <Modal
      visible={isOpen}
      width={700}
      onCancel={handleClose}
      title={
        <div>
          <h6 className="text-primary">  <MailOutlined  />composer un nouveau message</h6>
        </div>
      }
      onOK={() => {
        handleClose();
      }}
    >
     
    </Modal>
  );
};

export default EnvoyerEmail;
