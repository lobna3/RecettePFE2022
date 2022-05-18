import React, { useEffect } from "react";
import { Pie } from "@ant-design/plots";
import { getCommandeListApi } from "../../redux/actions/commande.actions";
import { useDispatch, useSelector } from "react-redux";
import { RecettesHeader } from "../RacetteHeader";
import Chart from "./Chart";

export default function Recette() {
  const dispatch = useDispatch();
  const { commandeList } = useSelector((state) => state.commande);
 // const paye = commandeList.filter((u) => u.note === "Payé");
 // const nonpaye = commandeList.filter((u) => u.note === "Non Payé");
  const accepte = commandeList.filter((u) => u.etat === "Accepté");
  const enattente = commandeList.filter((u) => u.etat === "En attente");
  const annuler = commandeList.filter((u) => u.etat === "Annuler");
  const echenace = commandeList.filter((u) => u.etat === "Arrivé à l'échéance");
  const accepte1 = commandeList.filter((u) => u.etat === "Retard - 4 jours");
  const enattente1 = commandeList.filter((u) => u.etat === "Echéance - 2 jours");
  const annuler1 = commandeList.filter((u) => u.etat === "Déposé");
  //const echenace1 = commandeList.filter((u) => u.etat === "Arrivé à l'échéance");
  useEffect(() => {
    dispatch(getCommandeListApi());
  }, []);
  const data = [
    {
     // type: "Non payé",
     // value: nonpaye.length,
    },
    {
     // type: "Payé",
      //value: paye.length,
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
    {
      type: "Echéance - 2 jours",
      value: enattente1.length,
    },
    {
      type: "Déposé",
      value: annuler1.length,
    },
    {
      type: "Retard - 4 jours",
      value: accepte1.length,
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

  return (
    <main id="main" className="main bg-light">
      <RecettesHeader />

      <div className="row">
        <div className="col-md-8">
          <div
            className="card"
            style={{ marginLeft: 10, borderRadius: "5px 5px" }}
          >
            <Pie {...config} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ borderRadius: "5px 5px" }}>
            <Chart />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
        
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}

/* <Card
            size="small"
            title="Impayé"
            extra={
              <span class="badge rounded-pill bg-danger">
                + 28% depuis le mois dernier
              </span>
            }
            style={{
              height: 160,
              width: 480,
              margin: "0 40px",
              borderRadius: "10px 10px",
            }}
          >
            <div className="d-flex flex-row">
              <h6 className="text-primary">18</h6>
              <h6 className="text-danger" style={{ margin: "0 420px" }}>
                9
              </h6>
            </div>
            <div className="d-flex flex-row">
              <h6 className="text-primary">EnAttente</h6>{" "}
              <h6 className="text-danger" style={{ margin: "0 320px" }}>
                EnRetard
              </h6>
            </div>
            <Progress percent={50} showInfo={false} />
            <div className="d-flex flex-row">
              <h6>900.450.000DT</h6>
              <h6 style={{ margin: "0 230px" }}>900.450.000DT</h6>
            </div>
          </Card>
 */

/*<Card
            size="small"
            title="Payé"
            extra={
              <span class="badge rounded-pill bg-success">
                + 10% depuis le mois dernier
              </span>
            }
            style={{
              height: 160,
              width: 480,
              margin: "0 20px",
              borderRadius: "10px 10px",
            }}
          >
            <div className="d-flex flex-row">
              {" "}
              <h6 className="text-primary">18</h6>{" "}
              <h6 className="text-danger" style={{ margin: "0 420px" }}>
                9
              </h6>
            </div>
            <div className="d-flex flex-row">
              {" "}
              <h6 className="text-primary">EnBanque</h6>{" "}
              <h6 className="text-danger" style={{ margin: "0 230px" }}>
                PasEncoueEnBanque
              </h6>
            </div>
            <Progress percent={50} showInfo={false} />
            <div className="d-flex flex-row">
              {" "}
              <h6>900.450.000DT</h6>{" "}
              <h6 style={{ margin: "0 230px" }}>900.450.000DT</h6>
            </div>
          </Card> */
/* */
