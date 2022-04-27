import { Menu, Dropdown, Button, message, Tooltip ,Typography} from 'antd';
import { DownOutlined, FileDoneOutlined ,PlusSquareFilled ,
  MailOutlined,DollarOutlined  } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';
import { Table, Space,Tag } from 'antd';
import axios from '../../config/axios';
import {VenteHeader} from '../RacetteHeader';

const { Text} = Typography;
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.nReference === 'Disabled User',
    // Column configuration not to be checked
    nReference: record.nReference,
  }),
};

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<FileDoneOutlined />}>
      Générer
    </Menu.Item>
    <Menu.Item key="3" icon={<MailOutlined />}>
      Envoyer
    </Menu.Item>
    <Menu.Item key="2" icon={<DollarOutlined />}>
      Payée
    </Menu.Item>
    
  
  </Menu>
);
function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

export default function Vente() {
  const [selectionType, setSelectionType] = useState('checkbox');
  
  const columns = [
    {
      title: 'N Facture',
      dataIndex: 'nFacture',
      render: (text, record) => (
        <Space direction="vertical">
         <Link to="/" target="_blank">{record.nFacture}</Link>
        </Space>
       ),
       sorter: {
        compare: (a, b) => a.nFacture - b.nFacture,
        multiple: 3,}
      
     
    },
    {
      title: 'Client',
      dataIndex: 'nom',
      render: (text, record) => {
        return (
          <>
          <Space direction="vertical">
          <Text type="secondary">{record.client.nom}</Text>
         </Space>
            
          </>
        )
      },
      sorter: {
        compare: (a, b) => a.nom - b.nom,
        multiple: 3,}
     
    
    },
    {
      title: 'Echéance',
      dataIndex: 'dateEcheance',
      render: (text, record) => {
        return (
          <>
          <Space direction="vertical">
          <Text strong>{record.dateEcheance}</Text>
          </Space>
           
          </>
        )
      },
      sorter: {
        compare: (a, b) => a.dateEcheance - b.dateEcheance,
        multiple: 3,}
      
    },
    {
      title: 'Solde',
      dataIndex: 'solde',
      render: (text, record) => {
        return (
          <>
           <Space direction="vertical">
           <Text strong>{record.solde}</Text>
          </Space>
           
          </>
        )},
        sorter: {
          compare: (a, b) => a.solde - b.solde,
          multiple: 3,}
     
    },
    {
      title: 'Total',
      dataIndex: 'total',
      render: (text, record) => {
        return (
          <>
           <Space direction="vertical">
           <Text strong>{record.total}</Text>
          </Space>
           
          </>
        )},
        sorter: {
          compare: (a, b) => a.total - b.total,
          multiple: 3,}
      
     
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (text, record) => {
        return (
          <>
           <Space direction="vertical">
           <Text strong>{record.status}</Text>
          </Space>
           
          </>
        )},
        sorter: {
          compare: (a, b) => a.status - b.status,
          multiple: 3,}
     
    },
    {
      title: 'Etat',
      dataIndex: 'condition',
      render: (text, record) => {
        return (
          <>
          <Space direction="vertical">
          <Text mark>{record.condition}</Text>
          </Space>
           
          </>
        )
      },
      sorter: {
        compare: (a, b) => a.condition - b.condition,
        multiple: 3,}
     
    },
    {
      title: 'Action',
      render: (text, record) => (
 
       <Space   wrap  size="middle">
         <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
         </Dropdown.Button>
        </Space>
      ),
    },
   
  ];
  
  const [devis, setdevis] = useState([])
  
    useEffect(() => {
      axios.get('commandes')
        .then(res => {
          setdevis(res.data)
        })
    }, [])
    
  return (
    
    <main id="main" class="main bg-light">


        <VenteHeader/>
        <div class="pagetitle">

          <div style={{ display: 'flex', justifyContent: 'flex-end' }} className="col-lg-12 ">
            <Link className="" to="/ajouter_devis" >
              <button style={{margin:'0 20px'}} type="button" className="btn btn-primary btn-sm ml-2 "><PlusSquareFilled /> Ajouter facture</button> </Link>
            <button style={{margin:'0 20px'}} type="button" className="btn btn-primary  btn-sm ml-2 "><PlusSquareFilled /> Nouvelle Opération</button>
          </div>
          <br />
        </div>


        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card" style={{ margin: "0 15px 40px 20px" }}>
            <div className="card-body">
              <Table rowSelection={{type: selectionType, ...rowSelection,}} 
              columns={columns} dataSource={devis} />
            </div>
          </div>
        </div>

     




    </main>
  );
}
