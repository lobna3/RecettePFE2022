import React, { useEffect} from "react";
import { BrouillonHeader } from "../RacetteHeader";
import { useDispatch, useSelector } from "react-redux";
import { getCommandeListApi } from "../../redux/actions/commande.actions";

export default function Brouilon() {
  const dispatch = useDispatch();
  const { commandeList } = useSelector((state) => state.commande);
  useEffect(() => {
    dispatch(getCommandeListApi());
  }, []);

  return (
    <main id="main" className="main bg-light">
      <BrouillonHeader />
      <div className="" style={{ marginLeft: 20, marginRight: 20 }}>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="email-content">
                <div className="table-responsive">
                  <table class="table table-inbox table-hover">
                    <tbody>
                      {commandeList.map((elm) => (
                        <tr
                          className="unread clickable-row"
                          data-href="mail-view.html"
                        >
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa fa-star starred"></i>
                            </span>
                          </td>
                          <td className="name text-primary">
                            N: {elm.nFacture}
                          </td>
                          <td className="name text-danger">{elm.status}</td>
                          <td className="name">
                            {elm.client.nom} {elm.client.prenom}
                          </td>
                          <td className="subject text-muted">
                            {elm.client.email}
                          </td>
                          <td>
                            <i className="fa fa-paperclip"></i>
                          </td>
                          <td className="mail-date">{elm.dateEcheance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
