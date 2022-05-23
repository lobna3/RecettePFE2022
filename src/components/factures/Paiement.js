import React, { useState, useEffect } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { useSelector ,useDispatch} from "react-redux";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useParams, useLocation } from "react-router-dom";
import { getCommandesListDetailsApi } from "../../redux/actions/commande.details.actions";
import moment from "moment";
import { BASE_URL } from "../../utils/apiHelpers";
import { PaiementHeader } from "../RacetteHeader";
import { Row, Col, Card, Typography, DatePicker, Button } from "antd";
import {
  CreditCardOutlined,
  AliyunOutlined,
  CheckCircleOutlined,
  FileDoneOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import ImprimerFacture from "./ImprimerFacture";

const { Text , Title } = Typography;
const { Meta } = Card;

const Paiement = () => {
  const [isOpen, setIsopen] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { savedCommande } = useSelector((state) => state.commande);
  const {id} = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { commandeDetails } = useSelector((state) => state.detailsCommande);
  useEffect(() => {
    dispatch(getCommandesListDetailsApi(id));
    console.log("URL", location.pathname);
  }, []);
  return (
    <>
     <main id="main" className="main bg-light">
      <PaiementHeader />
      <Row>
        <Col lg={{ span: 8 }} style={{ marginBottom: 20 }}>
          <Card size="small" style={{ marginLeft: 20 , borderRadius: "10px 10px",}}>
            <Title level={5}> Facture #{commandeDetails.nFacture}</Title>
            <p></p>
            <Table borderless>
              <tbody>
                <tr>
                  <td>
                    <Text type="secondary" className="d-flex">
                      Date d'émission
                    </Text>
                  </td>
                  <td>
                    <Text type="secondary">Date de paiement</Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <DatePicker />
                    {moment(commandeDetails.dateEmission).format(
                        "DD-MM-YYYY"
                      )}
                    <hr />
                  </td>
                  <td>
                    <DatePicker /> 
                    {moment(commandeDetails.dateEcheance).format(
                        "DD-MM-YYYY"
                      )}
                    <hr />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table borderless>
              <tbody>
                <tr>
                  <td>
                    <Text className="d-flex">
                      Contact:{" "}
                      <Text type="secondary" style={{ marginLeft: 8 }}>
                      {commandeDetails &&
                          commandeDetails.client &&
                          commandeDetails.client.email &&
                          commandeDetails.client.email}
                      </Text>
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text className="d-flex">
                      Client:{" "}
                      <Text type="secondary" style={{ marginLeft: 8 }}>
                      {commandeDetails &&
                          commandeDetails.client &&
                          commandeDetails.client.nom &&
                          commandeDetails.client.nom}  {commandeDetails &&
                            commandeDetails.client &&
                            commandeDetails.client.prenom &&
                            commandeDetails.client.prenom}
                      </Text>
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text className="d-flex">
                      Adresse:{" "}
                      <Text type="secondary" style={{ marginLeft: 8 }}>
                      {commandeDetails &&
                          commandeDetails.client &&
                          commandeDetails.client.siteinternet &&
                          commandeDetails.client.siteinternet}
                      </Text>
                    </Text>
                  </td>
                </tr>
                <hr />
                <tr>
                  <td COLSPAN="2">
                    <Text className="d-flex">Note:</Text>
                    <div
                      className="row"
                      style={{
                        borderWidth: 1,
                        borderStyle: "dashed",
                        borderColor: "#0d6efd",
                        backgroundColor: "#f6ffed",
                        borderRadius: "10px 10px",
                      }}
                    >
                      <Text type="secondary" className="">
                      {commandeDetails.remarque}
                        <p>
                          <br />
                          <br />
                          <br />
                        </p>
                      </Text>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col lg={{ span: 8 }}>
          <Card size="small" style={{ marginRight: 20, marginLeft: 20,   borderRadius: "10px 10px",marginBottom:20 }}>
            <Title level={5}>Opération financière</Title>
            <p></p>
            <Table borderless>
              <tbody>
                <tr>
                  <Text strong className="d-flex">
              
                    Mode de paiement:
                  </Text>
                </tr>
                <tr className="d-flex">
                  <Text>La facture est payée par:</Text>
                </tr>
                <tr className="d-flex">
             
                  <td>
                    <CreditCardOutlined
                      style={{ fontSize: "18px", color: "#8c8c8c" }}
                    />
                  </td>
                  <td>
                    <Text> Carte Bancaire</Text>
                  </td>
                </tr>
                <tr className="d-flex">
                  <td>
                    <AliyunOutlined
                      style={{ fontSize: "18px", color: "#8c8c8c" }}
                    />
                  </td>
                  <td>
                  
                    <Text className="d-flex">Chéque</Text>
                  </td>
                </tr>
                <tr className="d-flex">
                  <Text strong>Référence de Paiement:</Text>
                </tr>
                <tr>
                  <td className="d-flex">
                    <Text>Référence transaction:</Text>
                  </td>
                  <td>
                    <Link to="/">1235855887789</Link>
                  </td>
                </tr>
                <tr>
                  <td className="d-flex">
                    <Text>Numéro chéque:</Text>
                  </td>
                  <td>
                    <Link to="/">0005</Link>
                  </td>
                </tr>
                <tr className="d-flex">
                 
                  <Text strong>Montant reçu:</Text>
                </tr>
                <tr
                  style={{
                    borderWidth: 1,
                    borderStyle: "dashed",
                    borderColor: "#bfbfbf",
                    backgroundColor: "#f6ffed",
                  }}
                >
                  
                  <Text type="secondary" style={{ marginLeft: 90 }}>
                    <Text type="success">1083</Text> TND
                  </Text>
                </tr>
              </tbody>
            </Table>
            <p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
            <Meta
              title=""
              description={[
                <div className="d-flex">
                  <Text type="secondary">Status:</Text>
                  <Text type="success" style={{ marginLeft: 8 }}>
                   {commandeDetails.status}
                  </Text>
                </div>,
              ]}
              className="d-flex"
            />
          </Card>
        </Col>
        <Col lg={{ span: 8 }}>
          <Card size="small" style={{ marginRight: 20, height: 570 ,   borderRadius: "10px 10px",}}>
            <Text>
             
              <FileDoneOutlined
                style={{ fontSize: "28px", color: "#fff566" }}
              />
              Pour trouver une facture <span className="text-primary" onClick={() => {
                    setIsopen(true);
                  }}> Cliquer ici.</span>
            </Text>
            <p></p>
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
            <Button  onClick={() => {
                    setIsopen(true);
                  }}
              type="dashed"
              icon={
                <PrinterOutlined
                  style={{ fontSize: "18px", color: "#1890ff" }}
                />
              }
              style={{ width: 245 ,marginTop:10}}
            >
              Imprimer
            </Button>
          </Card>
        </Col>
      </Row>
    </main>
     <ImprimerFacture
        isOpen={isOpen}
        handleClose={() => {
          setIsopen(false);
        }}
      />
    </>
   
  );
};

export default Paiement;
