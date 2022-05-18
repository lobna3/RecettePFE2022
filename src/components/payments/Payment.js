import React, { useState } from "react";
import { PaiementHeader } from "../RacetteHeader";
import axios from "axios";

const Payment = () => {
  const [form, setForm] = useState({});
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("/payment",form)
    .then(res=>{
     console.log(res.data)   
    }).catch(err=>console.error(err))
  };
  return (
    <main id="main" className="main bg-light">
      <PaiementHeader />
      <div className="p-4" style={{ marginLeft: 200 }}>
        <form className="m-4" onSubmit={onSubmit}>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="amount"
                onChange={onChange}
              ></input>
              <button type="submit" className="btn btn-primary mt-4">
                Payé
              </button>
            </div>
          </div>
        </form>
      </div>
      <br />
      <p></p>
    </main>
  );
};

export default Payment;
