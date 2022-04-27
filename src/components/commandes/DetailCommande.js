import React from "react";
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
import { Card, Typography, Space } from "antd";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;

function DetailCommande() {
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
              borderWidth: 3,
            }}
          >
            <Title level={5}>Commande #003645</Title>
            <Space style={{ display: "flex" }}>
              <Text type="secondary">Date d'émission </Text>
              <Text
                type="secondary"
                style={{ justifyContent: "flex-end", marginLeft: 80 }}
              >
                Date d'échéance
              </Text>
              <hr />
            </Space>
            <Space style={{ display: "flex" }}>
              <Text type="secondary">26/04/2022</Text>
              <Text
                type="secondary"
                style={{ justifyContent: "flex-end", marginLeft: 110 }}
              >
                30/04/2022
              </Text>
              <hr />
            </Space>
            <br />
            <Text className="d-flex">Remarque:</Text>
            <div
              style={{
                borderWidth: 1,
                borderStyle: "dashed",
                borderColor: "#0d6efd",
                backgroundColor: "#e6f0fe",
              }}
            >
              {" "}
              <Text type="secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </Text>
            </div>
            <br />
            <Text className="d-flex">
              Contact: *{""} <Text type="secondary">Mouhamed@gmail.com</Text>{" "}
            </Text>
            <Text className="d-flex">
              Société: *{""} <Text type="secondary">SuperVision plus+</Text>{" "}
            </Text>
            <Text className="d-flex">
              Adresse: *{""} <Text type="secondary">Mouhamed@gmail.com</Text>{" "}
            </Text>
            <hr />
          </Card>
        </Col>
        <Col span={12} lg={16}>
          <Row>
            {" "}
            <Card
              size="small"
              style={{
                width: 800,
                marginLeft: 50,
                height: 200,
                borderWidth: 3,
                marginRight: 20,
              }}
            >
              <Table hover size="sm" borderless>
                <thead style={{ borderWidth: 2 }}>
                  <tr>
                    <td className="text-muted d-flex">Produits / Services</td>
                    <td className="text-muted">Qté</td>
                    <td className="text-muted">Prix</td>
                    <td className="text-muted">Récurrente</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="d-flex">Produit1</td>
                    <td>
                      <span
                        style={{
                          borderWidth: 1,
                          borderStyle: "dashed",
                          borderColor: "#0d6efd",
                        }}
                      >
                        2
                      </span>
                    </td>
                    <td>200Dt</td>
                    <td>
                      <Switch
                        size="small"
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        defaultChecked
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div
                style={{
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "#e6f0fe",
                }}
              >
                <Text type="secondary" className="d-flex">
                  {" "}
                  Status
                  <Text type="success" style={{ marginLeft: 20 }}>
                    <CheckCircleOutlined />
                    Envoyé
                  </Text>
                  <Text strong style={{ marginLeft: 230 }}>
                    Total:{" "}
                  </Text>
                  <Text style={{ marginLeft: 20 }}>20200 TND </Text>
                </Text>
              </div>
            </Card>
          </Row>
          <br />
          <Row>
            {" "}
            <Card
              size="small"
              style={{
                width: 800,
                height: 300,
                marginLeft: 50,
                marginBottom: 40,
                borderWidth: 3,
                marginRight: 20,
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
                      La commande livré avec succées{" "}
                        <Link to=""> Livreur: Timimi </Link>{" "}
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
                      La commande a été modifié par: {" "}
                      <Link to=""> Mouhamed ben fraj</Link>{" "}
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
}

export default DetailCommande;
