import React, { useRef } from "react";
import { CommandeDetailHeader } from "./RacetteHeader";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./Pdf";
import { postApi } from "../utils/apiHelpers";
import { useSelector } from "react-redux";
const MyDocument = () => {
  const componentRef = useRef();
  const { commandeDetails } = useSelector((state) => state.detailsCommande);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handleSubmitPdf = async () => {
    let result = await postApi("generate", { commandeDetails });
    handlePrint();
  };
  return (
    <div>
      <main id="main" className="main bg-light">
        <CommandeDetailHeader />
        <div>
          <ComponentToPrint ref={componentRef} />
          <button
            onClick={handleSubmitPdf}
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            Imprimer
          </button>
        </div>
      </main>
    </div>
  );
};

export default MyDocument;
