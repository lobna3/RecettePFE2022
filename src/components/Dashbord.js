import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BsPersonPlusFill,
  BsPersonSquare,
  BsArrowLeftSquare,
  BsFillFileEarmarkPlusFill,
} from "react-icons/bs";
import { Steps, Button, Alert } from "antd";
import axios from "../config/axios";
import TableClient from "./TableClient";
import { BottomHeader } from "./RacetteHeader";
import { useForm } from "react-hook-form";
import AddNewClient from "./components/AddNewClient";
import NewOpModal from "./components/NewOpModal";
const { Step } = Steps;

const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
  {
    title: "Last1",
    content: "Last1-content",
  },
];

const Dashbord = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

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
  const [isOpen, setIsopen] = useState(false);
  const [isOpenOperation, setIsOpenOperation] = useState(false);
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

  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nom: "",
      prenom: "",
    },
  });

  const prenom = watch("prenom");

  return (
    <div>
      <main id="main" class="main">
        <BottomHeader />
        <section class="section dashboard">
          <div class="row">
            <div class="col-lg-9">
              <div class="row"></div>
            </div>
            <div class="col-lg-3">
              <div class="card" style={{ margin: "0 15px" }}>
                <img src="assets/img/card.jpg" class="card-img-top" alt="..." />
                <div class="card-img-overlay">
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Créer votre opération vente
                    </h5>
                    <div className="media text-center">
                      <div className="media-body">
                        <button
                          type="button"
                          className="btn btn-primary rounded-pill btn-sm"
                         onClick={()=>{
                          setIsOpenOperation(true)
                         }}
                        >
                          {" "}
                          Nouvelle Opération
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div class="card" style={{ margin: "0 15px" }}>
                <img src="assets/img/card.jpg" class="card-img-top" alt="..." />
                <div class="card-img-overlay">
                  <div className="card-body">
                    <h5 className="card-title text-center ">
                      Créer votre Projet
                    </h5>
                    <div className="media text-center">
                      <div className="media-body">
                        <button
                          type="button"
                          className="btn btn-primary rounded-pill btn-sm "
                        >
                          Nouveau Projet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div class="card" style={{ margin: "0 15px" }}>
                <img src="assets/img/card.jpg" class="card-img-top" alt="..." />
                <div class="card-img-overlay">
                  <div className="card-body">
                    <div className="media text-center">
                      <div className="media-body">
                        <div>
                          <p></p>
                          <br></br>
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary rounded-pill btn-sm "
                        >
                          Contactez Nous
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div class="modal fade" id="basicModal" tabindex="-1">
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
                {" "}
                <i class="d-flex" style={{ margin: "0 8px" }}>
                  {" "}
                  <BsArrowLeftSquare />{" "}
                </i>{" "}
                Choissisez votre opération souhaité
              </h5>
              <div className="card">
                <button
                  class="btn btn-outline-primary"
                  onClick={() => {
                    setIsopen(true);
                  }}
                >
                  <i class="d-flex" style={{ margin: "0 8px" }}>
                    <BsPersonPlusFill />
                  </i>
                  <span className="d-inline-block text-left text-dark">
                    {" "}
                    Nouveau Client
                    <small className="font-weight-light d-block text-muted">
                      Créer un nouvelle client
                    </small>
                  </span>
                </button>
                <p></p>
                <button
                  class="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#ExtralargeModal"
                >
                  <i class="d-flex" style={{ margin: "0 8px" }}>
                    <BsPersonSquare />
                  </i>
                  <span className="d-inline-block text-left text-dark">
                    {" "}
                    Ancien Client
                    <small className="font-weight-light d-block text-muted">
                      Aller au tableau des clients
                    </small>
                  </span>
                </button>
              </div>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
      <AddNewClient
        isOpen={isOpen}
        handleClose={() => {
          setIsopen(false);
        }}
      />
      <NewOpModal
        isOpen={isOpenOperation}
        handleClose={() => {
          setIsOpenOperation(false);
        }}
        handleFirstBtn={() => {
          setIsopen(true);
        }}
      />
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
    </div>
  );
};

export default Dashbord;
