import React, { useEffect } from "react";
import { BrouillonHeader } from "../RacetteHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommandeListApi,
  updateCommande,
} from "../../redux/actions/commande.actions";
import { getCommandeDetails } from "../../redux/actions/commande.details.actions";
import moment from "moment";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {
  FileDoneOutlined,
  PlusSquareFilled,
  MailOutlined,
  DollarOutlined,
} from "@ant-design/icons";

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
                    <thead className="text-muted">
                      <tr>
                        <th>#</th>
                        <th>nFacture</th>
                        <th>Status</th>
                        <th>Client</th>
                        <th>Email</th>
                        <th>Date Echéance</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {commandeList.map((elm) => (
                        <tr
                          className="unread clickable-row"
                          data-href="mail-view.html"
                        >
                          <td>
                            <input type="checkbox" className="checkmail" />
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

                          <td className="mail-date">
                            {moment(elm.dateEcheance).format("DD-MM-YYYY")}{" "}
                          </td>
                          <td>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant=""
                                id="dropdown-basic"
                              ></Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item></Dropdown.Item>
                                <Dropdown.Item>
                                  <Link
                                    to={`/paiement/${elm._id}`}
                                    onClick={() => {
                                      dispatch(getCommandeDetails(elm));
                                    }}
                                  >
                                    <DollarOutlined /> Payée
                                  </Link>
                                </Dropdown.Item>
                                <Dropdown.Item></Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
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
