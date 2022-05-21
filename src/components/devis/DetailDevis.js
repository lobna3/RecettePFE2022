import React, { useState } from "react";
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
} from "@ant-design/icons";
import Table from "react-bootstrap/Table";
import { Card, Typography, DatePicker } from "antd";
import { useParams, useLocation } from "react-router-dom";
import { getCommandesListDetailsApi } from "../../redux/actions/commande.details.actions";
import { updateCommande } from "../../redux/actions/commande.actions";
import moment from "moment";
import SuivieCommande from "../commandes/SuivieCommande";
const { Title, Text } = Typography;

const DetailDevis = () => {
  const [isOpen, setIsopen] = useState(false);
  const { detail } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { commandeDetails } = useSelector((state) => state.detailsCommande);
  useEffect(() => {
    dispatch(getCommandesListDetailsApi(detail));
    console.log("URL", location.pathname);
  }, []);

  const displayIcon = (typeS) => {
    if (typeS === "Commande créer") {
      return (
       
          <FormOutlined style={{ fontSize: "24px", color: "#ffff" }} />
      
      );
    } else if (typeS === "La commande vu par") {
      return <EyeOutlined style={{ fontSize: "24px", color: "#ffff" }} />;
    } else if (typeS === "La commande livré avec succées") {
      return (
        <DollarCircleOutlined style={{ fontSize: "24px", color: "#ffff" }} />
      );
    } else if (typeS === "La commande a été modifié ") {
      return <SyncOutlined style={{ fontSize: "24px", color: "#ffff" }} />;
    } else {
      return <FormOutlined style={{ fontSize: "24px", color: "#ffff" }} />;
    }
  };

  return (
    <>
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
              <Title level={5}>Commande #{commandeDetails.nFacture}</Title>

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
                      <Text type="secondary">
                        {commandeDetails &&
                          commandeDetails.client &&
                          commandeDetails.client.email &&
                          commandeDetails.client.email}
                      </Text>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Text className="d-flex">Société: </Text>
                    </td>
                    <td>
                      <Text type="secondary">
                        {commandeDetails &&
                          commandeDetails.client &&
                          commandeDetails.client.entreprise &&
                          commandeDetails.client.entreprise}
                      </Text>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Text className="d-flex"> Adresse: </Text>
                    </td>
                    <td>
                      <Text type="secondary">
                        {commandeDetails &&
                          commandeDetails.client &&
                          commandeDetails.client.siteinternet &&
                          commandeDetails.client.siteinternet}
                      </Text>
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
                      <td className="text-muted">PU</td>
                      <td className="text-muted">Prix</td>
                      <td className="text-muted">Récurrente</td>
                    </tr>
                  </thead>
                  <tbody style={{ borderWidth: 1 }}>
                    {commandeDetails &&
                      commandeDetails.articles &&
                      commandeDetails.articles.map((elm) => (
                        <tr>
                          <td className="d-flex">{elm.service.titre}</td>
                          <td>{elm.qte}</td>
                          <td>{elm.pu}DT</td>
                          <td>{elm.prix}DT</td>
                          <td>
                            <Switch
                              size="small"
                              checkedChildren={<CheckOutlined />}
                              unCheckedChildren={<CloseOutlined />}
                              defaultChecked
                            />
                          </td>
                        </tr>
                      ))}
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
                        Status:
                        <Text type="success" style={{ marginLeft: 5 }}>
                          {commandeDetails.status}
                        </Text>
                        <Text strong style={{ marginLeft: 230 }}>
                          Total:
                        </Text>
                        <Text style={{ marginLeft: 20 }}>
                          {commandeDetails.total} TND
                        </Text>
                      </Text>
                    </div>
                  </thead>
                </Table>
              </Card>
            </Row>
            <br />
            <Row></Row>
            <Row>
              <Card
                size="small"
                style={{
                  width: 800,
                 // height: 300,
                  marginLeft: 50,
                  marginBottom: 40,
                  borderWidth: 1,
                  marginRight: 20,
                  borderRadius: "15px 15px",
                }}
              >
                <Title level={5} className="d-flex">
                  <span
                    onClick={() => {
                      setIsopen(true);
                     // dispatch(updateCommande(commandeDetails._id));
                    }}
                  >
                    Suivie
                  </span>
                </Title>
                <Table borderless>
                  <tbody>
                    {commandeDetails &&
                      commandeDetails.suivies &&
                      commandeDetails.suivies.map((elm) => (
                        <tr>
                          <td
                            style={{ backgroundColor: "#95de64", width: 1 }}
                            className="rounded-circle"
                          >
                            {displayIcon(elm.typeS)}
                          </td>
                          <td className="text-muted d-flex">
                            {elm.typeS}
                            {elm.descriptionS}
                            {elm.titreS}
                          </td>
                          <td className="text-muted">
                            {moment(elm.createdAt).format("DD-MM-YYYY")}
                          </td>
                          <td className="text-muted">
                            {moment(elm.createdAt).format("HH:mm")} Am
                          </td>
                          <p></p>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Card>
            </Row>
          </Col>
        </Row>
      </main>
      <SuivieCommande
        isOpen={isOpen}
        handleClose={() => {
          setIsopen(false);
        }}
      />
    </>
  );
};

export default DetailDevis;
/*   <p></p>
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
                      La commande a été vu par {" "}
                      <Link to=""> Foulen ben Foulen</Link> {" "}
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
                  </tr> */
