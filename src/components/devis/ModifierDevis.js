import React, { useState, useEffect,useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DevisHeader } from "../RacetteHeader";
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
} from "@ant-design/icons";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
//import { useForm, Controller } from "react-hook-form";
import Articles from "../articles/Articles";
import { updateCommandeApi } from "../../redux/actions/commande.actions";
import { getClientListApi } from "../../redux/actions/client.actions";
import "./devis1.css";
import { useToasts } from "react-toast-notifications";
import AddArticleModal from "../AddArticleModal";
import TraitementDevis from "./TraitementDevis";
import EnvoyerEmail from "./EnvoyerEmail";
import TraitementFacture from "../factures/TraitementFacture";
import moment from "moment";
const { Text } = Typography;
const { TextArea } = Input;
const ModifierDevis = () => {
  const { modifier } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const [showAddArticle, setAddArticle] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const [isOpenListe, setIsOpenListe] = useState(false);
  const [isOpenOperation, setIsOpenOperation] = useState(false);
  const [componentSize] = useState("default");

  const [dateEmission, setDateEmission] = useState("");
  const [dateEcheance, setDateEcheance] = useState("");
  const [condition, setCondition] = useState("");
  const [nFacture, setNFacture] = useState("");
  const [nReference, setNReference] = useState("");
  const [total, setTotal] = useState("");
  const [taxes, setTaxes] = useState("");
  const [remise, setRemise] = useState("");
  const [totalTtc, setTotalTtc] = useState("");
  const [paye, setPaye] = useState("");
  const [solde, setSolde] = useState("");
  const [note, setNote] = useState("");
  const [remarque, setRemarque] = useState("");
  const [recurrente, setRecurrente] = useState("");
  const [status, setStatus] = useState("");
  const [adresseFacturation, setAdresseFacturation] = useState("");
  const [adresseLivraison, setAdresseLivraison] = useState("");
  const [etat, setEtat] = useState("");
  const [client, setClient] = useState("");
  const [prix, setPrix]=useState("");

  const dispatch = useDispatch();

  const { selectedCommande, selectedArticles } = useSelector(
    (state) => state.commande
  );
  const { clientList } = useSelector((state) => state.client);
  const calculateValues = () => {
    let initTotal = 0;
    let totalTaxe = 0;
    let totalPrix = 0;
    selectedArticles.forEach((article) => {
      console.log("article", article);
      totalPrix = totalPrix + article.qte * Number(article.pu);
      initTotal = totalPrix;
      if (article.taxe != "") {
        totalTaxe = totalTaxe + (Number(article.taxe) * article.prix) / 100;
      }
      console.log("prix", totalPrix);
     setPrix( totalPrix);
    });

    console.log("Total", initTotal);
    setTotal(initTotal);

    setRemise(remise);

    console.log("Taxes", totalTaxe);
    setTaxes( totalTaxe);

    console.log("TotalTTc", totalTaxe + initTotal);
    setTotalTtc( totalTaxe + initTotal);

    // setValue("paye", 0);
    //console.log("Solde", initTotal + totalTaxe );
    // setValue("solde", initTotal + totalTaxe);
  };
  const calculateRemise = () => {
    let remise1 =(remise);
    let totalValue =(total);
    let totalTaxe = (taxes);
    let paye1 = (paye);
    let remiseVal = (remise1 * totalValue) / 100;
    setTotalTtc( totalValue - remiseVal + totalTaxe);
    setSolde( totalValue - remiseVal + totalTaxe - paye1);
  };
  useEffect(() => {
    dispatch(getClientListApi());

    setDateEmission(moment(selectedCommande.dateEmission));
    setDateEcheance(moment(selectedCommande.dateEcheance));
    setCondition(selectedCommande.condition);
    setNFacture(selectedCommande.nFacture);
    setNReference(selectedCommande.nReference);
    setTotal(selectedCommande.total);
    setTaxes(selectedCommande.taxes);
    setRemise(selectedCommande.remise);
    setTotalTtc(selectedCommande.totalTtc);
    setPaye(selectedCommande.paye);
    setSolde(selectedCommande.solde);
    setRemarque(selectedCommande.remarque);
    setNote(selectedCommande.note);
    setRecurrente(selectedCommande.recurrente);
    setStatus(selectedCommande.status);
    setAdresseFacturation(selectedCommande.adresseFacturation);
    setAdresseLivraison(selectedCommande.adresseLivraison);
    setEtat(selectedCommande.etat);
    setClient(selectedCommande.client);
    console.log("Selected Commande", selectedCommande);
    console.log("URL", location.pathname);
    calculateValues();
    //calculateRemise();
  }, [selectedCommande, selectedArticles]);
  useMemo(() => {
    calculateRemise();
  }, [(remise)]);
 
  const confirmAdd = () => {
    let data = {
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
      etat,
      client,
    };
    dispatch(updateCommandeApi(data, modifier, addToast));
    navigate("/devis");
  };

  return (
    <div>
      <main id="main" class="main bg-light">
        <DevisHeader />
        <Row>
          <form>
            <Row>
              <Col span={8} push={16}>
                <Card
                  style={{
                    marginLeft: 10,
                    backgroundColor: "#f0f5ff",
                    borderRadius: "20px",
                  }}
                >
                  <Link to="/devis/:detail">
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
                  </Link>

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
                    onClick={() => {
                      setIsopen(true);
                    }}
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
                      name="etat"
                      value={etat}
                      onChange={(event) => {
                        setEtat(event.target.value);
                      }}
                      style={{
                        borderWidth: 1,
                        borderStyle: "dashed",
                        borderColor: "#0d6efd",
                        borderRadius: "10px",
                      }}
                      placeholder="Note"
                      autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                  </Badge.Ribbon>
                  <p></p>
                  <Badge.Ribbon text="Condition" color="">
                    <TextArea
                      name="note"
                      value={note}
                      onChange={(event) => {
                        setNote(event.target.value);
                      }}
                      style={{
                        borderWidth: 1,
                        borderStyle: "dashed",
                        borderColor: "#0d6efd",
                        borderRadius: "10px",
                      }}
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
                      <Form.Item
                        label="Date émission"
                        style={{
                          display: "inline-block",
                          width: "calc(25% - 8px)",
                          margin: "0 20px",
                          textAlign: "left",
                        }}
                      >
                        <DatePicker
                          dateFormat="DD MMM YYYY"
                          value={dateEmission}
                          name="dateEmission"
                          onChange={(event) => {
                            setDateEmission(event.target.value);
                          }}
                        />
                      </Form.Item>

                      <Form.Item
                        label="Date échéance"
                        style={{
                          display: "inline-block",
                          width: "calc(25% - 8px)",
                          margin: "0 20px",
                          textAlign: "left",
                        }}
                      >
                        <DatePicker
                          dateFormat="DD MMM YYYY"
                          name="dateEcheance"
                          value={dateEcheance}
                          onChange={(event) => {
                            setDateEcheance(event.target.value);
                          }}
                        />
                      </Form.Item>

                      <Form.Item
                        label="Condition"
                        style={{
                          display: "inline-block",
                          width: "calc(30% - 8px)",
                          margin: "0 20px",
                          textAlign: "left",
                        }}
                      >
                        <Select
                          name="condition"
                          value={condition}
                          onChange={(event) => {
                            setCondition(event.target.value);
                          }}
                        >
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
                          value={nFacture}
                          onChange={(event) => {
                            setNFacture(event.target.value);
                          }}
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
                        <Select
                          value={client}
                          onChange={(event) => {
                            setClient(event.target.value);
                          }}
                          onClick={() => {
                            dispatch(getClientListApi);
                          }}
                        >
                          <Select.Option>Selectionner un client</Select.Option>
                          {clientList.map((elm) => (
                            <Select.Option value={elm._id}>
                              {elm.nom} {elm.prenom}
                            </Select.Option>
                          ))}
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
                          value={nReference}
                          onChange={(event) => {
                            setNReference(event.target.value);
                          }}
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
                        <Input
                          name="adresseFacturation"
                          value={adresseFacturation}
                          onChange={(event) => {
                            setAdresseFacturation(event.target.value);
                          }}
                          placeholder="Sousse, Tunis..."
                        ></Input>
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
                        <Input
                          name="adresseLivraison"
                          value={adresseLivraison}
                          onChange={(event) => {
                            setAdresseLivraison(event.target.value);
                          }}
                          placeholder="Tunis, Sousse..."
                        />
                      </Form.Item>
                    </Row>

                    <hr />
                    <Row>
                      <AddArticleModal
                        showModal={showAddArticle}
                        handleClose={() => {
                          setAddArticle(false);
                        }}
                      />
                      <Button block onClick={() => setAddArticle(true)}>
                        + Ajouter article
                      </Button>
                    </Row>
                    <p></p>
                    <Row>
                      <Articles />
                    </Row>
                    <hr />
                    <Card
                      size="small"
                      style={{
                        marginLeft: 430,
                        borderRadius: "5px",
                        overflow: "hidden",
                        borderColor: "#ffffff",
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
                          value={total}
                          onChange={(event) => {
                            setTotal(event.target.value);
                          }}
                          style={{
                            borderRadius: "5px 5px",
                            width: 60,
                            borderColor: "#ffff",
                          }}
                        />
                        TND
                      </Form.Item>

                      <Form.Item
                        label="Remise"
                        wrapperCol={{
                          span: 16,
                        }}
                        labelCol={{
                          span: 8,
                        }}
                      >
                        <Input
                          name="remise"
                          value={remise}
                          onChange={(event) => {
                            setRemise(event.target.value);
                          }}
                          className="text-center"
                          style={{
                            borderWidth: 1,
                            borderStyle: "dashed",
                            borderRadius: "5px 5px",
                            borderColor: "#0d6efd",
                            width: 100,
                          }}
                          placeholder=""
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
                          className="text-center"
                          name="taxes"
                          value={taxes}
                          onChange={(event) => {
                            setTaxes(event.target.value);
                          }}
                          style={{
                            borderWidth: 1,
                            borderStyle: "dashed",
                            borderColor: "#0d6efd",
                            borderRadius: "5px 5px",
                            width: 100,
                          }}
                          placeholder=""
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
                          value={totalTtc}
                          onChange={(event) => {
                            setTotalTtc(event.target.value);
                          }}
                          style={{
                            borderRadius: "5px 5px",
                            width: 60,
                            borderColor: "#ffff",
                          }}
                        />
                        TND
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
                        <Input
                          name="paye"
                          value={paye}
                          onChange={(event) => {
                            setPaye(event.target.value);
                          }}
                          style={{
                            borderRadius: "5px 5px",
                            borderColor: "#ffff",
                            width: 60,
                          }}
                        />
                        TND
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
                          value={solde}
                          onChange={(event) => {
                            setSolde(event.target.value);
                          }}
                          style={{
                            borderRadius: "5px 5px",
                            borderColor: "#ffff",
                            width: 60,
                          }}
                        />
                        TND
                      </Form.Item>
                    </Card>
                    <Card
                      size="small"
                      className="d-flex"
                      style={{ borderRadius: "5px" }}
                    >
                      <Button
                        type="primary"
                        style={{ marginRight: 20, marginLeft: 20 }}
                        onClick={() => {
                          setIsOpenListe(true);
                        }}
                      >
                        Payé
                      </Button>
                      <Text style={{ marginRight: 20, marginLeft: 120 }}>
                        Remise: <Text strong>{remise}TND</Text>
                      </Text>
                      <Text style={{ marginRight: 20 }}>
                        Tax: <Text strong>{taxes} TND</Text>
                      </Text>
                      <Text style={{ marginRight: 20 }}>
                        Total: <Text strong>{totalTtc} TND</Text>
                      </Text>
                    </Card>
                    <button
                      style={{ marginTop: 30 }}
                      type="button"
                      className="btn btn-primary"
                      onClick={confirmAdd}
                    >
                      Modifier Commande
                    </button>
                  </Form>
                </Card>
              </Col>
            </Row>
          </form>
        </Row>
      </main>
      <TraitementDevis
        isOpen={isOpen}
        handleClose={() => {
          setIsopen(false);
        }}
        handleFirstBtn={() => {
          setIsOpenOperation(true);
          setIsopen(false);
        }}
      />
      <EnvoyerEmail
        isOpen={isOpenOperation}
        handleClose={() => {
          setIsOpenOperation(false);
        }}
      />
      <TraitementFacture
        isOpen={isOpenListe}
        handleClose={() => {
          setIsOpenListe(false);
        }}
      />
    </div>
  );
};

/* */

export default ModifierDevis;

/*<form onSubmit={handleSubmit(confirmAdd)}>
            <Row>
              <Col span={8} push={16}>
                <Card
                  style={{
                    marginLeft: 10,
                    backgroundColor: "#f0f5ff",
                    borderRadius: "20px",
                  }}
                >
                  <Link to="/devis/:detail">
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
                  </Link>

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
                    onClick={() => {
                      setIsopen(true);
                    }}
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
                        render={({ field,setValue }) => (
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
                              {...field}
                              dateFormat="DD MMM YYYY"
                              onChange={(yourDetails) => {
                                setValue(yourDetails.dateEmission, {
                                  shouldValidate: true,
                                });
                              }}
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
                              <Select.Option>
                                Selectionner un client
                              </Select.Option>
                              {clientList.map((elm) => (
                                <Select.Option value={elm._id}>
                                  {elm.nom} {elm.prenom}
                                </Select.Option>
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
                      <AddArticleModal
                        showModal={showAddArticle}
                        handleClose={() => {
                          setAddArticle(false);
                        }}
                      />
                      <Button block onClick={() => setAddArticle(true)}>
                        + Ajouter article
                      </Button>
                    </Row>
                    <p></p>
                    <Row>
                      <Articles />
                    </Row>
                    <hr />
                    <Card
                      size="small"
                      style={{
                        marginLeft: 430,
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
                              style={{
                                borderRadius: "5px 5px",
                                width: 60,
                                borderColor: "#ffff",
                              }}
                            />
                            TND
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
                              className="text-center"
                              {...field}
                              style={{
                                borderWidth: 1,
                                borderStyle: "dashed",
                                borderRadius: "5px 5px",
                                borderColor: "#0d6efd",
                                width: 100,
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
                              className="text-center"
                              {...field}
                              style={{
                                borderWidth: 1,
                                borderStyle: "dashed",
                                borderColor: "#0d6efd",
                                borderRadius: "5px 5px",
                                width: 100,
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
                              style={{
                                borderRadius: "5px 5px",
                                width: 60,
                                borderColor: "#ffff",
                              }}
                            />
                            TND
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
                              style={{
                                borderRadius: "5px 5px",
                                borderColor: "#ffff",
                                width: 60,
                              }}
                            />
                            TND
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
                              style={{
                                borderRadius: "5px 5px",
                                borderColor: "#ffff",
                                width: 60,
                              }}
                            />
                            TND
                          </Form.Item>
                        )}
                      />
                    </Card>
                    <Card
                      size="small"
                      className="d-flex"
                      style={{ borderRadius: "5px" }}
                    >
                      <Button
                        type="primary"
                        style={{ marginRight: 20, marginLeft: 20 }}
                        onClick={() => {
                          setIsOpenListe(true);
                        }}
                      >
                        Payé
                      </Button>
                      <Text style={{ marginRight: 20, marginLeft: 120 }}>
                        Remise: <Text strong>20000 TND</Text>
                      </Text>
                      <Text style={{ marginRight: 20 }}>
                        Tax: <Text strong>20000 TND</Text>
                      </Text>
                      <Text style={{ marginRight: 20 }}>
                        Total: <Text strong>20000 TND</Text>
                      </Text>
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
              Modifier Commande
            </button>
          </form>
 */

/*  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      yourDetails: {
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
      },
    },
  }); */
