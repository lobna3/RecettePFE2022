import React, { useState ,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, } from "antd";
import "../../components/clients/modal.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { BASE_URL } from "../../utils/apiHelpers";
import { getCommandesListDetailsApi } from "../../redux/actions/commande.details.actions";

const ImprimerFacture = ({ isOpen, handleClose }) => {
const defaultLayoutPluginInstance = defaultLayoutPlugin();

const { commandeDetails } = useSelector((state) => state.detailsCommande);

  return (
    <div>
         <Modal
        className="modalStyle"
        visible={isOpen}
        width={900}
        onCancel={handleClose}
        title={
          <div>
            <h6 className="text-white">Traitement facture</h6>
          </div>
        }
        onOK={() => {
          handleClose();
        }}
        footer={null}
      >
        <div className="row">
       
            <div className="card">
             
            <div>
              {commandeDetails && (
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js">
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <Viewer
                      fileUrl={`${BASE_URL}/${commandeDetails.documentUrl}`}
                      plugins={[defaultLayoutPluginInstance]}
                    />
                  </div>
                </Worker>
              )}
            </div>
            </div>
         
        </div>
      </Modal>
     
    </div>
  )
}

export default ImprimerFacture