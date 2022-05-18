import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PaiementHeader } from "../RacetteHeader";
import axios from "axios";

const Success = () => {
  const [searchParams] = useSearchParams();
  const[result, setResult]=useState('');
  useEffect(() => {
      axios.post(`/payment/${searchParams.get("payment_id")}`)
      .then(res=>{
         setResult(res.data.result.status)
         console.log(res.data)
      }).catch(err=>console.error(err));
  }, []);
  return (
    <main id="main" className="main bg-light">
      <PaiementHeader />
      <React.Fragment>
      {result === "SUCCESS" && (<div className="p-4">
        <div className="alert alert-success">Success Payment</div>
      </div>)}
      </React.Fragment>
     
    </main>
  );
};

export default Success;
