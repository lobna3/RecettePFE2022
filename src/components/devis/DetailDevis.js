import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CommandeDetailHeader } from "../RacetteHeader";
import { Row, Col, Switch } from "antd";
import {
  CloseOutlined,
  EyeOutlined,
  DollarCircleOutlined,
  SyncOutlined,
  FormOutlined,
  CheckOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Table from "react-bootstrap/Table";
import { Card, Typography, DatePicker } from "antd";
import { Link, useParams, useLocation } from "react-router-dom";
import { getCommandesListDetailsApi } from "../../redux/actions/commande.details.actions";
const { Title, Text } = Typography;

const DetailDevis = () => {
  const { detail } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { commandeDetails } = useSelector((state) => state.detailsCommande);
  useEffect(() => {
    dispatch(getCommandesListDetailsApi(detail));
    console.log("URL", location.pathname);
  }, []);

  return (
    <main id="main" class="main bg-light">
      <CommandeDetailHeader />
      <Row>
        <Col span={8}>
          <Card
            size="small"
            style={{
              width: 350,
              marginBottom: 40,
              height: 525,
              marginLeft: 30,
              borderWidth: 1,
              borderRadius: "15px 15px",
            }}
          >
           
            <Title level={5}>Devis #{commandeDetails.nFacture}</Title>

            <Table borderless>
              <tbody>
                <tr>
                  <td>
                    <Text type="secondary" className="d-flex">
                      Date d'émission
                    </Text>
                  </td>
                  <td>
                    <Text type="secondary">Date d'échéance</Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <DatePicker />
                    {commandeDetails.dateEcheance}
                    <hr />
                  </td>
                  <td>
                    <DatePicker />
                    {commandeDetails.dateEmission}
                     <hr />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table borderless>
              <tbody>
                <tr>
                  <td COLSPAN="2">
                    <Text className="d-flex">Remarque:</Text>
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
                        </p>
                      </Text>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text className="d-flex">Contact:</Text>
                  </td>
                  <td>
                    <Text type="secondary">{commandeDetails.client.email} </Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text className="d-flex">Société: </Text>
                  </td>
                  <td>
                    <Text type="secondary">{commandeDetails.client.entreprise}</Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text className="d-flex"> Adresse: </Text>
                  </td>
                  <td>
                    <Text type="secondary">{commandeDetails.client.siteinternet}</Text>
                  </td>
                </tr>
              </tbody>
            </Table>
            <hr />
          </Card>
        </Col>
        <Col span={12} lg={16}>
          <Row>
            <Card
              size="small"
              style={{
                width: 800,
                marginLeft: 50,
                height: 200,
                borderWidth: 1,
                marginRight: 20,
                borderRadius: "15px 15px",
              }}
            >
              <Table hover size="sm" borderless>
                <thead style={{ borderWidth: 1 }}>
                  <tr>
                    <td className="text-muted d-flex">Produits / Services</td>
                    <td className="text-muted">Qté</td>
                    <td className="text-muted">Prix</td>
                    <td className="text-muted">Récurrente</td>
                  </tr>
                </thead>
                <tbody style={{ borderWidth: 1 }}>
                  <tr>
                    <td className="d-flex">{commandeDetails.articles.service}</td>
                    <td>
                      <span
                        style={{
                          borderWidth: 1,
                          borderStyle: "dashed",
                          borderColor: "#0d6efd",
                          padding: 2,
                        }}
                      >
                     {commandeDetails.articles.qte}
                      </span>
                    </td>
                    <td>{commandeDetails.articles.prix}</td>
                    <td>
                      <Switch
                        size="small"
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        defaultChecked
                      />
                    </td>
                  </tr>
                  
                  <p></p>
                </tbody>
              </Table>
              <Table hover size="sm">
                <thead>
                  <div
                    style={{
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "#e6f0fe",
                    }}
                  >
                    <Text type="secondary" className="d-flex">
                      Status
                      <Text type="success" style={{ marginLeft: 20 }}>
                        <CheckCircleOutlined />
                        Envoyé
                      </Text>
                      <Text strong style={{ marginLeft: 230 }}>
                        Total:
                      </Text>
                      <Text style={{ marginLeft: 20 }}>20200 TND </Text>
                    </Text>
                  </div>
                </thead>
              </Table>
            </Card>
          </Row>
          <br />
          <Row>
            <Card
              size="small"
              style={{
                width: 800,
                height: 300,
                marginLeft: 50,
                marginBottom: 40,
                borderWidth: 1,
                marginRight: 20,
                borderRadius: "15px 15px",
              }}
            >
              <Title level={5} className="d-flex">
                Suivie
              </Title>
              <Table hover borderless>
                <tbody>
                  <tr>
                    <td
                      style={{ backgroundColor: "#95de64" }}
                      className="rounded-circle"
                    >
                      <FormOutlined
                        style={{ fontSize: "24px", color: "#ffff" }}
                      />
                    </td>
                    <td className="text-muted d-flex">Commande crée </td>
                    <td className="text-muted">Janvier04, 2022</td>
                    <td className="text-muted">11:40Am</td>
                  </tr>
                  <p></p>
                  <tr>
                    <td
                      style={{ backgroundColor: "#bfbfbf" }}
                      className="rounded-circle"
                    >
                      <EyeOutlined
                        style={{ fontSize: "24px", color: "#ffff" }}
                      />
                    </td>
                    <td className="text-muted d-flex">
                      La commande a été vu par{" "}
                      <Link to=""> Foulen ben Foulen</Link>{" "}
                    </td>
                    <td className="text-muted">Janvier04, 2022</td>
                    <td className="text-muted">11:40Am</td>
                  </tr>
                  <p></p>
                  <tr>
                    <td
                      style={{ backgroundColor: "#135200" }}
                      className="rounded-circle"
                    >
                      <DollarCircleOutlined
                        style={{ fontSize: "24px", color: "#ffff" }}
                      />
                    </td>
                    <td className="text-muted d-flex">
                      La commande livré avec succées
                      <Link to=""> Livreur: Timimi </Link>
                    </td>
                    <td className="text-muted">Janvier04, 2022</td>
                    <td className="text-muted">11:40Am</td>
                  </tr>
                  <p></p>
                  <tr>
                    <td
                      style={{ backgroundColor: "#ff7875" }}
                      className="rounded-circle"
                    >
                      <SyncOutlined
                        style={{ fontSize: "24px", color: "#ffff" }}
                      />
                    </td>
                    <td className="text-muted d-flex">
                      La commande a été modifié par:
                      <Link to=""> Mouhamed ben fraj</Link>
                    </td>
                    <td className="text-muted">Janvier04, 2022</td>
                    <td className="text-muted">11:40Am</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Row>
        </Col>
      </Row>
    </main>
  );
};

export default DetailDevis;
