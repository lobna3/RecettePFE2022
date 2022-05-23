import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Modal,
  Steps,
  Button,
  Collapse,
  Input,
  Radio,
  Space,
  Select,
  Form,
} from "antd";
import "../../components/clients/modal.css";
import {
  MailOutlined,
  DollarCircleOutlined,
  LaptopOutlined,
  CreditCardOutlined,
  EuroOutlined,
} from "@ant-design/icons";
import { addPaiementApi } from "../../redux/actions/paiement.actions";
import { useForm, Controller } from "react-hook-form";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { BASE_URL } from "../../utils/apiHelpers";
import EnvoyerEmail from "../devis/EnvoyerEmail";
import Payment from "../payments/Payment";
const { Step } = Steps;

const TraitementFacture = ({ isOpen, handleClose }) => {
  const [isOpenOperation, setIsOpenOperation] = useState(false);
  const [isOpenPaye, setIsOpenPaye] = useState(false);
  const [mailSent, setMailSent] = useState(false);
  const [payed, setPayed] = useState(false);
  const [value1, setValue1] = useState(false);
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
  const dispatch = useDispatch();
  const handleMailSent = () => {
    setMailSent(true);
    console.log("Mail sent");
    console.log();
  };
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      soldeP: "",
      typePaiement: "TOTAL",
      regPaiement: "carte bancaire",
      etatP: "non payé",
      reste: "",
      avance: "",
      mis: "",
      nCarte: "",
      ccv: "",
      dateP: "",
      montantP: "",
      commande: "6287b5d6afa37ef9b6818c18",
    },
  });
  const onSubmit = (data) => {
    console.log("Paiements Data", data);
    let body = {
      ...data,
    };

    dispatch(addPaiementApi(body));
  };
  return (
    <>
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card">
                <div className="card-body">
                  {/*<h6>NFacture: {savedCommande.nFacture}</h6> */}
                     <Controller
                    name="commande"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Form.Item label="Commande">
                        <Select {...field}>
                          <Select.Option>
                            Selectionner une commande
                          </Select.Option>
                          <Select.Option value={savedCommande._id}>
                            {savedCommande.status} {savedCommande._id}
                          </Select.Option>
                        </Select>
                      </Form.Item>
                    )}
                  />
                
                  <p className="alert alert-primary">
                    Vous devez envoyer la facture pour passer au paiement
                  </p>
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
                        style={{
                          marginBottom: 10,
                          height: 100,
                          borderRadius: "10px",
                        }}
                        onClick={() => {
                          handleMailSent();
                          setIsOpenOperation(true);
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
                          Envoyer par mail
                        </span>{" "}
                        <br />
                        <span className="text-muted">
                          Envoyer votre facture Par Mail
                        </span>
                      </Button>
                      <p></p>
                      <div
                        style={{
                          // border: "solid 1px gray",
                          width: "40%",
                          minHeight: 100,
                          borderRadius: 10,
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          gap: 20,
                        }}
                      >
                        {/* <p>Vous devez payé,</p>*/}
                        <Controller
                          name="soldeP"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="1250.00 TND"
                              className="text-center"
                              style={{ borderRadius: "10px" }}
                            />
                          )}
                        />

                        {/*<p>choisir votre type de paiement,</p>*/}
                        <div
                          className="card"
                          style={{
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            padding: "0.7em",
                          }}
                        >
                          <Controller
                            name="typePaiement"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <Radio.Group
                                {...field}
                                onChange={onChange}
                                value={value}
                              >
                                <Space direction="vertical">
                                  <Radio value={"TOTAL"}>Totalité</Radio>
                                  <Radio value={"AVANCE"}>Avance</Radio>
                                </Space>
                              </Radio.Group>
                            )}
                          />

                          {value == "AVANCE" && (
                            <>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginLeft: "20",
                                }}
                              >
                                <span
                                  className="text-primary"
                                  style={{ marginLeft: 40 }}
                                >
                                  Avance:
                                </span>
                                <Controller
                                  name="avance"
                                  control={control}
                                  rules={{ required: false }}
                                  render={({ field }) => (
                                    <Input
                                      {...field}
                                      style={{
                                        marginLeft: 10,
                                        borderRadius: "10px",
                                      }}
                                      placeholder="500.00TND"
                                    />
                                  )}
                                />
                              </div>
                              <p></p>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <span
                                  className="text-primary"
                                  style={{ marginLeft: 40 }}
                                >
                                  Reste:
                                </span>
                                <Controller
                                  name="reste"
                                  control={control}
                                  rules={{ required: false }}
                                  render={({ field }) => (
                                    <Input
                                      {...field}
                                      style={{
                                        marginLeft: 20,
                                        borderRadius: "10px",
                                      }}
                                      placeholder="750.00TND"
                                    />
                                  )}
                                />
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div
                        className="card"
                        style={{
                          borderRadius: "10px",
                          minWidth: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <button
                          onClick={() => {
                            setPayed(!payed);
                          }}
                          style={{
                            width: "100%",
                            height: 100,
                            backgroundColor: "transparent",
                            borderColor: "transparent",
                          }}
                        >
                          <DollarCircleOutlined
                            style={{
                              fontSize: "42px",
                              color: "#1890ff",
                            }}
                          />
                          <br />
                          <span className="text-primary">
                            Réglé votre paiement par
                          </span>{" "}
                          <br />
                          <span className="text-muted">
                            Vous pouvez choisir plusieures méthodes de paiements
                          </span>
                        </button>
                        {payed && (
                          <>
                            <ul>
                              <li
                                className="card"
                                style={{
                                  borderRadius: 10,
                                  display: "flex",
                                  marginRight: "60px",
                                  justifyContent: "center",
                                  gap: 20,
                                }}
                              >
                                <div
                                  className="card-body"
                                  style={{ marginRight: "40" }}
                                >
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div className="form-group row">
                                        <label style={{ marginLeft: 40 }}>
                                          Mis:
                                        </label>
                                        <Controller
                                          name="mis"
                                          control={control}
                                          rules={{ required: false }}
                                          render={({ field }) => (
                                            <input
                                              {...field}
                                              type="text"
                                              className="form-control"
                                              style={{
                                                marginLeft: "40px",
                                                borderRadius: "10px",
                                              }}
                                              placeholder="250.000TND"
                                            />
                                          )}
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-4">
                                      <div className="form-group row">
                                        <label style={{ marginLeft: 100 }}>
                                          Reste:
                                        </label>
                                        <Controller
                                          name="reste"
                                          control={control}
                                          rules={{ required: false }}
                                          render={({ field }) => (
                                            <input
                                              {...field}
                                              type="text"
                                              className="form-control"
                                              style={{
                                                marginLeft: "100px",
                                                borderRadius: "10px",
                                              }}
                                              placeholder="250.000TND"
                                            />
                                          )}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="card"
                                style={{
                                  display: "flex",
                                  marginRight: "60px",
                                  justifyContent: "center",
                                  gap: 20,
                                }}
                              >
                                <Controller
                                  name="regPaiement"
                                  control={control}
                                  rules={{ required: false }}
                                  render={({ field }) => (
                                    <div
                                      {...field}
                                      class="form-check"
                                      style={{
                                        marginLeft: 20,
                                        marginTop: 10,
                                        marginBottom: 10,
                                      }}
                                      onClick={() => {
                                        setValue1(!value1);
                                      }}
                                    >
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value={"carte bancaire"}
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="flexCheckDefault"
                                      >
                                        <CreditCardOutlined
                                          style={{
                                            fontSize: "24px",
                                            color: "#1890ff",
                                          }}
                                        />
                                        Carte Bancaire
                                      </label>
                                    </div>
                                  )}
                                />

                                {value1 && (
                                  <>
                                    {" "}
                                    <div
                                      className="row"
                                      style={{
                                        marginLeft: 20,
                                        marginBottom: 20,
                                        gap: 10,
                                      }}
                                    >
                                      <div className="row">
                                        <div className="col-md-8">
                                          <Controller
                                            name="nCarte"
                                            control={control}
                                            rules={{
                                              required: false,
                                              maxLength: 8,
                                            }}
                                            render={({ field }) => (
                                              <input
                                                {...field}
                                                type="text"
                                                className="form-control"
                                                placeholder="Numéro de carte"
                                              />
                                            )}
                                          />
                                          <span className="text-danger">
                                            {" "}
                                            {errors.nCarte &&
                                              "Numéro de carte doit contenir seulement 8 chiffres"}
                                          </span>
                                        </div>
                                        <div className="col-md-4">
                                          <Controller
                                            name="ccv"
                                            control={control}
                                            rules={{
                                              required: false,
                                              maxLength: 3,
                                            }}
                                            render={({ field }) => (
                                              <input
                                                {...field}
                                                type="text"
                                                className="form-control"
                                                placeholder="CCV"
                                              />
                                            )}
                                          />
                                          <span className="text-danger">
                                            {errors.cvv &&
                                              "CVV doit contenir seulement 3 chiffres"}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-5">
                                          <Controller
                                            name="dateP"
                                            control={control}
                                            rules={{
                                              required: false,
                                              maxLength: 5,
                                            }}
                                            render={({ field }) => (
                                              <input
                                                {...field}
                                                type="text"
                                                className="form-control"
                                                placeholder="MM/AA"
                                              />
                                            )}
                                          />
                                          <span className="text-danger">
                                            {" "}
                                            {errors.dateP &&
                                              "Vous devez respecter la forme MM/AA"}
                                          </span>
                                        </div>
                                        <div className="col-md-5">
                                          <Controller
                                            name="montantP"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                              <input
                                                {...field}
                                                type="text"
                                                className="form-control"
                                                placeholder="250"
                                              />
                                            )}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </li>
                              <li
                                className="card"
                                style={{
                                  display: "flex",
                                  marginRight: "60px",
                                  justifyContent: "center",
                                  gap: 20,
                                }}
                              >
                                <div
                                  class="form-check"
                                  style={{
                                    marginLeft: 20,
                                    marginTop: 10,
                                    marginBottom: 10,
                                  }}
                                >
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefault"
                                  >
                                    <LaptopOutlined
                                      style={{
                                        fontSize: "24px",
                                        color: "#1890ff",
                                      }}
                                    /><span  onClick={() => {
                                      setIsOpenPaye(true);
                                    }}>  Paiement en ligne</span>
                                   
                                  </label>
                                </div>
                              </li>
                              <li
                                className="card"
                                style={{
                                  display: "flex",
                                  marginRight: "60px",
                                  justifyContent: "center",
                                  gap: 20,
                                }}
                              >
                                <div
                                  class="form-check"
                                  style={{
                                    marginLeft: 20,
                                    marginTop: 10,
                                    marginBottom: 10,
                                  }}
                                >
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefault"
                                  >
                                    <EuroOutlined
                                      style={{
                                        fontSize: "24px",
                                        color: "#1890ff",
                                      }}
                                    />{" "}
                                    Espéces
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <input
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: 10 }}
              />
            </form>
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
      <EnvoyerEmail
        isOpen={isOpenOperation}
        handleClose={() => {
          setIsOpenOperation(false);
        }}
      />
      <Payment
        isOpen={isOpenPaye}
        handleClose={() => {
          setIsOpenPaye(false);
        }}
      />
    </>
  );
};

export default TraitementFacture;
