import React, { useEffect, useState } from "react";
import moment from 'moment';
import { Dropdown } from "react-bootstrap";
import { Typography } from "antd";
import {
  PrinterFilled,
  PlusSquareFilled,
  DeleteOutlined,
  FundViewOutlined,
  MailOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { Table, Space } from "antd";
import { DevisHeader } from "../RacetteHeader";
import { ToastContainer } from "react-toastify";
import { useToasts } from "react-toast-notifications";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommandesApi,
  deleteCommandeApi,
  updateCommande,
} from "../../redux/actions/commande.actions";
import {getCommandeDetails} from "../../redux/actions/commande.details.actions";
import Swal from "sweetalert2";
import EnvoyerEmail from "./EnvoyerEmail";

const { Text } = Typography;

const Devis = () => {
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  const [isOpen, setIsopen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const { commandeList } = useSelector((state) => state.commande);

  useEffect(() => {
    dispatch(getCommandesApi("Devis"));
    console.log("URL", location.pathname);
  }, []);

  const displayEtat = (etat) => {
    if (etat == "Refusé") {
      return <span className="badge bg-danger">{etat}</span>;
    } else if (etat == "Accepté") {
      return <span className="badge bg-success">{etat}</span>;
    } else if (etat == "En attente") {
      return <span className="badge bg-warning">{etat}</span>;
    } else if (etat == "Annuler") {
      return <span className="badge bg-secondary">{etat}</span>;
    } else if (etat == "Arrivé à l'échéance") {
      return <span className="badge bg-primary">{etat}</span>;
    } else {
      return <span className="badge bg-danger">{etat}</span>;
    }
  };

  const imprimer_page = () => {
    window.print();
  };

  const columns = [
    {
      title: "Référence",
      dataIndex: "nReference",
      render: (text, record) => (
        <Space>
          <input type="checkbox" className="checkmail" />
          <Link to="/" target="_blank">
            {record.nReference}
          </Link>
        </Space>
      ),
      sorter: {
        compare: (a, b) => a.nReference - b.nReference,
        multiple: 3,
      },
    },
    {
      title: "Client",
      dataIndex: "nom",
      render: (text, record) => {
        return (
          <>
            <Space direction="vertical">
              <Text type="secondary">{record.client.nom} {record.client.prenom}</Text>
            </Space>
          </>
        );
      },
      sorter: {
        compare: (a, b) => a.nom - b.nom,
        multiple: 3,
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text, record) => {
        return (
          <>
            <Space direction="vertical">
              <Text type="secondary">{record.client.email}</Text>
            </Space>
          </>
        );
      },
      sorter: {
        compare: (a, b) => a.email - b.email,
        multiple: 3,
      },
    },
    {
      title: "NTel",
      dataIndex: "telephone",
      render: (text, record) => {
        return (
          <>
            <Space direction="vertical">
              <Text strong>{record.client.telephone}</Text>
            </Space>
          </>
        );
      },
      sorter: {
        compare: (a, b) => a.telephone - b.telephone,
        multiple: 3,
      },
    },
    {
      title: "Montant",
      dataIndex: "total",
      render: (text, record) => {
        return (
          <>
            <Space direction="vertical">
              <Text strong>{record.total} <span>DT</span></Text>
            </Space>
          </>
        );
      },
      sorter: {
        compare: (a, b) => a.total - b.total,
        multiple: 3,
      },
    },
    {
      title: "Date",
      dataIndex: "dateEchance",
      render: (text, record) => {
        return (
          <>
            <Space direction="vertical">
              <Text strong>{moment(record.dateEcheance).format('DD-MM-YYYY')} </Text>
            </Space>
          </>
        );
      },
      sorter: {
        compare: (a, b) => a.dateEmission - b.dateEmission,
        multiple: 3,
      },
    },
    {
      title: "Etat",
      dataIndex: "etat",
      render: (text, record) => {
        return (
          <>
            <Space direction="vertical">{displayEtat(record.etat)}</Space>
          </>
        );
      },
      sorter: {
        compare: (a, b) => a.condition - b.condition,
        multiple: 3,
      },
    },

    {
      title: "Action",
      render: (text, record) => (
        <Space wrap size="middle">
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic"></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <span
                  className="text-primary"
                  onClick={() => {
                    imprimer_page();
                  }}
                >
                  <PrinterFilled /> Imprimer
                </span>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={`/devis/${record._id}`}
                onClick={() => {
                  dispatch(getCommandeDetails(record));
                }}
                >
                  <FundViewOutlined /> Visualiser
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={`/devi/${record._id}`}
                  onClick={() => {
                    dispatch(updateCommande(record));
                    dispatch({
                      type: "SET_SELECTED_ARTICLE",
                      payload: record.articles,
                    });
                  }}
                >
                  <FormOutlined /> Modifier
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <span
                  className="text-primary"
                  onClick={() => {
                    setIsopen(true);
                  }}
                >
                  <MailOutlined style={{ color: "#1890ff" }} /> Envoyer
                </span>
              </Dropdown.Item>
              <Dropdown.Item>
                <DeleteOutlined style={{ color: "#1890ff" }} />
                <span
                  className="text-primary"
                  type="button"
                  onClick={() => {
                    Swal.fire({
                      title: "Vous êtes sure de supprimer cet Commande ?",
                      showCancelButton: true,
                      confirmButtonText: `Confirmer`,
                      cancelButtonText: `Annuler`,
                    }).then((result) => {
                      if (result.isConfirmed) {
                        dispatch(deleteCommandeApi(record._id, addToast));
                      }
                    });
                  }}
                >
                  Supprimer
                </span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <main id="main" className="main bg-light">
        <ToastContainer position="top-center" />
        <DevisHeader></DevisHeader>

        <div className="pagetitle">
          <div
            style={{ display: "flex", justifyContent: "flex-end" }}
            className="col-lg-12 "
          >
            <Link className="" to="/ajouter_devis">
              <button
                style={{ margin: "0 20px" }}
                type="button"
                className="btn btn-primary btn-sm ml-8 "
              >
                <PlusSquareFilled /> Ajout Devis
              </button>
            </Link>
            <button
              style={{ margin: "0 20px" }}
              type="button"
              className="btn btn-primary  btn-sm ml-8 "
            >
              <PlusSquareFilled /> Nouvelle Opération
            </button>
          </div>

          <br />
        </div>
        <div className="col-lg-12 grid-margin stretch-card">
          <div
            className="card"
            style={{
              marginLeft: 15,
              marginRight: 10,
              marginTop: 0,
              marginBottom: 40,
            }}
          >
            <div className="card-body">
              <Table
                columns={columns}
                dataSource={commandeList}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </main>
      <EnvoyerEmail
        isOpen={isOpen}
        handleClose={() => {
          setIsopen(false);
        }}
      />
    </div>
  );
};

export default Devis;
