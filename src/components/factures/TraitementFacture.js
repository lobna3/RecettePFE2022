import React, { useState } from "react";
import { Modal, Steps, Button, Collapse, Input, Radio, Space } from "antd";
import "../../components/clients/modal.css";
import { MailOutlined } from "@ant-design/icons";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { BASE_URL } from "../../utils/apiHelpers";
import { useSelector } from "react-redux";

const { Step } = Steps;

const TraitementFacture = ({ isOpen, handleClose }) => {
  const [mailSent, setMailSent] = useState(false);
  const [payed, setPayed] = useState(false);
  const paymentSTeps = [
    {
      title: "envoi facture",
      content: ({ handleMailSent }) => {
        return (
          <div>
            {" "}
            <Button
              block
              style={{ marginBottom: 10, height: 100 }}
              onClick={() => {
                handleMailSent();
              }}
            >
              <MailOutlined
                style={{
                  fontSize: "42px",
                  color: "#1890ff",
                }}
              />
              <br />
              <span className="text-primary">Envoyer par mail</span> <br />
              <span className="text-muted">
                Envoyer votre facture par mail{" "}
              </span>
            </Button>
          </div>
        );
      },
    },
    {
      title: "Montant de paiemnt",
      content: () => {
        return (
          <div>
            <h1>method </h1>
          </div>
        );
      },
    },
    {
      title: "Methode de paiment",
      content: () => {
        return <div> method 2 </div>;
      },
    },
  ];
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { savedCommande } = useSelector((state) => state.commande);
  const { Panel } = Collapse;
  const [selectedStep, setSelectedStep] = useState(0);
  const [value, setValue] = useState(["TOTAL"]);
  const handleMailSent = () => {
    setMailSent(true);
    console.log("Mail sent");
    console.log();
  };
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Modal
      className="modalStyle"
      visible={isOpen}
      width={1200}
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
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h6>NFacture:</h6>
              <p>Vous devez envoyer le facture pour passer au paiement</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  width: "100%",
                  height: "100%",

                  flexDirection: "row",
                  position: "relative",
                  minHeight: 350,
                  flex: 1,
                }}
              >
                {/* <Steps
                  current={selectedStep}
                  direction="vertical"
                  style={{ maxWidth: "250px" }}
                >
                  {paymentSTeps.map((item) => (
                    <Step key={item.title} title={item.title} />
                  ))}
                </Steps> */}
                {/* <div
                  style={{
                    backgroundColor: "blue",
                    height: 100,
                    width: "50%",
                    position: "absolute",
                    top: "20%",
                    right: 5,
                  }}
                >
                  {paymentSTeps[selectedStep].content({ handleMailSent })}
                </div> */}
                <div
                  style={{
                    minWidth: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  {" "}
                  <Button
                    block
                    style={{ marginBottom: 10, height: 100 }}
                    onClick={() => {
                      handleMailSent();
                    }}
                  >
                    <MailOutlined
                      style={{
                        fontSize: "42px",
                        color: "#1890ff",
                      }}
                    />
                    <br />
                    <span className="text-primary">Envoyer par mail</span>{" "}
                    <br />
                    <span className="text-muted">
                      Envoyer votre facture Par Mail
                    </span>
                  </Button>
                  <div
                    style={{
                      // border: "solid 1px gray",
                      width: "30%",
                      minHeight: 100,
                      borderRadius: 10,
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: 20,
                    }}
                  >
                    <Input
                      style={{ borderRadius: "10px", border: "solid 1px blue" }}
                    />
                    <div
                      style={{
                        borderRadius: "10px",
                        border: "solid 1px blue",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        padding: "0.7em",
                      }}
                    >
                      <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                          <Radio value={"TOTAL"}>Totalité</Radio>
                          <Radio value={"AVANCE"}>Avance</Radio>
                        </Space>
                      </Radio.Group>
                      {value == "AVANCE" && (
                        <>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <span>Avance</span> <Input />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <span>Reste</span> <Input />
                          </div>
                        </>
                      )}
                    </div>
                    <div
                      style={{
                        borderRadius: "10px",
                        border: "solid 1px blue",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexDirection: "column",
                        padding: "0.7em",
                        width: "100%",
                      }}
                    >
                      <button
                        onClick={() => {
                          setPayed(!payed);
                        }}
                        style={{
                          width: "100%",
                          height: "10%",
                          backgroundColor: "transparent",
                          borderColor: "transparent",
                        }}
                      >
                        <MailOutlined
                          style={{
                            fontSize: "42px",
                            color: "#1890ff",
                          }}
                        />
                        <br />
                        <span className="text-primary">
                          PAYER PAR CARTE BANCAIRE
                        </span>{" "}
                        <br />
                        <span className="text-muted">
                          Envoyer votre facture Par Mail
                        </span>
                      </button>
                      {payed && (
                        <>
                          <ul>
                            <li>Payment method 1</li>
                            <li>Payment method 1</li>
                            <li>Payment method 1</li>
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            {/* <h1>Facture</h1> */}
            <div>
              {savedCommande && (
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
                      fileUrl={`${BASE_URL}/${savedCommande.documentUrl}`}
                      plugins={[defaultLayoutPluginInstance]}
                    />
                  </div>
                </Worker>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TraitementFacture;
