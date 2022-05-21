import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommandesListDetailsApi } from "../redux/actions/commande.details.actions";
import { useParams, useLocation } from "react-router-dom";
import moment from "moment";

export const ComponentToPrint = React.forwardRef((props, ref) => {
  const signature = require("../components/devis/signature-scan.png");
  const arsela = require("../components/devis/arsela.png");
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
      <section className="card" style={{marginLeft:50,marginRight:50, marginTop:20}}>
        <div id="invoice-template" className="card-body p-4">
          <div id="invoice-company-details" className="row">
            <div className="col-sm-6 col-12 text-center text-sm-left">
              <div className="media row">
                <div className="col-12 col-sm-3 col-xl-2">
                  <img
                    src={arsela}
                    alt="company logo"
                    className="mb-1 mb-sm-0"
                    style={{ width: 150, marginTop: 20 }}
                  />
                </div>
                <div className="col-12 col-sm-9 col-xl-10">
                  <div className="media-body">
                    <ul className="ml-2 px-0 list-unstyled">
                      <li className="text-bold-800">Arsela</li>
                      <li>Boulevard Khalifa Karoui,</li>
                      <li>Sahloul 4054 Sousse, Tunisie,</li>
                      <li>Email: info@arsela.com,</li>
                      <li>Phone: (+216) 26 314 922</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-12 text-center text-sm-right">
              <h2>FACTURE</h2>
              <p className="pb-sm-3"># INV-{commandeDetails.nFacture}</p>
              <ul className="px-0 list-unstyled">
                <li>Solde</li>
                <li className="lead text-bold-800">{commandeDetails.totalTtc}DT</li>
              </ul>
            </div>
          </div>

          <div id="invoice-customer-details" className="row pt-2">
            <div className="col-12 text-center text-sm-left d-flex">
              <p className="text-muted">Facturer</p>
            </div>
            <div className="col-sm-6 col-12 text-center text-sm-left d-flex">
              <ul className="px-0 list-unstyled">
                <li className="text-bold-800">   {commandeDetails &&
                  commandeDetails.client &&
                  commandeDetails.client.titre &&
                  commandeDetails.client.titre} {commandeDetails &&
                  commandeDetails.client &&
                  commandeDetails.client.nom &&
                  commandeDetails.client.nom}{" "}
                {commandeDetails &&
                  commandeDetails.client &&
                  commandeDetails.client.prenom &&
                  commandeDetails.client.prenom}</li>
                <li>  {commandeDetails &&
                  commandeDetails.client &&
                  commandeDetails.client.activite &&
                  commandeDetails.client.activite},</li>
                <li>Email:  {commandeDetails &&
                  commandeDetails.client &&
                  commandeDetails.client.email &&
                  commandeDetails.client.email},</li>
                <li>Téléphone:  {commandeDetails &&
                  commandeDetails.client &&
                  commandeDetails.client.telephone &&
                  commandeDetails.client.telephone}.</li>
              </ul>
            </div>
            <div className="col-sm-6 col-12 text-center text-sm-right">
              <p>
                <span className="text-muted">Date de facturation :</span>{moment(commandeDetails.dateEmission).format("DD-MM-YYYY")}{" "}
              </p>
              <p>
                <span className="text-muted">Status :</span> {commandeDetails.etat}
              </p>
              <p>
                <span className="text-muted">Date d'échéance :</span> {moment(commandeDetails.dateEcheance).format("DD-MM-YYYY")}{" "}
              </p>
            </div>
          </div>

          <div id="invoice-items-details" className="pt-2">
            <div className="row">
              <div className="table-responsive col-12">
                <table className="table table-hover">
                  <thead className="bg-light">
                    <tr>
                      <th>#</th>
                      <th>Article &amp; Description</th>
                      <th class="text-right">QTE</th>
                      <th class="text-right">PU</th>
                      <th class="text-right">Tax</th>
                      <th class="text-right">Prix</th>
                    </tr>
                  </thead>
                  <tbody>
                  {commandeDetails &&
                  commandeDetails.articles &&
                  commandeDetails.articles.map((elm) => (
                    <tr>
                    <th scope="row">#</th>
                    <td>
                      <p>{elm.service.titre}</p>
                      <p class="text-muted">
                       {elm.service.description}.
                      </p>
                    </td>
                    <td class="text-right">{elm.qte}</td>
                    <td class="text-right">{elm.pu}DT</td>
                    <td class="text-right">{elm.taxe}</td>
                    <td class="text-right">{elm.prix}DT</td>
                  </tr>
                  
                  ))}
                   
                   
                  </tbody>
                </table>
              </div>
            </div>
            <div class="row">
            
              <div class="col-sm-7 col-12 text-center text-sm-left">
               <p class="lead d-flex">Méthodes de payement:</p>
                <div class="row">
                  <div class="col-sm-8">
                    <div class="table-responsive">
                      <table class="table table-borderless table-sm">
                        <tbody>
                          <tr>
                            <td>Nom de banque:</td>
                            <td class="text-right">ABC Bank, USA</td>
                          </tr>
                          <tr>
                            <td>Nom d'accès :</td>
                            <td class="text-right">Amanda Orton</td>
                          </tr>
                          <tr>
                            <td>IBAN:</td>
                            <td class="text-right">FGS165461646546AA</td>
                          </tr>
                          <tr>
                            <td>SWIFT code:</td>
                            <td class="text-right">BTNPP34</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div> 
               
              </div>
              <div class="col-sm-5 col-12">
                <p class="lead">Total</p>
                <div class="table-responsive">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>Total HT </td>
                        <td class="text-right">{commandeDetails.total} DT</td>
                      </tr>
                      <tr>
                        <td>TAX (12%)</td>
                        <td class="text-right">{commandeDetails.taxes}DT</td>
                      </tr>
                      <tr>
                        <td class="text-bold-800">Remise(5%)</td>
                        <td class="text-bold-800 text-right"> {commandeDetails.remise}DT</td>
                      </tr>
                      <tr>
                        <td>totalTtc</td>
                        <td class="pink text-right">{commandeDetails.totalTtc}DT</td>
                      </tr>
                      {/*<tr class="bg-grey bg-lighten-4">
                        <td class="text-bold-800">Solde</td>
                        <td class="text-bold-800 text-right">{commandeDetails.solde}DT</td>
                      </tr> */}
                      
                    </tbody>
                  </table>
                </div>
                <div class="text-center">
                  <p class="mb-0 mt-1">Personne autorisée</p>

                  <img src={signature} alt="signature" class="height-100" />
                  <h6>{commandeDetails &&
                  commandeDetails.client &&
                  commandeDetails.client.titre &&
                  commandeDetails.client.titre} {commandeDetails &&
                  commandeDetails.client &&
                  commandeDetails.client.nom &&
                  commandeDetails.client.nom}{" "}
                {commandeDetails &&
                  commandeDetails.client &&
                  commandeDetails.client.prenom &&
                  commandeDetails.client.prenom} </h6>
                  <p class="text-muted">Directeur général</p>
                </div>
              </div>
            </div>
          </div>

          <div id="invoice-footer">
            <div className="row">
              <div className="col-sm-7 col-12 text-center text-sm-left">
                <h6>Terms &amp; Condition</h6>
                <p>Le pilote d'essai n'est pas toujours l'entreprise la plus saine..</p>
              </div>
              {/* <div class="col-sm-5 col-12 text-center">
                <button
                  type="button"
                  class="btn btn-info btn-print btn-lg my-1"
                >
                  <i class="la la-paper-plane-o mr-50"></i>
                  Print Invoice
                </button>
              </div> */}
             
            </div>
          </div>
        </div>
      </section>
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
