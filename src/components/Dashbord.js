import React, { useState } from "react";
import { BottomHeader } from "./RacetteHeader";
import AddNewClient from "./clients/AddNewClient";
import NewOpModal from "./clients/NewOpModal";
import ListeClients from "./clients/ListeClients";
import ModalOP from "./clients/ModalOP";

const Dashbord = () => {
  const [isOpen, setIsopen] = useState(false);
  const [isOpenOperation, setIsOpenOperation] = useState(false);
  const [isOpenListe, setIsOpenListe] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <main id="main" class="main bg-light">
        <BottomHeader />
        <section class="section dashboard">
          <div class="row">
            <div class="col-lg-9">
              <div class="row"></div>
            </div>
            <div class="col-lg-3">
              <div
                className="card"
                style={{
                  margin: "0 15px",
                  height: "150px",
                  width: "200px",
                  borderWidth: 2,
                  backgroundColor: "#f0f6fa",
                }}
              >
                <div className="card-body">
                  <p className=" text-center text-primary">
                    Créer votre opération vente
                  </p>
                  <div className="media text-center">
                    <div className="media-body">
                      <button
                        type="button"
                        className="btn btn-primary rounded-pill btn-sm"
                        onClick={() => {
                          setIsOpenOperation(true);
                        }}
                      >
                        {" "}
                        Nouvelle Opération
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div
                class="card"
                style={{
                  margin: "0 15px",
                  height: "150px",
                  width: "200px",
                  borderWidth: 2,
                  backgroundColor: "#f0f6fa",
                }}
              >
                <div className="card-body">
                  <p className="text-center text-primary ">
                    Créer votre Projet
                  </p>
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
              <br />
              <div
                className="card"
                style={{
                  margin: "0 15px",
                  height: "150px",
                  width: "200px",
                  borderWidth: 2,
                  backgroundColor: "#f0f6fa",
                }}
              >
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
          <br />
        </section>
      </main>

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
        handleSecondBtn={() => {
          setIsOpenListe(true);
        }}
      />
      <ListeClients
        isOpen={isOpenListe}
        handleClose={() => {
          setIsOpenListe(false);
        }}
        handleFirstBtn={() => {
          setIsOpenModal(true);
        }}
      />
      <ModalOP
        isOpen={isOpenModal}
        handleClose={() => {
          setIsOpenModal(false);
        }}
      />
    </div>
  );
};

export default Dashbord;
