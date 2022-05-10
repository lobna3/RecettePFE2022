import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCommandeListApi } from "../../redux/actions/commande.actions";
import { Menu, Typography, Table, Space } from "antd";
import { Dropdown } from "react-bootstrap";
import {
  FileDoneOutlined,
  PlusSquareFilled,
  MailOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { VenteHeader } from "../RacetteHeader";
import EnvoyerEmail from "../devis/EnvoyerEmail";
const { Text } = Typography;

export default function Vente() {
  const [isOpen, setIsopen] = useState(false);
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  const dispatch = useDispatch();
  const { commandeList } = useSelector((state) => state.commande);
  useEffect(() => {
    dispatch(getCommandeListApi());
  }, []);
  const displayEtat = (etat) => {
    if (etat == "NonPayé") {
      return <span className="badge bg-danger">{etat}</span>;
    } else if (etat == "Payé") {
      return <span className="badge bg-success">{etat}</span>;
    } else {
      return <span className="badge bg-info">{etat}</span>;
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
            <Space direction="vertical">
              <Text type="secondary">{record.client.nom}</Text>
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
              <Text strong>{record.dateEcheance}</Text>
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
              <Text strong>{record.solde}</Text>
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
              <Text strong>{record.total}</Text>
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
      title: "Status",
      dataIndex: "status",
      render: (text, record) => {
        return (
          <>
            <Space direction="vertical">
              <Text strong>{record.status}</Text>
            </Space>
          </>
        );
      },
      sorter: {
        compare: (a, b) => a.status - b.status,
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
                <Link to="">
                  <FileDoneOutlined />  Générer
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/paiement">
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
    </div>
  );
}
