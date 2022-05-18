import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommandesListDetailsApi } from "../redux/actions/commande.details.actions";
import { useParams, useLocation } from "react-router-dom";
import moment from "moment";


export const ComponentToPrint = React.forwardRef((props, ref) => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { commandeDetails } = useSelector((state) => state.detailsCommande);
  useEffect(() => {
    dispatch(getCommandesListDetailsApi(id));
    console.log("URL", location.pathname);
  }, []);
  
  return (
    <div class="container" ref={ref}>
      <div className="card">
        <div className="card-header">
          <strong>NFacture: </strong> {commandeDetails.nFacture}{" "}
          <span className="float-right">
            <strong>Facturer:</strong>{" "}
            {moment(commandeDetails.dateEmission).format("DD-MM-YYYY")}{" "}
          </span>
          <span className="float-right">
            <strong>Status:</strong> {commandeDetails.etat}
          </span>
        </div>
        <div className="card-body">
          <div className="row mb-4">
            <div className="col-sm-6">
              <h6 className="mb-3"></h6>
              <div>
                <strong>Arsela</strong>
              </div>
              <div> Boulevard Khalifa Karoui, Immeuble T.M.S</div>
              <div>4ème étage Bureau D-2, Sahloul 4054 Sousse, Tunisie</div>
              <div>Email: info@arsela.co</div>
              <div>Phone: (+216) 26 314 922</div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3"></h6>
              <div>
                <strong>Client</strong>
              </div>
              <div>
                Attn:{" "}
                {commandeDetails &&
                  commandeDetails.client &&
                  commandeDetails.client.nom &&
                  commandeDetails.client.nom}{" "}
                {commandeDetails &&
                  commandeDetails.client &&
                  commandeDetails.client.prenom &&
                  commandeDetails.client.prenom}
              </div>
              <div>
                {" "}
                {commandeDetails &&
                  commandeDetails.client &&
                  commandeDetails.client.activite &&
                  commandeDetails.client.activite}
              </div>
              <div>
                Email:{" "}
                {commandeDetails &&
                  commandeDetails.client &&
                  commandeDetails.client.email &&
                  commandeDetails.client.email}
              </div>
              <div>
                Phone:{" "}
                {commandeDetails &&
                  commandeDetails.client &&
                  commandeDetails.client.telephone &&
                  commandeDetails.client.telephone}
              </div>
            </div>
          </div>
          <div className="table-responsive-sm">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th class="center">#</th>
                  <th>Article</th>
                  <th>Description</th>

                  <th class="right">Coût unitaire</th>
                  <th class="center">Qté</th>
                  <th class="right">Total</th>
                </tr>
              </thead>
              <tbody>
              {commandeDetails &&
                    commandeDetails.articles &&
                    commandeDetails.articles.map((elm) => (
                <tr>
                  <td class="center">#{elm._id}</td>
                  <td class="left strong">{elm.service.titre}</td>
                  <td class="left">{elm.service.description}</td>

                  <td class="right">{elm.pu}DT</td>
                  <td class="center">{elm.qte}</td>
                  <td class="right">{elm.prix}DT</td>
                </tr>
                    ))}
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-5"></div>

            <div className="col-lg-4 col-sm-5 ml-auto">
              <table class="table table-clear">
                <tbody>
                  <tr>
                    <td class="left">
                      <strong>SubTotal</strong>
                    </td>
                    <td class="right"> {commandeDetails.total} DT</td>
                  </tr>
                  <tr>
                    <td class="left">
                      <strong>Remise (20%)</strong>
                    </td>
                    <td class="right"> {commandeDetails.remise} DT</td>
                  </tr>
                  <tr>
                    <td class="left">
                      <strong>Tax(10%)</strong>
                    </td>
                    <td class="right"> {commandeDetails.taxes} DT</td>
                  </tr>
                  <tr>
                    <td class="left">
                      <strong>Total</strong>
                    </td>
                    <td class="right">
                      <strong>{commandeDetails.solde}DT</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card">
            <p>Note: {commandeDetails.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

const Pdf = () => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { commandeDetails } = useSelector((state) => state.detailsCommande);
  useEffect(() => {
    dispatch(getCommandesListDetailsApi(id));
    console.log("URL", location.pathname);
  }, []);
  return <div>Pdf {commandeDetails._id}</div>;
};

export default Pdf;
