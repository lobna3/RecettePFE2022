import React from "react";
import { PaiementHeader } from "../RacetteHeader";

const Fail = () => {
  return (
    <main id="main" className="main bg-light">
      <PaiementHeader />
      <div className="p-4">
        <div className="alert alert-danger">
            Fail Payment
        </div>
      </div>
    </main>
  );
};

export default Fail;
