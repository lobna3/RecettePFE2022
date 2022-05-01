import React, { useState } from "react";
import { AjoutDHeader } from "../RacetteHeader";
import {
  Row,
  Col,
  Card,
  Form,
  Typography,
  Input,
  Button,
  Select,
  DatePicker,
  Switch,
  Badge,
} from "antd";
import {
  EyeOutlined,
  SettingOutlined,
  FileTextOutlined,
  AuditOutlined,
  PrinterFilled,
  MailOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "../../config/axios";
import { useForm, Controller } from "react-hook-form";
import Articles from "../articles/Articles";
import "./devis1.css";
const { Text } = Typography;
const { TextArea } = Input;

export default function AjoutDevis1() {
  const [componentSize, setComponentSize] = useState("default");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      dateEmission: Date,
      dateEcheance: Date,
      condition: "Personalisé",
      nFacture: "",
      nReference: "",
      total: "",
      taxes: "",
      remise: "",
      totalTtc: "",
      paye: "",
      solde: "",
      note: "",
      remarque: "",
      recurrente: "oui",
      status: "Devis",
      etat: "NonPayé",
      client: "625d279312fbb95eed52430a",

      qte: "5",
      pu: "150",
      taxe: "8",
      prix: "250",
      service: "623efa58cef38dae7b89e586",

      typeS: "modifier",
      titreS: "CommandeF",
      descriptionS: "Commande vu par Monsieur Foulen Ben Foulen",

      soldeP: "10000",
      typePaiement: "chéque",
      regPaiement: "carte",
      etatP: "non payé",
      reste: "10",
      avance: "20",
      mis: "2",
      nCarte: "123456789",
      ccv: "2",
      dateP: Date,
      montantP: "20000",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const [data, setdata] = useState({
    dateEmission: Date,
    dateEcheance: Date,
    condition: "Personalisé",
    nFacture: "",
    nReference: "",
    total: "",
    taxes: "",
    remise: "",
    totalTtc: "",
    paye: "",
    solde: "",
    note: "",
    remarque: "",
    recurrente: "oui",
    status: "Devis",
    etat: "NonPayé",
    client: "625d279312fbb95eed52430a",

    qte: "5",
    pu: "150",
    taxe: "8",
    prix: "250",
    service: "623efa58cef38dae7b89e586",

    typeS: "modifier",
    titreS: "CommandeF",
    descriptionS: "Commande vu par Monsieur Foulen Ben Foulen",

    soldeP: "10000",
    typePaiement: "chéque",
    regPaiement: "carte",
    etatP: "non payé",
    reste: "10",
    avance: "20",
    mis: "2",
    nCarte: "123456789",
    ccv: "2",
    dateP: Date,
    montantP: "20000",
  });

  const createCommande = () => {
    let obj = {
      commande: data,
      articles: [
        {
          qte: data.qte,
          pu: data.pu,
          taxe: data.taxe,
          prix: data.prix,
          service: data.service,
        },
      ],
      suivies: [
        {
          typeS: data.typeS,
          titreS: data.titreS,
          descriptionS: data.descriptionS,
        },
      ],
      paiements: [
        {
          soldeP: data.soldeP,
          typePaiement: data.typePaiement,
          regPaiement: data.regPaiement,
          etatP: data.etatP,
          reste: data.reste,
          avance: data.avance,
          mis: data.mis,
          nCarte: data.nCarte,
          ccv: data.ccv,
          dateP: data.dateP,
          montantP: data.montantP,
        },
      ],
    };
    axios
      .post("ajouter_commande", obj)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          //setsuccess(true);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <main id="main" className="main bg-light">
      <AjoutDHeader />
      <Row>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col span={8} push={16}>
              <Card
                style={{
                  marginLeft: 10,
                  backgroundColor: "#f0f5ff",
                  borderRadius: "20px",
                }}
              >
                <Button
                  block
                  icon={
                    <EyeOutlined
                      style={{
                        fontSize: "20px",
                        color: "#1890ff",
                      }}
                    />
                  }
                >
                  Visualiser
                </Button>
                <p></p>
                <Button
                  block
                  icon={
                    <FileTextOutlined
                      style={{ fontSize: "18px", color: "#ffff" }}
                    />
                  }
                  type="primary"
                  style={{ backgroundColor: "#52c41a", borderColor: "white" }}
                >
                  Enregistrer dans le brouillon
                </Button>
                <p></p>
                <Button
                  type="primary"
                  icon={
                    <AuditOutlined
                      style={{ fontSize: "18px", color: "#ffff" }}
                    />
                  }
                  block
                  data-bs-toggle="modal"
                  data-bs-target="#largeModal"
                >
                  Valider et générer
                </Button>
                <p></p>
                <p>
                  <Text strong className="d-flex">
                    Paramétre de facture
                    <SettingOutlined style={{ fontSize: "18px" }} />
                  </Text>
                </p>
                <hr></hr>
                <p className="d-flex">
                  <Text style={{ color: "#cf1322" }}>
                    Adresse de Facturation <Switch size="small" />
                  </Text>
                </p>
                <p className="d-flex">
                  <Text style={{ color: "#cf1322" }}>
                    Adresse de Livraison <Switch size="small" />
                  </Text>
                </p>
                <Badge.Ribbon text="Note" color="">
                  <TextArea
                    style={{
                      borderWidth: 1,
                      borderStyle: "dashed",
                      borderColor: "#0d6efd",
                      borderRadius: "10px",
                    }}
                    name="note"
                    placeholder="Note"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                  />
                </Badge.Ribbon>
                <p></p>
                <Badge.Ribbon text="Condition" color="">
                  <TextArea
                    style={{
                      borderWidth: 1,
                      borderStyle: "dashed",
                      borderColor: "#0d6efd",
                      borderRadius: "10px",
                    }}
                    name="remarque"
                    placeholder="Condition générale"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                  />
                </Badge.Ribbon>
              </Card>
            </Col>

            <Col span={16} pull={8}>
              <Card
                style={{
                  marginLeft: 20,
                  marginBottom: 20,
                  borderRadius: "20px",
                }}
              >
                <Form initialValues={{ size: componentSize }}>
                  <Row>
                    <Controller
                      name="dateEmission"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Form.Item
                          {...field}
                          label="Date émission"
                          style={{
                            display: "inline-block",
                            width: "calc(25% - 8px)",
                            margin: "0 20px",
                            textAlign: "left",
                          }}
                        >
                          <DatePicker
                            //selected={data.dateEmission}

                            dateFormat="DD MMM YYYY"
                          />
                        </Form.Item>
                      )}
                    />
                    <Controller
                      name="dateEcheance"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Form.Item
                          {...field}
                          label="Date échéance"
                          style={{
                            display: "inline-block",
                            width: "calc(25% - 8px)",
                            margin: "0 20px",
                            textAlign: "left",
                          }}
                        >
                          <DatePicker
                            // selected={data.dateEcheance}

                            dateFormat="DD MMM YYYY"
                          />
                        </Form.Item>
                      )}
                    />
                    <Controller
                      name="condition"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) =>  <Form.Item
                      label="Condition"
                      style={{
                        display: "inline-block",
                        width: "calc(30% - 8px)",
                        margin: "0 20px",
                        textAlign: "left",
                      }}
                    >
                      <Select  {...field}>
                        <Select.Option value={"Personnalisé"}>Personnalisé</Select.Option>
                        <Select.Option value={"échéance à la fin du mois"}></Select.Option>
                        <Select.Option value={"échéance à la fin du mois prochain"}>  
                        </Select.Option>
                      </Select>
                    </Form.Item>}
                    /> 
                  </Row>
                  <hr />
                  <Row>
                    <Text
                      type="primary"
                      style={{
                        color: "#1890ff",
                        marginRight: 10,
                        marginLeft: 20,
                      }}
                    >
                      Facture N:
                    </Text>
                    <Form.Item>
                      <Button
                        label=""
                        type="primary"
                        style={{ display: "inline-block", marginLeft: 4 }}
                      >
                        Auto
                      </Button>
                    </Form.Item>
                    <Form.Item>
                      <Button
                        style={{ displaay: "inline-block", marginLeft: 8 }}
                      >
                        Manuel
                      </Button>
                    </Form.Item>
                    <Form.Item>
                      <Input
                        name="nFacture"
                        {...("nFacture", { required: true, minLength: 6 })}
                        style={{ display: "inline-block", marginLeft: 8 }}
                        placeholder="00001"
                      />
                    </Form.Item>
                  </Row>
                  <hr />
                  <Row>
                    <Form.Item
                      label="Client"
                      style={{
                        display: "inline-block",
                        width: "calc(45% - 8px)",
                        margin: "0 20px",
                        textAlign: "left",
                      }}
                    >
                      <Select name="client">
                        <Select.Option value="demo">Demo</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="N de réference"
                      style={{
                        display: "inline-block",
                        width: "calc(44% - 8px)",
                        margin: "0 20px",
                        textAlign: "left",
                      }}
                    >
                      <Input
                        name="nReference"
                        {...("nReference", { required: true, minLength: 6 })}
                      />
                    </Form.Item>
                  </Row>
                  <Row>
                    <Form.Item
                      label="Adresse de Facturation"
                      style={{
                        display: "inline-block",
                        width: "calc(44% - 8px)",
                        margin: "0 20px",
                        textAlign: "left",
                      }}
                    >
                      <Input placeholder="Sousse, Tunis..."></Input>
                    </Form.Item>
                    <Form.Item
                      label="Adresse de Livraison"
                      style={{
                        display: "inline-block",
                        width: "calc(45% - 8px)",
                        margin: "0 20px",
                        textAlign: "left",
                      }}
                    >
                      <Input placeholder="Tunis, Sousse..." />
                    </Form.Item>
                  </Row>
                  <hr />
                  <Row>
                    <Button block> + Ajouter article</Button>
                    <p></p>
                    <Articles />
                  </Row>
                  <hr />
                  <Card
                    size="small"
                    style={{
                      marginLeft: 400,
                      borderRadius: "20px",
                      overflow: "hidden",
                      bordered: false,
                    }}
                  >
                    <Form.Item
                      label="Total"
                      wrapperCol={{
                        span: 16,
                      }}
                      labelCol={{
                        span: 8,
                      }}
                    >
                      <Input
                        name="total"
                        placeholder="20.000TND"
                        {...("total", { required: true, minLength: 6 })}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Rmise"
                      wrapperCol={{
                        span: 16,
                      }}
                      labelCol={{
                        span: 8,
                      }}
                    >
                      <Input
                        style={{
                          borderWidth: 1,
                          borderStyle: "dashed",
                          borderColor: "#0d6efd",
                        }}
                        name="remise"
                        placeholder=""
                        {...("remise", { required: true, minLength: 6 })}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Taxes"
                      wrapperCol={{
                        span: 16,
                      }}
                      labelCol={{
                        span: 8,
                      }}
                    >
                      <Input
                        style={{
                          borderWidth: 1,
                          borderStyle: "dashed",
                          borderColor: "#0d6efd",
                        }}
                        name="taxes"
                        placeholder=""
                        {...("taxes", { required: true, minLength: 6 })}
                      />
                    </Form.Item>
                    <hr />
                    <Form.Item
                      label="TotalTTC"
                      wrapperCol={{
                        span: 16,
                      }}
                      labelCol={{
                        span: 8,
                      }}
                    >
                      <Input
                        name="totalTtc"
                        placeholder="20.000TND"
                        {...("totalTtc", { required: true, minLength: 6 })}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Payé"
                      wrapperCol={{
                        span: 16,
                      }}
                      labelCol={{
                        span: 8,
                      }}
                    >
                      <td></td>
                      <Input
                        name="paye"
                        placeholder="-0.000TND"
                        {...("paye", { required: true, minLength: 6 })}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Solde"
                      wrapperCol={{
                        span: 16,
                      }}
                      labelCol={{
                        span: 8,
                      }}
                    >
                      <Input
                        name="solde"
                        placeholder="20.000TND"
                        {...("solde", { required: true, minLength: 6 })}
                      />
                    </Form.Item>
                  </Card>
                  <br />
                  <Card
                    size="small"
                    style={{ backgroundColor: "#f9f0ff", borderRadius: "20px" }}
                  >
                    <Button type="primary" style={{ marginTop: 30 }}>
                      Payé
                    </Button>
                    <Form.Item
                      label="Remise"
                      style={{
                        display: "inline-block",
                        width: "calc(25% - 8px)",
                        marginLeft: 82,
                        textAlign: "left",
                      }}
                    >
                      <Input name="remise" placeholder="75.000Dt"></Input>
                    </Form.Item>
                    <Form.Item
                      label="Taxes"
                      style={{
                        display: "inline-block",
                        width: "calc(25% - 8px)",
                        marginLeft: 8,
                        textAlign: "left",
                      }}
                    >
                      <Input name="taxes" placeholder="25.000Dt"></Input>
                    </Form.Item>
                    <Form.Item
                      label="Total"
                      style={{
                        display: "inline-block",
                        width: "calc(25% - 8px)",
                        marginLeft: 8,
                        textAlign: "left",
                      }}
                    >
                      <Input name="total" placeholder="95.000"></Input>
                    </Form.Item>
                  </Card>
                </Form>
              </Card>
            </Col>
          </Row>
          <button
            type="submit"
            className="btn btn-primary "
            style={{ marginBottom: 20 }}
          >
            Ajouter
          </button>
        </form>
      </Row>

      <div className="modal fade" id="largeModal" tabindex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-primary">
              <h6 className="modal-title  text-white">Traitement Devis</h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <br />
              <div className="row">
                <div className="col-md-4">
                  <div className="card" style={{ marginLeft: 40, height: 200 }}>
                    <div className="card-body">
                      <Link to="">
                        <h6 className="card-title">
                          <PrinterFilled
                            style={{
                              fontSize: "42px",
                              color: "#1890ff",
                            }}
                          />
                        </h6>
                        <h6 className="card-subtitle mb-2 ">Imprimer</h6>
                        <p className="card-subtitle mb-2 text-muted">
                          Imprimer votre devis
                        </p>
                        <p class="card-text"></p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card"
                    style={{ marginLeft: 20, marginRight: 20, height: 200 }}
                  >
                    <div className="card-body">
                      <Link to="">
                        <h6 class="card-title">
                          <MailOutlined
                            style={{
                              fontSize: "42px",
                              color: "#1890ff",
                            }}
                          />
                        </h6>
                        <h6 className="card-subtitle mb-2 ">Envoyer</h6>
                        <p className="card-subtitle mb-2 text-muted">
                          Envoyer votre devis
                        </p>
                        <p class="card-text"></p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card"
                    style={{ marginRight: 40, height: 200 }}
                  >
                    <div className="card-body">
                      <Link to="">
                        <h6 className="card-title">
                          <FormOutlined
                            style={{
                              fontSize: "42px",
                              color: "#1890ff",
                            }}
                          />
                        </h6>
                        <h6 className="card-subtitle mb-2">Visualiser</h6>
                        <p className="card-subtitle mb-2 text-muted">
                          Modifier votre devis
                        </p>
                        <p className="card-text"></p>
                      </Link>
                    </div>
                  </div>
                  <div className="card" style={{ height: 25, marginRight: 40 }}>
                    <p className="text-muted">
                      <small>
                        Pour modifier votre devis
                        <Link to=""> cliquez ici !</Link>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Button
                type="primary"
                style={{ backgroundColor: "#8c8c8c", borderColor: "white" }}
                data-bs-dismiss="modal"
              >
                Retour
              </Button>
              <Button
                type="primary"
                style={{ backgroundColor: "#52c41a", borderColor: "white" }}
              >
                Accepter
              </Button>
              <Button type="primary">Enregistrer</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

/*<Row>
                    <Col lg={{ span: 24, offset: 8 }}>
                      <Form.Item
                        label="Total"
                        style={{ display: "inline-block", textAlign: "left" }}
                      >
                        <Input
                          onChange={handleChange}
                          value={data.total}
                          name="total"
                          placeholder="20.000TND"
                          {...("total", { required: true, minLength: 6 })}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={{ span: 24, offset: 8 }}>
                      <Form.Item
                        label="Rmise"
                        style={{ display: "inline-block", textAlign: "left" }}
                      >
                        <Input
                          style={{
                            borderWidth: 1,
                            borderStyle: "dashed",
                            borderColor: "#0d6efd",
                          }}
                          onChange={handleChange}
                          value={data.remise}
                          name="remise"
                          placeholder=""
                          {...("remise", { required: true, minLength: 6 })}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={{ span: 24, offset: 8 }}>
                      <Form.Item
                        label="Taxes"
                        style={{ display: "inline-block", textAlign: "left" }}
                      >
                        <Input
                          style={{
                            borderWidth: 1,
                            borderStyle: "dashed",
                            borderColor: "#0d6efd",
                          }}
                          onChange={handleChange}
                          value={data.taxes}
                          name="taxes"
                          placeholder=""
                          {...("taxes", { required: true, minLength: 6 })}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
  <Row>
                    <Col lg={{ span: 24, offset: 8 }}>
                      <Form.Item
                        label="TotalTTC"
                        style={{ display: "inline-block", textAlign: "left" }}
                      >
                        <Input
                          onChange={handleChange}
                          value={data.totalTtc}
                          name="totalTtc"
                          placeholder="20.000TND"
                          {...("totalTtc", { required: true, minLength: 6 })}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={{ span: 24, offset: 8 }}>
                      <Form.Item
                        label="Payé"
                        style={{ display: "inline-block", textAlign: "left" }}
                      >
                        <Input
                          onChange={handleChange}
                          value={data.paye}
                          name="paye"
                          placeholder="-0.000TND"
                          {...("paye", { required: true, minLength: 6 })}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={{ span: 24, offset: 8 }}>
                      <Form.Item
                        label="Solde"
                        style={{ display: "inline-block", textAlign: "left" }}
                      >
                        <Input
                          onChange={handleChange}
                          value={data.solde}
                          name="solde"
                          placeholder="20.000TND"
                          {...("solde", { required: true, minLength: 6 })}
                        />
                      </Form.Item>
                    </Col>
                  </Row> */
