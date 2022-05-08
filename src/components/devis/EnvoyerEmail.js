import React from "react";
import { Modal, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import "../../components/clients/modal.css";
import { useForm } from "react-hook-form";

const EnvoyerEmail = ({ isOpen, handleClose }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-12">
            <input
              {...register("nom", { required: true, maxLength: 20 })}
              type="text"
              className="form-control"
              placeholder="To"
            ></input>
          </div>
          <p></p>
          <div className="col-md-12">
            <input
              {...register("prenom", { required: true, maxLength: 20 })}
              type="text"
              className="form-control"
              placeholder="Cc"
            ></input>
          </div>
          <p></p>
          <div className="col-md-12">
            <input
              {...register("email", { required: true, maxLength: 20 })}
              type="text"
              className="form-control"
              placeholder="Bcc"
            ></input>
          </div>
          <p></p>
          <div className="col-md-12">
            <input
              {...register("note", { required: true, maxLength: 20 })}
              type="text"
              className="form-control"
              placeholder="Subject"
            ></input>
          </div>
          <p></p>
          <div className="col-md-12">
            <textarea
              {...register("message", { required: true})}
              type="text"
              className="form-control"
              placeholder="Message"
            ></textarea>
          </div>
          <p></p>
          <div className="form-group">
            <input
              {...register("file", { required: true})}
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <p></p>
          <div className="col-md-6" >
            <input type="submit" className="btn btn-primary" />,
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default EnvoyerEmail;
