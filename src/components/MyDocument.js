import React, { useRef } from "react";
import { CommandeDetailHeader } from "./RacetteHeader";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./Pdf";

const MyDocument = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <main id="main" className="main bg-light">
        <CommandeDetailHeader />
        <div>
          <button onClick={handlePrint} className="btn btn-primary">
            Imprimer
          </button>
          <ComponentToPrint ref={componentRef} />
        </div>
      </main>
    </div>
  );
};

export default MyDocument;
