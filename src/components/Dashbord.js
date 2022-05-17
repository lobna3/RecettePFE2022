import React, { useState , useEffect } from "react";
import { Pie } from "@ant-design/plots";
import {
  getCommandeListApi
} from "../redux/actions/commande.actions";
import { useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch();
  const { commandeList } = useSelector((state) => state.commande);
  const paye= commandeList.filter((u) => u.note === "Payé");
  const nonpaye= commandeList.filter((u) => u.note === "Non Payé");
  const accepte= commandeList.filter((u) => u.etat === "Accepté");
  const enattente= commandeList.filter((u) => u.etat === "En attente");
  const annuler= commandeList.filter((u) => u.etat === "Annuler");
  const echenace= commandeList.filter((u) => u.etat === "Arrivé à l'échéance");
  const data = [
    {
      type: "Payé",
      value: paye.length,
    },
    {
      type: "Non payé",
      value: nonpaye.length,
    },
    {
      type: "Accepté",
      value: accepte.length,
    },
    {
      type: "En attente",
      value: enattente.length,
    },
    {
      type: "Annuler",
      value: annuler.length,
    },
    {
      type: "Arrivé à l'échéance",
      value: echenace.length,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.75,
    label: {
      type: "spider",
      labelHeight: 28,
      content: "{name}\n{percentage}",
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };
  useEffect(() => {
    dispatch(getCommandeListApi());
  }, []);

  return (
    <div>
      <main id="main" class="main bg-light">
        <BottomHeader />
        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <h5>Ant Design Charts</h5>
                  <Pie {...config} />;
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card"
                style={{
                  marginTop: 20,
                  margin: "0 0",
                  height: "120px",
                  width: "300px",
                  borderWidth: 1,
                  backgroundColor: "#fafafa",
                  borderRadius: "60px 0 0 10px",
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
                        style={{ backgroundColor: "#0050b3" }}
                        className="btn btn-primary rounded-pill btn-sm"
                        onClick={() => {
                          setIsOpenOperation(true);
                        }}
                      >
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
                  margin: "0 0",
                  height: "120px",
                  width: "300px",
                  borderWidth: 1,
                  backgroundColor: "#fafafa",
                  borderRadius: "60px 0 0 10px",
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
                        style={{ backgroundColor: "#0050b3" }}
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
                  margin: "0 0px",
                  height: "200px",
                  width: "300px",
                  borderWidth: 1,
                  backgroundColor: "#fafafa",
                  borderRadius: "60px 0  0 10px",
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
                        style={{
                          marginTop: 80,
                          marginLeft: 60,
                          backgroundColor: "#0050b3",
                        }}
                        className="btn btn-primary rounded-pill btn-sm"
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
          setIsOpenOperation(false);
        }}
        handleSecondBtn={() => {
          setIsOpenListe(true);
          setIsOpenOperation(false);
        }}
      />
      <ListeClients
        isOpen={isOpenListe}
        handleClose={() => {
          setIsOpenListe(false);
        }}
        handleFirstBtn={() => {
          setIsOpenModal(true);
          setIsOpenListe(false);
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
