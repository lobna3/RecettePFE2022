import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCommandeListApi , updateCommande} from "../../redux/actions/commande.actions";
import { getCommandeDetails } from "../../redux/actions/commande.details.actions";
import {  Typography, Table, Space } from "antd";
import { Dropdown } from "react-bootstrap";
import {
  FileDoneOutlined,
  PlusSquareFilled,
  MailOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { VenteHeader } from "../RacetteHeader";
import EnvoyerEmail from "../devis/EnvoyerEmail";
import moment from 'moment';
import ModStatus from "../devis/ModStatus";

const { Text } = Typography;

export default function Vente() {
  const [isOpen, setIsopen] = useState(false);
  const [isOpenStatus, setIsopenStatus] = useState(false);
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  const dispatch = useDispatch();
  const { commandeList } = useSelector((state) => state.commande);
  useEffect(() => {
    dispatch(getCommandeListApi());
  }, []);
  const displayEtat = (note) => {
    if (note == "Non Payé") {
      return <span className="badge bg-danger">{note}</span>;
    } else if (note == "Payé") {
      return <span className="badge bg-success">{note}</span>;
    } else {
      return <span className="badge bg-secondary">{note}</span>;
    }
  };

  const columns = [
    {
      title: "N Facture",
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
        compare: (a, b) => a.nFacture - b.nFacture,
        multiple: 3,
      },
    },
    {
      title: "Client",
      dataIndex: "nom",
      render: (text, record) => {
        return (
          <>
            <Space >
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
      dataIndex: "note",
      render: (text, record) => {
        return (
          <>
            <Space direction="vertical">{displayEtat(record.note)}</Space>
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
                    setIsopenStatus(true);
                    dispatch(updateCommande(record._id));
                  }}
                >
                  <FileDoneOutlined style={{ color: "#1890ff" }} /> Générer
                </span>
              </Dropdown.Item>
              <Dropdown.Item>
              <Link
                  to={`/paiement/${record._id}`}
                  onClick={() => {
                    dispatch(getCommandeDetails(record));
                  }}
                >
                  <DollarOutlined />  Payée
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
            </Dropdown.Menu>
          </Dropdown>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <main id="main" class="main bg-light">
        <VenteHeader />
        <div class="pagetitle">
          <div
            style={{ display: "flex", justifyContent: "flex-end" }}
            className="col-lg-12 "
          >
            <Link className="" to="/ajouter_devis">
              <button
                style={{ margin: "0 20px" }}
                type="button"
                className="btn btn-primary btn-sm ml-2 "
              >
                <PlusSquareFilled /> Ajouter facture
              </button>
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
