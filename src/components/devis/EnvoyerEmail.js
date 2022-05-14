import React, { useState } from "react";
import { Modal, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import "../../components/clients/modal.css";
import axios from "axios";

const EnvoyerEmail = ({ isOpen, handleClose }) => {
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState({
    to: "",
    subject: "",
    description: "",
  });

  const { to, subject, description } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://localhost:5000/envoyerEmail/", user)
      .then((response) => setMsg(response.data.respMesg));
      console.log(user)
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
      <form>
        {" "}
        {msg}
        <div className="row">
          <div className="col-md-12">
            <input
              name="to"
              onChange={onInputChange}
              value={to}
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
              onClick={onSubmit}
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
