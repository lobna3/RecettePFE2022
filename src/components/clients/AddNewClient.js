import React, { useState } from "react";
import { Modal, Steps, Button, message } from "antd";
import { useForm, Controller } from "react-hook-form";
import axios from "../../config/axios";

const { Step } = Steps;

const AddNewClient = ({ isOpen, handleClose }) => {
  const [current, setCurrent] = React.useState(0);
  const [canMove, setCanMove] = useState(false);

  const [data, setdata] = useState({
    titre: "Mr.",
    nom: "",
    prenom: "",
    email: "",
    entreprise: "",
    telephone: "",
    siteinternet: "",
    type: "",
    nidentificationFiscale: "",
    devis: "",
    activite: "Agence ou Société comerciale",
    conditionPaiement: "Personalisé",
    adresse: "",
    codePostal: "",
    etat: "",
    pays: "",
    typeAdresse: "Facturation",
    utilisateur: "6235e396cb3d6874fad966c0",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [success, setsuccess] = useState(false);
  const [error, seterror] = useState("");

  const createClient = () => {
    let obj = {
      client: data,
      adresses: [
        {
          adresse: data.adresse,
          codePostal: data.codePostal,
          etat: data.etat,
          pays: data.pays,
          typeAdresse: data.type,
        },
        {
          adresse: data.adresse,
          codePostal: data.codePostal,
          etat: data.etat,
          pays: data.pays,
          typeAdresse: data.typeAdresse,
        },
      ],
    };
    axios
      .post("ajouter_client", obj)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setsuccess(true);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const watchCanMove = () => {
    let values = Object.values(watch());
    console.log("Values", values);
    let result = values.findIndex((elm) => elm == "");
    if (result == -1) {
      return true;
    } else {
      return false;
    }
  };
  const next = () => {
    if (watchCanMove()) {
      setCurrent(current + 1);
    }
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    {
      title: "Information Générale",
      content: "First-content",
      layout: () => {
        return (
          <>
            {" "}
            <br />
            <div class="form-group row g-3">
              <div class="col-md-1">
                <label class="form-label d-flex text-muted">Titre</label>
                <Controller
                  name="titre"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <select
                      style={{ width: "70px" }}
                      {...field}
                      onChange={handleChange}
                      value={data.titre}
                      name="titre"
                      class="form-select"
                    >
                      <option>Mr.</option>
                      <option>Mlle.</option>
                      <option>Md.</option>
                    </select>
                  )}
                />
              </div>
              <div class="col-md-3">
                <label class="form-label d-flex text-muted">Prénom</label>
                <Controller
                  name="prenom"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      name="prenom"
                      onChange={handleChange}
                      value={data.prenom}
                      type="text"
                      class="form-control"
                      placeholder="Foulen"
                      {...field}
                    />
                  )}
                />
              </div>
              <div class="col-md-3">
                <label class="form-label d-flex text-muted">Nom</label>
                <Controller
                  name="nom"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      name="nom"
                      onChange={handleChange}
                      value={data.nom}
                      type="text"
                      class="form-control"
                      placeholder="Ben Foulen"
                      {...field}
                    />
                  )}
                />
              </div>
              <div class="col-md-5">
                <label class="form-label d-flex text-muted">Entreprise</label>
                <Controller
                  name="entreprise"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      name="entreprise"
                      onChange={handleChange}
                      value={data.entreprise}
                      type="text"
                      class="form-control"
                      placeholder="Foulen"
                      {...field}
                    />
                  )}
                />
              </div>
              <div class="col-md-4">
                <label class="form-label d-flex text-muted">Email</label>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      name="email"
                      onChange={handleChange}
                      value={data.email}
                      class="form-control"
                      placeholder="Foulen"
                      {...field}
                    />
                  )}
                />
              </div>
              <div class="col-md-4">
                <label class="form-label d-flex text-muted">Téléphone</label>
                <Controller
                  name="telephone"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      name="telephone"
                      onChange={handleChange}
                      value={data.telephone}
                      type="text"
                      class="form-control"
                      placeholder="123456789"
                      {...field}
                    />
                  )}
                />
              </div>
              <div class="col-md-4">
                <label class="form-label d-flex text-muted">
                  Site Internet
                </label>
                <Controller
                  name="siteinternet"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      onChange={handleChange}
                      value={data.siteinternet}
                      name="siteinternet"
                      type="text"
                      class="form-control"
                      placeholder="Site Internet"
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
          </>
        );
      },
    },
    {
      title: "Information Professionnlles",
      content: "Second-content",
      layout: () => {
        return (
          <>
            {" "}
            <br />
            <div class="row g-3">
              <Controller
                name="type"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <fieldset
                    style={{ alignItems: "baseline" }}
                    class="col-12 d-flex"
                    {...field}
                  >
                    <span class="col-form-label d-flex text-muted">Type: </span>
                    <div class="col-md-4 d-flex">
                      <div class="form-check form-check-inline">
                        <input
                          onChange={handleChange}
                          name="type"
                          class="form-check-input"
                          type="radio"
                          id="gridRadios2"
                          value="Entreprise"
                          checked={data.type === "Entreprise"}
                        />

                        <label
                          class="form-check-label d-flex text-muted"
                          for="gridRadios2"
                        >
                          Entreprise
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          onChange={handleChange}
                          name="type"
                          class="form-check-input"
                          type="radio"
                          id="gridRadios1"
                          value="Particulier"
                          checked={data.type === "Particulier"}
                        />

                        <label
                          class="form-check-label d-flex text-muted"
                          for="gridRadios1"
                        >
                          Particulier
                        </label>
                      </div>
                    </div>
                  </fieldset>
                )}
              />

              <div class="col-md-6">
                <label class="form-label d-flex text-muted">
                  N identification fiscale
                </label>
                <Controller
                  name="nidentificationFiscale"
                  control={control}
                  rules={{ required: false }}
                  render={({ field }) => (
                    <input
                      type="text"
                      onChange={handleChange}
                      value={data.nidentificationFiscale}
                      name="nidentificationFiscale"
                      class="form-control"
                      placeholder="123456789"
                      {...field}
                    />
                  )}
                />
              </div>
              <div class="col-md-6">
                <label class="form-label d-flex text-muted">Activité</label>
                <Controller
                  name="activite"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <select
                      onChange={handleChange}
                      value={data.activite}
                      name="activite"
                      class="form-select"
                      {...field}
                    >
                      <option>Agence ou Société comerciale</option>
                      <option>Art et Design</option>
                      <option>Services de santé</option>
                    </select>
                  )}
                />
              </div>
              <div class="col-md-6">
                <label class="form-label d-flex text-muted">Devis</label>
                <Controller
                  name="devis"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      onChange={handleChange}
                      value={data.devis}
                      name="devis"
                      class="form-control"
                      placeholder="0091234568"
                      {...field}
                    />
                  )}
                />
              </div>
              <div class="col-md-6">
                <label class="form-label d-flex text-muted">
                  Conditions de paiements
                </label>
                <Controller
                  name="conditionPaiement"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <select
                      onChange={handleChange}
                      value={data.conditionPaiement}
                      name="conditionPaiement"
                      class="form-select"
                      {...field}
                    >
                      <option>Personalisé</option>
                      <option>échéance à la fin du mois</option>
                      <option>échéance à la fin fu mois prochain</option>
                    </select>
                  )}
                />
              </div>
            </div>
          </>
        );
      },
    },
    {
      title: "Adresse de Facturation",
      content: "Last-content",
      layout: () => {
        return (
          <>
            {" "}
            <br />
            <div class="row g-3">
              <div class="col-md-3">
                <label class="form-label d-flex text-muted">Type Adresse</label>
                <Controller
                  name="typeAdresse"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <select
                      onChange={handleChange}
                      value={data.typeAdresse}
                      name="typeAdresse"
                      class="form-select"
                      {...field}
                    >
                      <option>Facturation</option>
                      <option>Livraison</option>
                    </select>
                  )}
                />
              </div>

              <div class="col-md-6">
                <label class="form-label d-flex text-muted">Adresse</label>
                <Controller
                  name="adresse"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      onChange={handleChange}
                      value={data.adresse}
                      name="adresse"
                      class="form-control"
                      placeholder="Tunis"
                      {...field}
                    />
                  )}
                />
              </div>
              <div class="col-md-3">
                <label class="form-label d-flex text-muted">Postal</label>
                <Controller
                  name="codePostal"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      onChange={handleChange}
                      value={data.codePostal}
                      name="codePostal"
                      class="form-control"
                      placeholder="4000"
                      {...field}
                    />
                  )}
                />
              </div>
              <div class="col-md-6">
                <label class="form-label d-flex text-muted">Etat</label>
                <Controller
                  name="etat"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      onChange={handleChange}
                      value={data.etat}
                      name="etat"
                      class="form-control"
                      placeholder="Lorem Ipsum is simply text"
                      {...field}
                    />
                  )}
                />
              </div>
              <div class="col-md-6">
                <label class="form-label d-flex text-muted">Pays</label>
                <Controller
                  name="pays"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      onChange={handleChange}
                      value={data.pays}
                      name="pays"
                      class="form-control"
                      placeholder="Tunisie"
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
          </>
        );
      },
    },
    {
      title: "Adresse  de Livraison",
      content: "Last2-content",
      layout: () => {
        return (
          <>
            {" "}
            <br />
            <div class="row g-3">
              <div class="col-md-3">
                <label class="form-label d-flex text-muted">Type Adresse</label>
                <Controller
                  name="typeAdresse"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <select
                      onChange={handleChange}
                      value={data.typeAdresse}
                      name="typeAdresse"
                      class="form-select"
                      {...field}
                    >
                      <option>Facturation</option>
                      <option>Livraison</option>
                    </select>
                  )}
                />
              </div>

              <div class="col-md-6">
                <label class="form-label d-flex text-muted">Adresse</label>
                <Controller
                  name="adresse"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      onChange={handleChange}
                      value={data.adresse}
                      name="adresse"
                      class="form-control"
                      placeholder="Tunis"
                      {...field}
                    />
                  )}
                />
              </div>
              <div class="col-md-3">
                <label class="form-label d-flex text-muted">Postal</label>
                <Controller
                  name="codePostal"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      onChange={handleChange}
                      value={data.codePostal}
                      name="codePostal"
                      class="form-control"
                      placeholder="4000"
                      {...field}
                    />
                  )}
                />
              </div>
              <div class="col-md-6">
                <label class="form-label d-flex text-muted">Etat</label>
                <Controller
                  name="etat"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      onChange={handleChange}
                      value={data.etat}
                      name="etat"
                      class="form-control"
                      placeholder="Lorem Ipsum is simply text"
                      {...field}
                    />
                  )}
                />
              </div>
              <div class="col-md-6">
                <label class="form-label d-flex text-muted">Pays</label>
                <Controller
                  name="pays"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      onChange={handleChange}
                      value={data.pays}
                      name="pays"
                      class="form-control"
                      placeholder="Tunisie"
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
          </>
        );
      },
    },
  ];
  const { handleSubmit, control, reset, watch } = useForm({
    defaultValues: {
      titre: "",
      nom: "",
      prenom: "",
      entreprise: "",
      email: "",
      telephone: "",
      siteinternet: "",
    },
  });

  return (
    <Modal
      footer={null}
      visible={isOpen}
      onCancel={handleClose}
      width={980}
      title={
        <div>
          <h6 className="text-primary">Nouveau Client</h6>
        </div>
      }
      onOK={() => {
        handleClose();
      }}
    >
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title}></Step>
        ))}
      </Steps>
      <div className="steps-content">
        {steps[current].layout()}
        <br />
      </div>
      <div
        style={{ display: "flex", justifyContent: "flex-end" }}
        className="steps-action"
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Suivant
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() =>
              message.success("Client ajouté avec succès!") & createClient()
            }
          >
            Ajouter
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Retour
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default AddNewClient;

{
  /* <div class="modal fade" id="largeModal" tabindex="-1">
<div class="modal-dialog modal-xl">
  <div class="modal-content">
    <div class="modal-header bg-primary text-white">
      <h6 class="modal-title text-white">Nouveau Client </h6>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="card">
        <div class="card-body">
          <h6 class="card-title"></h6>
          <form onSubmit={handleSubmit((data) => { console.log(data) })}>
            {!success && <Steps current={current}>

              <Step key={'information'} title='Information générale' />
              <Step key={'professionneles'} title='Information Professionnlles' />
              <Step key={'facturation'} title='Adresse de Facturation' />
              <Step key={'livraison'} title='Adresse de Livraison' />
            </Steps>}
            {
              success
                ?
                <>
                  <Alert message='Client ajouté avec succés' type='success' showIcon />
                </>
                :
                <>
                  {
                    current === 0
                    &&
                    <>
                      <br />
                      <div class="form-group row g-3"  >
                        <div class="col-md-1">
                          <label class="form-label d-flex text-muted">Titre</label>
                          <select style={{ width: '80px' }} onChange={handleChange} value={data.titre} name='titre' class="form-select">
                            <option>Mr.</option>
                            <option>Mlle.</option>
                            <option>Md.</option>
                          </select>
                        </div>
                        <div class="col-md-3">
                          <label class="form-label d-flex text-muted">Prénom</label>
                          <input type="text" onChange={handleChange} value={data.prenom} name='prenom'
                            class="form-control" placeholder="Foulen" {...("prenom", { required: "obligatoire!", minLength:4 })} />
                            <span>{data.prenom}</span>
                            <span>{errors.prenom?.message}</span>
                        </div>
                        <div class="col-md-3">
                          <label class="form-label d-flex text-muted">Nom</label>
                          <input type="text" onChange={handleChange} value={data.nom} name='nom' class="form-control" placeholder="Ben Foulen" {...("nom", { required: true, minLength: 4 })} />
                        </div>
                        <div class="col-md-5">
                          <label class="form-label d-flex text-muted">Entreprise</label>
                          <input type="text" onChange={handleChange} value={data.entreprise} name='entreprise' class="form-control" placeholder="Arsela" {...("nom", { required: true, minLength: 6 })} />
                        </div>
                        <div class="col-md-4">
                          <label class="form-label d-flex text-muted">Email</label>
                          <input type="email" onChange={handleChange} value={data.email} name='email' class="form-control" placeholder="Email" {...("nom", { required: true })} />
                        </div>
                        <div class="col-md-4">
                          <label class="form-label d-flex text-muted">Téléphone</label>
                          <input type="text" onChange={handleChange} value={data.telephone} name='telephone' class="form-control" placeholder="123456789" {...("telephone", { required: true, minLength: 8 })} />
                        </div>
                        <div class="col-md-4">
                          <label class="form-label d-flex text-muted">Site Internet</label>
                          <input type="text" onChange={handleChange} value={data.siteinternet} name='siteinternet'
                            class="form-control" placeholder="Text.com"  {...("siteinternet", { required: true, minLength: 8 })} />
                        </div>

                      </div>




                    </>
                  }
                  {
                    current === 1
                    &&
                    <>
                      <br />
                      <div class="row g-3">

                        <fieldset style={{ alignItems: 'baseline' }} class="col-12 d-flex">
                          <span class="col-form-label d-flex text-muted">Type:</span>
                          <div class="col-md-4 d-flex">
                            <div class="form-check form-check-inline">
                              <input onChange={handleChange} name='type' class="form-check-input" type="radio" id="gridRadios2" value="Entreprise" checked={data.type === 'Entreprise'} />
                              <label class="form-check-label d-flex text-muted" for="gridRadios2">
                                Entreprise
                              </label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input onChange={handleChange} name='type' class="form-check-input" type="radio" id="gridRadios1" value="Particulier" checked={data.type === 'Particulier'} />
                              <label class="form-check-label d-flex text-muted" for="gridRadios1">
                                Particulier
                              </label>
                            </div>


                          </div>
                        </fieldset>
                        <div class="col-md-6">
                          <label class="form-label d-flex text-muted">N identification fiscale</label>
                          <input type="text" onChange={handleChange} value={data.nidentificationFiscale} name='nidentificationFiscale'
                            class="form-control" placeholder="123456789" {...("nidentificationFiscale", { required: true, minLength: 8 })} />
                        </div>
                        <div class="col-md-6">
                          <label class="form-label d-flex text-muted">Activité</label>
                          <select onChange={handleChange} value={data.activite} name='activite' class="form-select">
                            <option>Agence ou Société comerciale</option>
                            <option>Art et Design</option>
                            <option>Services de santé</option>
                          </select>
                        </div>
                        <div class="col-md-6">
                          <label class="form-label d-flex text-muted">Devis</label>
                          <input type="text" onChange={handleChange} value={data.devis} name='devis'
                            class="form-control" placeholder="0091234568" {...("devis", { required: true, minLength: 8 })} />
                        </div>
                        <div class="col-md-6">
                          <label class="form-label d-flex text-muted">Conditions de paiements</label>
                          <select onChange={handleChange} value={data.conditionPaiement} name='conditionPaiement' class="form-select">

                            <option>Personalisé</option>
                            <option>échéance à la fin du mois</option>
                            <option>échéance à la fin fu mois prochain</option>
                          </select>
                        </div>
                      </div>
                    </>
                  }
                  {
                    current === 2
                    &&
                    <>
                      <br />
                      <div class="row g-3">
                        <div class="col-md-3">
                          <label class="form-label d-flex text-muted">Type Adresse</label>
                          <select onChange={handleChange} value={data.typeAdresse} name='typeAdresse' class="form-select">
                            <option>Facturation</option>
                            <option>Livraison</option>
                          </select>
                        </div>

                        <div class="col-md-6">
                          <label class="form-label d-flex text-muted">Adresse</label>
                          <input type="text" onChange={handleChange} value={data.adresse} name='adresse'
                            class="form-control" placeholder="Tunis" {...("adresse", { required: true, minLength: 4 })} />
                        </div>
                        <div class="col-md-3">
                          <label class="form-label d-flex text-muted">Postal</label>
                          <input type="text" onChange={handleChange} value={data.codePostal} name='codePostal'
                            class="form-control" placeholder="4000" {...("codePostal", { required: true, minLength: 4 })} />
                        </div>
                        <div class="col-md-6">
                          <label class="form-label d-flex text-muted">Etat</label>
                          <input type="text" onChange={handleChange} value={data.etat} name='etat'
                            class="form-control" placeholder="Lorem Ipsum is simply text" {...("etat", { required: true, minLength: 4 })} />
                        </div>
                        <div class="col-md-6">
                          <label class="form-label d-flex text-muted">Pays</label>
                          <input type="text" onChange={handleChange} value={data.pays} name='pays'
                            class="form-control" placeholder="Tunisie" {...("pays", { required: true, minLength: 4 })} />
                        </div>

                      </div>
                    </>
                  }
                  {
                    current === 3
                    &&
                    <>
                      <br />
                      <div class="row g-3">
                        <div class="col-md-3">
                          <label class="form-label d-flex text-muted">Type Adresse</label>
                          <select onChange={handleChange} value={data.typeAdresse} name='typeAdresse' class="form-select">
                            <option>Facturation</option>
                            <option>Livraison</option>
                          </select>
                        </div>

                        <div class="col-md-6">
                          <label class="form-label d-flex text-muted">Adresse</label>
                          <input type="text" onChange={handleChange} value={data.adresse} name='adresse'
                            class="form-control" placeholder="Tunis" {...("adresse", { required: true, minLength: 4 })} />
                        </div>
                        <div class="col-md-3">
                          <label class="form-label d-flex text-muted">Postal</label>
                          <input type="text" onChange={handleChange} value={data.codePostal} name='codePostal'
                            class="form-control" placeholder="4000" {...("codePostal", { required: true, minLength: 4 })} />
                        </div>
                        <div class="col-md-6">
                          <label class="form-label d-flex text-muted">Etat</label>
                          <input type="text" onChange={handleChange} value={data.etat} name='etat'
                            class="form-control" placeholder="Lorem Ipsum is simply text" {...("etat", { required: true, minLength: 4 })} />
                        </div>
                        <div class="col-md-6">
                          <label class="form-label d-flex text-muted">Pays</label>
                          <input type="text" onChange={handleChange} value={data.pays} name='pays'
                            class="form-control" placeholder="Tunisie" {...("pays", { required: true, minLength: 4 })} />
                        </div>


                      </div>
                    </>
                  }
                </>
            }


            <br />

            {!success && <div style={{ display: 'flex', justifyContent: "flex-end" }} className="steps-action">
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Suivant
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => createClient()}>
                  Ajouter
                </Button>
              )}
              {current > 0 && (
                <Button type="secondary" style={{ margin: '0 8px' }} onClick={() => prev()}>
                  Retour
                </Button>
              )}
            </div>}

            {
              success
              &&
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#disablebackdrop">Suivant</button>


            }
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
    <div class="modal-footer">

    </div>
  </div>
</div>
</div>
<div class="modal fade" id="ExtralargeModal" tabindex="-1">
<div class="modal-dialog modal-lg">
  <div class="modal-content">
    <div class="modal-header bg-primary text-white">
      <h6 class="modal-title text-white">Tableau des clients</h6>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">

      <div class="card">
        <div class="card-body">
          <h5 class="card-title d-flex text-dark">Choisir votre client</h5>
          <TableClient />
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Retour</button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#disablebackdrop">Suivant</button>
    </div>
  </div>
</div>
</div>
<div
        class="modal fade"
        id="disablebackdrop"
        tabindex="-1"
        data-bs-backdrop="false"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-primary">
              <h6 class="modal-title text-white">Nouvelle opération</h6>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h5 className="d-flex">
                <i class="d-flex" style={{ margin: "0 8px" }}>
                  {" "}
                  <BsArrowLeftSquare />{" "}
                </i>
                Choissisez votre opération souhaité
              </h5>
              <div className="card">
                <button class="btn btn-outline-primary">
                  <Link to="/ajouter_devis">
                    <i class="d-flex" style={{ margin: "0 8px" }}>
                      <BsFillFileEarmarkPlusFill />{" "}
                    </i>
                    <span className="d-inline-block text-left  text-dark">
                      {" "}
                      Créer votre Devis
                      <small className="font-weight-light d-block text-muted">
                        Nouveau devis
                      </small>
                    </span>
                  </Link>
                </button>
                <p></p>
                <button class="btn btn-outline-primary">
                  <i class="d-flex" style={{ margin: "0 8px" }}>
                    <BsFillFileEarmarkPlusFill />
                  </i>
                  <span className="d-inline-block text-left text-dark">
                    {" "}
                    Créer votre Facture
                    <small className="font-weight-light d-block text-muted">
                      {" "}
                      Nouvelle facture
                    </small>
                  </span>
                </button>
              </div>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
 */
}
