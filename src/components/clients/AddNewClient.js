import React, { useState } from "react";
import { Modal, Steps } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import "./modal.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addClientApi,
  addFirstStep,
  addFourStep,
  addSecondStep,
  addThirdStep,
} from "../../redux/actions/client.actions";
const { Step } = Steps;

const AddNewClient = ({ isOpen, handleClose }) => {
  const [current, setCurrent] = React.useState(0);
  const { addToast } = useToasts();
  //const [canMove, setCanMove] = useState(false);
  const { addClientInfo } = useSelector((state) => state.client);
  const dispatch = useDispatch();
  const [data, setState] = useState({
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
    utilisateur: "6235e396cb3d6874fad966c0",
  });

  /*const watchCanMove = () => {
    let values = Object.values(watch());
    console.log("Values", values);
    let result = values.findIndex((elm) => elm === "");
    if (result === -1) {
      return true;
    } else {
      return false;
    }
  };*/

  /* const next = () => {
    if (watchCanMove()) {
      setCurrent(current + 1);
    }
  };*/
  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    {
      title: "Information générale",
      content: "First-content",
      layout: () => {
        const firstStepSubmit = (data) => {
          console.log(data);
          dispatch(addFirstStep(data));
          setCurrent(current + 1);
        };
        return (
          <form onSubmit={handleSubmit(firstStepSubmit)}>
            <br />
            <div className="form-group row g-3">
              <div className="col-md-1">
                <label className="form-label d-flex text-muted">Titre</label>
                <Controller
                  name="titre"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <select
                      style={{ width: "70px" }}
                      className="form-select"
                      {...field}
                    >
                      <option value={"Mr."}>Mr.</option>
                      <option value={"Mlle."}>Mlle.</option>
                      <option value={"Md."}>Md.</option>
                    </select>
                  )}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label d-flex text-muted">Prénom</label>
                <Controller
                  name="prenom"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Foulen"
                      {...field}
                    />
                  )}
                />
                {errors.prenom && (
                  <span className="text-danger">Tapez votre prénom !</span>
                )}
              </div>
              <div className="col-md-3">
                <label className="form-label d-flex text-muted">Nom</label>
                <Controller
                  name="nom"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      value={data.nom}
                      type="text"
                      className="form-control"
                      placeholder="Ben Foulen"
                      {...field}
                    />
                  )}
                />
                {errors.nom && (
                  <span className="text-danger">Tapez votre nom !</span>
                )}
              </div>
              <div className="col-md-5">
                <label className="form-label d-flex text-muted">
                  Entreprise
                </label>
                <Controller
                  name="entreprise"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Foulen"
                      {...field}
                    />
                  )}
                />
                {errors.entreprise && (
                  <span className="text-danger">
                    Tapez le nom de votre entreprise !
                  </span>
                )}
              </div>
              <div className="col-md-4">
                <label className="form-label d-flex text-muted">Email</label>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      className="form-control"
                      placeholder="test@gmail.com"
                      {...field}
                      type="email"
                    />
                  )}
                />
                {errors.email && (
                  <span className="text-danger">
                    Email invalide ! exemple:test@gmail.com
                  </span>
                )}
              </div>
              <div className="col-md-4">
                <label className="form-label d-flex text-muted">
                  Téléphone
                </label>
                <Controller
                  name="telephone"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="123456789"
                      {...field}
                    />
                  )}
                />
                {errors.telephone && (
                  <span className="text-danger">
                    Tapez votre numéro de téléphone !
                  </span>
                )}
              </div>
              <div className="col-md-4">
                <label className="form-label d-flex text-muted">
                  Site Internet
                </label>
                <Controller
                  name="siteinternet"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Site Internet"
                      {...field}
                    />
                  )}
                />
                {errors.siteinternet && (
                  <span className="text-danger">
                    Tapez le nom de votre site Internet !
                  </span>
                )}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 20,
              }}
              className="steps-action"
            >
              <button type="submit" className="btn btn-primary">
                Suivant
              </button>
            </div>
            {errors && (
              <span className="text-danger">
                {" "}
                Vérifier vos informations !!!{" "}
              </span>
            )}
          </form>
        );
      },
    },
    {
      title: "Information professionnelles",
      content: "Second-content",
      layout: () => {
        const submitSecondStep = (data) => {
          console.log(data);
          dispatch(addSecondStep(data));
          setCurrent(current + 1);
        };
        return (
          <form onSubmit={handleSubmit(submitSecondStep)}>
            <br />
            <div className="row g-3">
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
                    <span className="col-form-label d-flex text-muted">
                      Type:{" "}
                    </span>
                    <div className="col-md-4 d-flex">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="gridRadios2"
                          value="Entreprise"
                        />

                        <label
                          className="form-check-label d-flex text-muted"
                          for="gridRadios2"
                        >
                          Entreprise
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="gridRadios1"
                          value="Particulier"
                        />

                        <label
                          className="form-check-label d-flex text-muted"
                          for="gridRadios1"
                        >
                          Particulier
                        </label>
                      </div>
                    </div>
                  </fieldset>
                )}
              />

              <div className="col-md-6">
                <label className="form-label d-flex text-muted">
                  N identification fiscale
                </label>
                <Controller
                  name="nidentificationFiscale"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="123456789"
                      {...field}
                    />
                  )}
                />
                {errors.nidentificationFiscale && (
                  <span className="text-danger">
                    Tapez votre numéro d'identification fiscale !
                  </span>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label d-flex text-muted">Activité</label>
                <Controller
                  name="activite"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <select className="form-select" {...field}>
                      <option value={"Agence ou Société comerciale"}>
                        Agence ou Société comerciale
                      </option>
                      <option value={"Art et Design"}>Art et Design</option>
                      <option value={"Services de santé"}>
                        Services de santé
                      </option>
                    </select>
                  )}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label d-flex text-muted">Devis</label>
                <Controller
                  name="devis"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="0091234568"
                      {...field}
                    />
                  )}
                />
                {errors.devis && (
                  <span className="text-danger">
                    Tapez le numéro de votre devis!
                  </span>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label d-flex text-muted">
                  Conditions de paiements
                </label>
                <Controller
                  name="conditionPaiement"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <select className="form-select" {...field}>
                      <option value={"Personalisé"}>Personalisé</option>
                      <option value={" échéance à la fin du mois"}>
                        échéance à la fin du mois
                      </option>
                      <option value={"échéance à la fin fu mois prochain"}>
                        échéance à la fin fu mois prochain
                      </option>
                    </select>
                  )}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                flexDirection: "row",
                gap: "20px",
                marginTop: "2em",
              }}
              className="steps-action"
            >
              <button className="btn btn-primary" type="submit">
                Suivant
              </button>
              <button className="btn btn-secondary" onClick={() => prev()}>
                Retour
              </button>
            </div>
          </form>
        );
      },
    },
    {
      title: "Adresse de Facturation",
      content: "Last-content",
      layout: () => {
        const submitThirdStep = (data) => {
          console.log(data);
          dispatch(addThirdStep(data));
          setCurrent(current + 1);
        };
        return (
          <form onSubmit={handleSubmit(submitThirdStep)}>
            <br />
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label d-flex text-muted">Adresse</label>
                <Controller
                  name="adresse"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tunis"
                      {...field}
                    />
                  )}
                />
                {errors.adresse && (
                  <span className="text-danger">Tapez votre adresse !</span>
                )}
              </div>
              <div className="col-md-3">
                <label className="form-label d-flex text-muted">Postal</label>
                <Controller
                  name="codePostal"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="4000"
                      {...field}
                    />
                  )}
                />
                {errors.codePostal && (
                  <span className="text-danger">
                    Tapez le numéro de votre code Postal !
                  </span>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label d-flex text-muted">Etat</label>
                <Controller
                  name="etat"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lorem Ipsum is simply text"
                      {...field}
                    />
                  )}
                />
                {errors.etat && (
                  <span className="text-danger">Tapez votre texte !</span>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label d-flex text-muted">Pays</label>
                <Controller
                  name="pays"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tunisie"
                      {...field}
                    />
                  )}
                />
                {errors.pays && (
                  <span className="text-danger">
                    Tapez le nom de votre pays !
                  </span>
                )}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                marginTop: "2em",
              }}
              className="steps-action"
            >
              <button className="btn btn-primary" type="submit">
                Suivant
              </button>
              <button className="btn btn-secondary" onClick={() => prev()}>
                Retour
              </button>
            </div>
          </form>
        );
      },
    },
    {
      title: "Adresse  de Livraison",
      content: "Four-content",
      layout: () => {
        const submitFinalForm = (data) => {
          dispatch(addFourStep(data));
          console.log("Client Info", addClientInfo);
          let {
            titre,
            nom,
            prenom,
            email,
            entreprise,
            telephone,
            siteinternet,
            type,
            nidentificationFiscale,
            devis,
            activite,
            conditionPaiement,
            adresse,
            codePostal,
            etat,
            pays,
          } = addClientInfo;
          let client = {
            titre,
            nom,
            prenom,
            email,
            entreprise,
            telephone,
            siteinternet,
            type,
            nidentificationFiscale,
            devis,
            activite,
            conditionPaiement,
            adresse,
            codePostal,
            etat,
            pays,
            utilisateur: "6235e396cb3d6874fad966c0",
          };
          let { adresses } = addClientInfo;
          dispatch(
            addClientApi({ client: client, adresses: adresses }, addToast,handleClose)
          );
        };
        return (
          <form onSubmit={handleSubmit(submitFinalForm)}>
            <br />
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label d-flex text-muted">Adresse</label>
                <Controller
                  name="adresse"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tunis"
                      {...field}
                    />
                  )}
                />
                {errors.adresse && (
                  <span className="text-danger">Tapez votre adresse !</span>
                )}
              </div>
              <div className="col-md-3">
                <label className="form-label d-flex text-muted">Postal</label>
                <Controller
                  name="codePostal"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="4000"
                      {...field}
                    />
                  )}
                />
                {errors.codePostal && (
                  <span className="text-danger">
                    Tapez le numéro de votre code Postal !
                  </span>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label d-flex text-muted">Etat</label>
                <Controller
                  name="etat"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lorem Ipsum is simply text"
                      {...field}
                    />
                  )}
                />
                {errors.etat && (
                  <span className="text-danger">Tapez votre text !</span>
                )}
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
                      className="form-control"
                      placeholder="Tunisie"
                      {...field}
                    />
                  )}
                />
                {errors.pays && (
                  <span className="text-danger">
                    Tapez le nom de votre pays !
                  </span>
                )}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                marginTop: "2em",
              }}
              className="steps-action"
            >
              <button className="btn btn-primary" type="submit">
                Ajouter
              </button>
              <button className="btn btn-secondary" onClick={() => prev()}>
                Retour
              </button>
            </div>
          </form>
        );
      },
    },
  ];
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
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
      utilisateur: "6235e396cb3d6874fad966c0",
    },
  });

  return (
    <Modal
      className="modalStyle"
      footer={null}
      visible={isOpen}
      onCancel={handleClose}
      width={980}
      title={
        <div>
          <h6 className="text-white">Nouveau Client</h6>
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
    </Modal>
  );
};

export default AddNewClient;

/*const handleChange = (e) => {
  const { value, name } = e.target;
  setdata((prev) => ({
    ...prev,
    [name]: value,
  }));
};*/

/* const handleChange = (name) => (e) => {
  setdata({ ...data, [name]: e.target.value });
}; */

//const [success, setsuccess] = useState(false);
//const [error, seterror] = useState("");
/*const createClient = () => {
  let obj = {
    client: data,
    adresses: [
      {
        adresse: data.adresse,
        codePostal: data.codePostal,
        etat: data.etat,
        pays: data.pays,
      },
      {
        adresse: data.adresse,
        codePostal: data.codePostal,
        etat: data.etat,
        pays: data.pays,
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
}; */

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
