import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommandesListDetailsApi } from "../redux/actions/commande.details.actions";
import { useParams, useLocation } from "react-router-dom";

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      
        <div class="container">
          <div className="card">
            <div className="card-header">
              Facturer: {" "}
              <strong>01/01/2018</strong> {" "}
              <span className="float-right">
                <strong>Status:</strong> En attente
              </span>
            </div>
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-sm-6">
                  <h6 className="mb-3">Depuis:</h6>
                  <div>
                    <strong>Webz Poland</strong>
                  </div>
                  <div>Madalinskiego 8</div>
                  <div>71-101 Szczecin, Poland</div>
                  <div>Email: info@webz.com.pl</div>
                  <div>Phone: +48 444 666 3333</div>
                </div>
                <div className="col-sm-6">
                  <h6 className="mb-3">Pour:</h6>
                  <div>
                    <strong>Bob Mart</strong>
                  </div>
                  <div>Attn: Daniel Marek</div>
                  <div>43-190 Mikolow, Poland</div>
                  <div>Email: marek@daniel.com</div>
                  <div>Phone: +48 123 456 789</div>
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
                    <tr>
                      <td class="center">1</td>
                      <td class="left strong">Licence d'origine</td>
                      <td class="left">Licence étendue</td>

                      <td class="right">$999,00</td>
                      <td class="center">1</td>
                      <td class="right">$999,00</td>
                    </tr>
                    <tr>
                      <td class="center">2</td>
                      <td class="left">Custom Services</td>
                      <td class="left">
                        Instalation and Customization (cost per hour)
                      </td>

                      <td class="right">$150,00</td>
                      <td class="center">20</td>
                      <td class="right">$3.000,00</td>
                    </tr>
                    <tr>
                      <td class="center">3</td>
                      <td class="left">Hosting</td>
                      <td class="left">1 year subcription</td>

                      <td class="right">$499,00</td>
                      <td class="center">1</td>
                      <td class="right">$499,00</td>
                    </tr>
                    <tr>
                      <td class="center">4</td>
                      <td class="left">Platinum Support</td>
                      <td class="left">1 year subcription 24/7</td>

                      <td class="right">$3.999,00</td>
                      <td class="center">1</td>
                      <td class="right">$3.999,00</td>
                    </tr>
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
                        <td class="right">$8.497,00</td>
                      </tr>
                      <tr>
                        <td class="left">
                          <strong>Remise (20%)</strong>
                        </td>
                        <td class="right">$1,699,40</td>
                      </tr>
                      <tr>
                        <td class="left">
                          <strong>Tax(10%)</strong>
                        </td>
                        <td class="right">$679,76</td>
                      </tr>
                      <tr>
                        <td class="left">
                          <strong>Total</strong>
                        </td>
                        <td class="right">
                          <strong>$7.477,36</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="">

              </div>
            </div>
          </div>
        </div>
    
    );
  }
}
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
