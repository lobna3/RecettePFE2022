import React, { useState } from "react";
import { Modal} from "antd";
import { MailOutlined } from "@ant-design/icons";
import "../../components/clients/modal.css";
import axios from "axios";
import { useToasts } from "react-toast-notifications";

const EnvoyerEmail = ({ isOpen, handleClose }) => {
  const { addToast } = useToasts();
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState({
    email: "",
    subject: "",
    description: "",
  });

  const { email, subject, description } = form;
  const onInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/test", form)
      .then((response) => setMsg(response.data.respMesg));
      console.log("Email envoyer avec succssée!!!",form)
      if (setMsg) {
        addToast("Email envoyée avec succées", { appearance: "success" });
      } 
      handleClose()
  };

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
      footer={null}
    >
      <form onSubmit={onSubmit}>
        {" "}
        {msg}
        <div className="row">
          <div className="col-md-12">
            <input
              name="email"
              onChange={onInputChange}
              value={email}
              type="text"
              className="form-control"
              placeholder="To"
            ></input>
          </div>
          <p></p>

          <div className="col-md-12">
            <input
              name="subject"
              onChange={onInputChange}
              value={subject}
              type="text"
              className="form-control"
              placeholder="Subject"
            ></input>
          </div>
          <p></p>
          <div className="col-md-12">
            <textarea
              name="description"
              onChange={onInputChange}
              value={description}
              type="text"
              className="form-control"
              placeholder="Message"
            ></textarea>
          </div>
          <p></p>

          <div className="col-md-12"   style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "15px",
            }}>
            <button className="btn btn-secondary" onClick={handleClose}>Annuler</button>
            <input
              type="submit"
        
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default EnvoyerEmail;
/*
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
               <div className="form-group">
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <p></p>
 */
