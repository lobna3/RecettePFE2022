import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommandesApi,
  deleteCommandeApi,
  updateCommande
} from "../../redux/actions/commande.actions";
import Swal from "sweetalert2";
import { Dropdown } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import { Typography, Table, Space } from "antd";
import { FactureHeader } from "../RacetteHeader";
import EnvoyerEmail from "../devis/EnvoyerEmail";
import {
  StopOutlined,
  PlusSquareFilled,
  FileDoneOutlined,
  FormOutlined,
  DeleteOutlined,
  AuditOutlined,
  MailOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import moment from 'moment';
import ModStatus from "../devis/ModStatus";

const { Text } = Typography;

export default function Facture() {
  const [isOpenStatus, setIsopenStatus] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  const { commandeList } = useSelector((state) => state.commande);
  useEffect(() => {
    dispatch(getCommandesApi("Facture"));
  }, []);
  const displayEtat = (etat) => {
    if (etat == "Retard - 4 jours") {
      return <span className="badge bg-danger">{etat}</span>;
    } else if (etat == "Déposé") {
      return <span className="badge bg-success">{etat}</span>;
    } else if (etat == "Echéance - 2 jours") {
      return <span className="badge bg-warning">{etat}</span>;
    } else {
      return <span className="badge bg-secondary">{etat}</span>;
    }
  };
  const columns = [
    {
      title: "N facture",
      dataIndex: "nFacture",
      render: (text, record) => (
        <Space>
          <input type="checkbox" className="checkmail" />
          <Link to="/" target="_blank">
            {record.nFacture}
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
      title: "Echéance",
      dataIndex: "dateEcheance",
      render: (text, record) => {
        return (
          <>
            <Space direction="vertical">
              <Text strong>{moment(record.dateEcheance).format('DD-MM-YYYY')}</Text>
            </Space>
          </>
        );
      },
      sorter: {
        compare: (a, b) => a.dateEcheance - b.dateEcheance,
        multiple: 3,
      },
    },
    {
      title: "Solde",
      dataIndex: "solde",
      render: (text, record) => {
        return (
          <>
            <Space direction="vertical">
              <Text strong>{record.solde} TND</Text>
            </Space>
          </>
        );
      },
      sorter: {
        compare: (a, b) => a.solde - b.solde,
        multiple: 3,
      },
    },
    {
      title: "Total",
      dataIndex: "total",
      render: (text, record) => {
        return (
          <>
            <Space direction="vertical">
              <Text strong>{record.total} TND</Text>
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
                <Link to="/paiement">
                  <DollarOutlined /> Paiement
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
              <span
                  className="text-primary"
                  onClick={() => {
                    setIsopenStatus(true);
                    dispatch(updateCommande(record._id));
                  }}
                >
                  <FileDoneOutlined style={{ color: "#1890ff" }} /> Générer
                </span>
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
                <Link to="/">
                  <AuditOutlined /> Générer le borderau d'expédition
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={`/devi/${record._id}`}
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
              <Dropdown.Item>
                <Link to="/">
                  <StopOutlined /> Annuler
                </Link>
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
        <FactureHeader />
        <div className="pagetitle">
          <div
            style={{ display: "flex", justifyContent: "flex-end" }}
            className="col-lg-12 "
          >
            <Link className="" to="/ajouter_facture">
              <button
                style={{ margin: "0 20px" }}
                type="button"
                className="btn btn-primary btn-sm ml-2 "
              >
                <PlusSquareFilled /> Ajouter facture
              </button>{" "}
            </Link>
            <button
              style={{ margin: "0 20px" }}
              type="button"
              className="btn btn-primary  btn-sm ml-2 "
            >
              <PlusSquareFilled /> Nouvelle Opération
            </button>
          </div>
          <br />
        </div>

        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card" style={{ margin: "0 15px 40px 20px" }}>
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
       <ModStatus
        isOpen={isOpenStatus}
        handleClose={() => {
          setIsopenStatus(false);
        }}
      />
    </div>
  );
}
