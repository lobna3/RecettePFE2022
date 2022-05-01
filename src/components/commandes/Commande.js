import { Menu, Dropdown, Button, message, Tooltip, Typography } from "antd";
import {
  DownOutlined,
  PrinterFilled,
  PlusSquareFilled,
  DeleteOutlined,
  FundViewOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Space, Tag } from "antd";
import axios from "../../config/axios";
import { CommandeHeader } from "../RacetteHeader";
import { useDispatch, useSelector } from "react-redux";
import { getCommandeListApi } from "../../redux/actions/commande.actions";

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

export default function Commande() {
  const [selectionType, setSelectionType] = useState("checkbox");
  const displayEtat = (etat) => {
    if (etat== "Refusé") {
      return <span className="badge bg-danger">{etat}</span>;
    } else if (etat == "Accepté") {
      return <span className="badge bg-success">{etat}</span>;
    } 
    else if (etat == "En attente") {
      return <span className="badge bg-warning">{etat}</span>;
    } 
    else if (etat == "Annuler") {
      return <span className="badge bg-secondary">{etat}</span>;
    } 
    else if (etat == "Arrivé à l'échéance") {
      return <span className="badge bg-primary">{etat}</span>;
    } 
    else {
      return <span className="badge bg-info">{etat}</span>;
    }
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<PrinterFilled />}>
        <Link to="/">Imprimer</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<FundViewOutlined />}>
        <Link to="/detail_commande/${id}">Visualiser</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<DownOutlined />}>
        <Link to="/">Parcours</Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<DeleteOutlined />}>
        <Link to="/">Supprimer</Link>
      </Menu.Item>
    </Menu>
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
      title: "Montant Récurrence",
      dataIndex: "recurrente",
      render: (text, record) => {
        return (
          <>
            <Space direction="vertical">
              <Text strong>{record.recurrente}</Text>
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
            <Space direction="vertical">
            {displayEtat(record.etat)}
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

  const { commandeList } = useSelector((state) => state.commande);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommandeListApi());
  }, []);

  return (
    <main id="main" className="main bg-light">
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
              dataSource={commandeList}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
