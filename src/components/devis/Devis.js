import React, { useEffect, useState } from "react";
import { Menu, Dropdown, message, Typography } from "antd";
import {
  PrinterFilled,
  PlusSquareFilled,
  DeleteOutlined,
  FundViewOutlined,
  MailOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Link, useLocation, useMatch } from "react-router-dom";
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
import Swal from "sweetalert2";

const { Text } = Typography;
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.nReference === "Disabled User",
    // Column configuration not to be checked
    nReference: record.nReference,
  }),
};

function handleButtonClick(e) {
  message.info("Click on left button.");
  console.log("click left button", e);
}

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

export default function Devis() {
  const location = useLocation();
  const { addToast } = useToasts();
  const { commandeList } = useSelector((state) => state.commande);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommandesApi());
    console.log("URL", location.pathname);
  }, []);

  const [selectionType, setSelectionType] = useState("checkbox");
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
  const displayRole = (status) => {
    switch (status) {
      case 1:
        return "Facture";
      case 2:
        return "Commandes en cours";
      case 0:
        return "Devis en cours";

      default:
        return "Devis en cours";
    }
  };

  const menu = (
    <>
      {commandeList && commandeList.map((elm) => (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1" icon={<PrinterFilled />}>
            <Link to=""> Imprimer</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FundViewOutlined />}>
            <Link to={`/devis/${elm._id}`}> Visualiser</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<FormOutlined />}>
            <Link to={`/devi/${elm._id}`}> Modifier</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<MailOutlined />}>
            <Link to=""> Envoyer</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<DeleteOutlined />}>
            <span
              type="button"
              onClick={() => {
                Swal.fire({
                  title: "Vous êtes sure de supprimer cet Commande ?",
                  showCancelButton: true,
                  confirmButtonText: `Confirmer`,
                  cancelButtonText: `Annuler`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    dispatch(deleteCommandeApi(elm._id,addToast));
                  }
                });
              }}
            >
              Supprimer
            </span>
          </Menu.Item>
        </Menu>
      ))}
    </>
  );

  const columns = [
    {
      title: "Référence",
      dataIndex: "nReference",
      render: (text, record) => (
        <Space direction="vertical">
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
      title: "Date",
      dataIndex: "dateEmission",
      render: (text, record) => {
        return (
          <>
            <Space direction="vertical">
              <Text strong>{record.dateEmission}</Text>
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
          <Dropdown.Button
            onClick={handleButtonClick}
            overlay={menu}
          ></Dropdown.Button>
        </Space>
      ),
    },
  ];

  return (
    <main id="main" className="main bg-light">
      <ToastContainer position="top-center" />
      <DevisHeader></DevisHeader>

      <div className="pagetitle">
        <div
          style={{ display: "flex", justifyContent: "flex-end" }}
          className="col-lg-12 "
        >
          <Link className="" to="/ajouter_devis1">
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
            marginLeft: 20,
            marginRight: 15,
            marginTop: 0,
            marginBottom: 40,
          }}
        >
          <div className="card-body">
            <Table
              rowSelection={{ type: selectionType, ...rowSelection }}
              columns={columns}
              dataSource={commandeList}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
