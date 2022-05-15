import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommandesApi,
  deleteCommandeApi,
  updateCommande
} from "../../redux/actions/commande.actions";
import { getCommandeDetails } from "../../redux/actions/commande.details.actions";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import Swal from "sweetalert2";
import { Typography, Table, Space } from "antd";
import { Dropdown } from "react-bootstrap";
import {
  DownOutlined,
  PrinterFilled,
  PlusSquareFilled,
  DeleteOutlined,
  FundViewOutlined,
  FormOutlined,
  FileDoneOutlined 
} from "@ant-design/icons";
import { CommandeHeader } from "../RacetteHeader";
import ModStatus from "../devis/ModStatus";
import moment from "moment";

const { Text } = Typography;

export default function Commande() {
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  const [isOpenStatus, setIsopenStatus] = useState(false);
  const { commandeList } = useSelector((state) => state.commande);
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
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
      return <span className="badge bg-info">{etat}</span>;
    }
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
      title: "Montant Récurrence",
      dataIndex: "dateEcheance",
      render: (text, record) => {
        return (
          <>
            <Space direction="vertical">
              <Text strong> {moment(record.dateEcheance).format("DD-MM-YYYY")}</Text>
            </Space>
          </>
        );
      },
      sorter: {
        compare: (a, b) => a.recurrente - b.recurrente,
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
                    setIsopenStatus(true);
                    dispatch(updateCommande(record._id));
                  }}
                >
                  <FileDoneOutlined style={{ color: "#1890ff" }} /> Générer
                </span>
              </Dropdown.Item>
              <Dropdown.Item>
              <Link
                  to={`/imprimer/${record._id}`}
                  onClick={() => {
                    dispatch(getCommandeDetails(record));
                  }}
                >
                  <PrinterFilled /> Imprimer
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={`/devis/${record._id}`}>
                  <FundViewOutlined /> Visualiser
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
                <span className="text-primary">
                  <DownOutlined style={{ color: "#1890ff" }} /> Parcours
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
  useEffect(() => {
    dispatch(getCommandesApi("Commande en cours"));
  }, []);
  const imprimer_page = () => {
    window.print();
  };

  return (
    <div><main id="main" className="main bg-light">
    <CommandeHeader />

    <div className="pagetitle">
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
            <PlusSquareFilled /> Lancer une commande
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
    <ModStatus
    isOpen={isOpenStatus}
    handleClose={() => {
      setIsopenStatus(false);
    }}
  /></div>
    
  );
}
