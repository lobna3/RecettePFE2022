import React, { useState ,useEffect} from "react";
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
import { useForm, Controller } from "react-hook-form";
import Articles from "../articles/Articles";
import "./devis1.css";
import { useToasts } from "react-toast-notifications";
import { useDispatch, useSelector } from "react-redux";
import { addCommandetApi, addStep } from "../../redux/actions/commande.actions";
import { getClientListApi } from "../../redux/actions/client.actions";
const { Text } = Typography;
const { TextArea } = Input;

export default function AjoutDevis1() {
  const [componentSize, setComponentSize] = useState("default");
  const { addToast } = useToasts();
  const { addCommandeInfo } = useSelector((state) => state.commande);
  const { clientList } = useSelector((state) => state.client);
  const [selectedClient, setSelectedClient] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClientListApi());
  }, []);

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
      adresseFacturation: "",
      adresseLivraison: "",

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
    dispatch(addStep(data));
    console.log("Commande info", addCommandeInfo);
    let {
      dateEmission,
      dateEcheance,
      condition,
      nFacture,
      nReference,
      total,
      taxes,
      remise,
      totalTtc,
      paye,
      solde,
      note,
      remarque,
      recurrente,
      status,
      adresseFacturation,
      adresseLivraison,
      qte,
      pu,
      taxe,
      prix,
      service,
      etat,
      typeS,
      titreS,
      descriptionS,
      soldeP: soldeP,
      typePaiement,
      regPaiement,
      etatP,
      reste,
      avance,
      mis,
      nCarte,
      ccv,
      dataP,
      montantP,
    } = addCommandeInfo;
    let commande = {
      dateEmission,
      dateEcheance,
      condition,
      nFacture,
      nReference,
      total,
      taxes,
      remise,
      totalTtc,
      paye,
      solde,
      note,
      remarque,
      recurrente,
      status,
      etat,
      client: "625d279312fbb95eed52430a",
      adresseFacturation,
      adresseLivraison,
      qte,
      pu,
      taxe,
      prix,
      service: "623efa58cef38dae7b89e586",
      typeS,
      titreS,
      descriptionS,
      soldeP: soldeP,
      typePaiement,
      regPaiement,
      etatP,
      reste,
      avance,
      mis,
      nCarte,
      ccv,
      dataP,
      montantP,
    };

    let { articles } = addCommandeInfo;
    let { suivies } = addCommandeInfo;
    let { paiements } = addCommandeInfo;
    dispatch(
      addCommandetApi(
        {
          commande: commande,
          articles: articles,
          suivies: suivies,
          paiements: paiements,
        },
        addToast
      )
    );
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
                  style={{ backgroundColor: "#95de64", borderColor: "white" }}
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
                  <Controller
                    name="note"
                    control={control}
                    rules={{ required: false }}
                    render={({ field }) => (
                      <TextArea
                        {...field}
                        style={{
                          borderWidth: 1,
                          borderStyle: "dashed",
                          borderColor: "#0d6efd",
                          borderRadius: "10px",
                        }}
                        placeholder="Note"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                      />
                    )}
                  />
                </Badge.Ribbon>
                <p></p>
                <Badge.Ribbon text="Condition" color="">
                  <Controller
                    name="remarque"
                    control={control}
                    rules={{ required: false }}
                    render={({ field }) => (
                      <TextArea
                        {...field}
                        style={{
                          borderWidth: 1,
                          borderStyle: "dashed",
                          borderColor: "#0d6efd",
                          borderRadius: "10px",
                        }}
                        placeholder="Condition générale"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                      />
                    )}
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
                          <DatePicker {...field} dateFormat="DD MMM YYYY" />
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
                          <DatePicker {...field} dateFormat="DD MMM YYYY" />
                        </Form.Item>
                      )}
                    />
                    <Controller
                      name="condition"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Form.Item
                          label="Condition"
                          style={{
                            display: "inline-block",
                            width: "calc(30% - 8px)",
                            margin: "0 20px",
                            textAlign: "left",
                          }}
                        >
                          <Select {...field}>
                            <Select.Option value={"Personnalisé"}>
                              Personnalisé
                            </Select.Option>
                            <Select.Option
                              value={"échéance à la fin du mois"}
                            ></Select.Option>
                            <Select.Option
                              value={"échéance à la fin du mois prochain"}
                            ></Select.Option>
                          </Select>
                        </Form.Item>
                      )}
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
                    <Controller
                      name="nFacture"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Form.Item>
                          <Input
                            {...field}
                            style={{ display: "inline-block", marginLeft: 8 }}
                            placeholder="00001"
                          />
                        </Form.Item>
                      )}
                    />
                    {errors.nFacture && (
                      <span className="text-danger">
                        Numéro de facture obligatoire !
                      </span>
                    )}
                  </Row>
                  <hr />
                  <Row>
                    <Controller
                      name="client"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Form.Item
                          label="Client"
                          style={{
                            display: "inline-block",
                            width: "calc(45% - 8px)",
                            margin: "0 20px",
                            textAlign: "left",
                          }}
                        >
                          <Select
                            {...field}
                            onClick={() => {
                              dispatch(getClientListApi);
                          }} 
                          >
                            <Select.Option >
                              Selectionner un client
                            </Select.Option>
                            {clientList.map((elm) => (
                              <Select.Option value={elm._id}>{elm.nom} {elm.prenom}</Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                      )}
                    />
                    <Controller
                      name="nReference"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Form.Item
                          label="N de réference"
                          style={{
                            display: "inline-block",
                            width: "calc(44% - 8px)",
                            margin: "0 20px",
                            textAlign: "left",
                          }}
                        >
                          <Input {...field} />
                        </Form.Item>
                      )}
                    />
                    {errors.nReference && (
                      <span className="text-danger">
                        Numéro de réference obligatoire !
                      </span>
                    )}
                  </Row>
                  <Row>
                    <Controller
                      name="adresseFacturation"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Form.Item
                          label="Adresse de Facturation"
                          style={{
                            display: "inline-block",
                            width: "calc(44% - 8px)",
                            margin: "0 20px",
                            textAlign: "left",
                          }}
                        >
                          <Input
                            {...field}
                            placeholder="Sousse, Tunis..."
                          ></Input>
                        </Form.Item>
                      )}
                    />
                    <Controller
                      name="adresseLivraison"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Form.Item
                          label="Adresse de Livraison"
                          style={{
                            display: "inline-block",
                            width: "calc(45% - 8px)",
                            margin: "0 20px",
                            textAlign: "left",
                          }}
                        >
                          <Input {...field} placeholder="Tunis, Sousse..." />
                        </Form.Item>
                      )}
                    />
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
                      borderRadius: "5px",
                      overflow: "hidden",
                      borderColor: "#ffffff",
                    }}
                  >
                    <Controller
                      name="total"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
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
                            {...field}
                            placeholder="20.000TND"
                            style={{ borderRadius: "5px 5px" }}
                          />
                        </Form.Item>
                      )}
                    />
                    <Controller
                      name="remise"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
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
                            {...field}
                            style={{
                              borderWidth: 1,
                              borderStyle: "dashed",
                              borderRadius: "5px 5px",
                              borderColor: "#0d6efd",
                            }}
                            placeholder=""
                          />
                        </Form.Item>
                      )}
                    />
                    <Controller
                      name="taxes"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
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
                            {...field}
                            style={{
                              borderWidth: 1,
                              borderStyle: "dashed",
                              borderColor: "#0d6efd",
                              borderRadius: "5px 5px",
                            }}
                            placeholder=""
                          />
                        </Form.Item>
                      )}
                    />
                    <hr />
                    <Controller
                      name="totalTtc"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
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
                            {...field}
                            placeholder="20.000TND"
                            style={{ borderRadius: "5px 5px" }}
                          />
                        </Form.Item>
                      )}
                    />
                    <Controller
                      name="paye"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Form.Item
                          label="Payé"
                          wrapperCol={{
                            span: 16,
                          }}
                          labelCol={{
                            span: 8,
                          }}
                        >
                          <Input
                            {...field}
                            placeholder="-0.000TND"
                            style={{ borderRadius: "5px 5px" }}
                          />
                        </Form.Item>
                      )}
                    />
                    <Controller
                      name="solde"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
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
                            {...field}
                            placeholder="20.000TND"
                            style={{ borderRadius: "5px 5px" }}
                          />
                        </Form.Item>
                      )}
                    />
                  </Card>
                  <br />
                  <Card
                    size="small"
                    style={{ borderRadius: "5px", borderWidth: 2 }}
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
                      <Input
                        name="remise"
                        placeholder="75.000Dt"
                        style={{ borderRadius: "5px 5px" }}
                      ></Input>
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
                      <Input
                        name="taxes"
                        placeholder="25.000Dt"
                        style={{ borderRadius: "5px 5px" }}
                      ></Input>
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
                      <Input
                        name="total"
                        placeholder="95.000"
                        style={{ borderRadius: "5px 5px" }}
                      ></Input>
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
            Ajouter Commande
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
