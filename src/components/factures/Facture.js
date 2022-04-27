import { Menu, Dropdown, message, Typography, Table, Space } from "antd";
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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../config/axios";
import { FactureHeader } from "../RacetteHeader";

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
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="2" icon={<DollarOutlined />}>
      <Link to="/paiement">Paiement</Link>
    </Menu.Item>
    <Menu.Item key="1" icon={<FileDoneOutlined />}>
      <Link to="/">Générer</Link>
    </Menu.Item>
    <Menu.Item key="3" icon={<MailOutlined />}>
      <Link to="/"> Envoyer </Link>
    </Menu.Item>
    <Menu.Item key="2" icon={<AuditOutlined />}>
      <Link to="/">Générer le borderau d'expédition</Link>
    </Menu.Item>
    <Menu.Item key="1" icon={<FormOutlined />}>
      <Link to="/"> Modifier</Link>
    </Menu.Item>
    <Menu.Item key="4" icon={<DeleteOutlined />}>
      <Link to="/"> Supprimer</Link>
    </Menu.Item>
    <Menu.Item key="1" icon={<StopOutlined />}>
      <Link to="/"> Annuler</Link>
    </Menu.Item>
  </Menu>
);

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

export default function Facture() {
  const [selectionType, setSelectionType] = useState("checkbox");

  const columns = [
    {
      title: "N facture",
      dataIndex: "nFacture",
      render: (text, record) => (
        <Space direction="vertical">
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
      title: "Condition",
      dataIndex: "status",
      render: (text, record) => {
        return (
          <>
            <Space direction="condition">
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
      dataIndex: "condition",
      render: (text, record) => {
        return (
          <>
            <Space direction="vertical">
              <Text mark>{record.condition}</Text>
            </Space>
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

  const [devis, setdevis] = useState([]);

  useEffect(() => {
    axios.get("commandes").then((res) => {
      setdevis(res.data);
    });
  }, []);

  return (
    <main id="main" class="main bg-light">
      <FactureHeader />
      <div class="pagetitle">
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
              rowSelection={{ type: selectionType, ...rowSelection }}
              columns={columns}
              dataSource={devis}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
