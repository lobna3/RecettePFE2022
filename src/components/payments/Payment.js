import React, { useState } from "react";
import axios from "axios";
import { Modal } from "antd";
import "../../components/clients/modal.css";

const Payment = ({ isOpen, handleClose }) => {
  const [form, setForm] = useState({});
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/payment", form)
      .then((res) => {
        console.log(res.data);
        const { result } = res.data;
        window.location.href = result.link;
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <Modal
        className="modalStyle"
        visible={isOpen}
        width={500}
        onCancel={handleClose}
        title={
          <div>
            <h6 className="text-white">Payment facture</h6>
          </div>
        }
        onOK={() => {
          handleClose();
        }}
        footer={null}
      >
        <div className="row">
        
              <div className="">
                <form className="m-12" onSubmit={onSubmit}>
                  <div className="col-md-12">
                    <div className="form-group">
                    <label className="form-label">Montant à payer</label>
                      <input
                        type="text"
                        className="form-control"
                        name="amount"
                        onChange={onChange}
                      ></input>
                      <button type="submit" className="btn btn-primary mt-4 btn-block">
                        Payé
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          
      </Modal>
    </div>
  );
};

export default Payment;
