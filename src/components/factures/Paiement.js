import React from "react";
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
const { Text } = Typography;
const { Meta } = Card;
const Paiement = () => {
  return (
    <main id="main" class="main bg-light">
      <PaiementHeader />
      <Row>
        <Col lg={{ span: 8 }} style={{ marginBottom: 20 }}>
          <Card size="small" style={{ marginLeft: 20 }}>
            <Text strong className="text-center">
              Facture #000584
            </Text>
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
                    <hr />
                  </td>
                  <td>
                    <DatePicker /> <hr />
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
                        Mouhamed@gmail.com
                      </Text>
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text className="d-flex">
                      Client:{" "}
                      <Text type="secondary" style={{ marginLeft: 8 }}>
                        SuperVision plus+
                      </Text>
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text className="d-flex">
                      Adresse:{" "}
                      <Text type="secondary" style={{ marginLeft: 8 }}>
                        Oinville-sur-Montcient
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
                      }}
                    >
                      <Text type="secondary" className="">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500.
                        <p>
                          {" "}
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
          <Card size="small" style={{ marginRight: 20, marginLeft: 20 }}>
            <Text strong className="text-center">
              Opération financière
            </Text>
            <Table borderless>
              <tbody>
                <tr>
                  <Text strong className="d-flex">
                    {" "}
                    Mode de paiement:
                  </Text>
                </tr>
                <tr className="d-flex">
                  <Text>La facture est payée par:</Text>
                </tr>
                <tr className="d-flex">
                  {" "}
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
                    {" "}
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
                  {" "}
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
                  {" "}
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
                  <Text type="secondary">Status</Text>
                  <Text type="success" style={{ marginLeft: 8 }}>
                    {" "}
                    <CheckCircleOutlined
                      style={{ fontSize: "15px", color: "" }}
                    />
                    Payée
                  </Text>
                </div>,
              ]}
              className="d-flex"
            />
          </Card>
        </Col>
        <Col lg={{ span: 8 }}>
          <Card size="small" style={{ marginRight: 20, height: 550 }}>
            <Text>
              {" "}
              <FileDoneOutlined
                style={{ fontSize: "28px", color: "#fff566" }}
              />
              Pour trouver une facture <Link to="/"> Cliquer ici.</Link>
            </Text>
            <p></p>
            <Button
              type="dashed"
              icon={
                <PrinterOutlined
                  style={{ fontSize: "18px", color: "#1890ff" }}
                />
              }
              style={{ width: 245 }}
            >
              Imprimer
            </Button>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default Paiement;
