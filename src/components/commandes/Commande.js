import { Menu, Dropdown, Button, message, Tooltip ,Typography} from 'antd';
import { DownOutlined, PrinterFilled ,PlusSquareFilled 
  ,DeleteOutlined ,FundViewOutlined,MailOutlined  } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';
import { Table, Space,Tag } from 'antd';
import axios from '../../config/axios';
import {CommandeHeader} from '../RacetteHeader';

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
    <Menu.Item key="1" icon={<PrinterFilled />}>
      Imprimer
    </Menu.Item>
    <Menu.Item key="2" icon={<FundViewOutlined />}>
      Visualiser
    </Menu.Item>
    <Menu.Item key="3" icon={<MailOutlined />}>
      Envoyer
    </Menu.Item>
    <Menu.Item key="4" icon={<DeleteOutlined />}>
      Supprimer
    </Menu.Item>
  </Menu>
);

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

export default function Commande() {
  const [selectionType, setSelectionType] = useState('checkbox');
  
  const columns = [
    {
      title: 'Référence',
      dataIndex: 'nReference',
      render: (text, record) => (
        <Space direction="vertical">
         <Link to="/" target="_blank">{record.nReference}</Link>
        </Space>
       ),
       sorter: {
        compare: (a, b) => a.nReference - b.nReference,
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
      title: 'Email',
      dataIndex: 'email',
      render: (text, record) => {
        return (
          <>
          <Space direction="vertical">
          <Text type="secondary">{record.client.email}</Text>
          </Space>
           
          </>
        )
      },
      sorter: {
        compare: (a, b) => a.email - b.email,
        multiple: 3,}
      
    },
    {
      title: 'NTel',
      dataIndex: 'telephone',
      render: (text, record) => {
        return (
          <>
           <Space direction="vertical">
           <Text strong>{record.client.telephone}</Text>
          </Space>
           
          </>
        )},
        sorter: {
          compare: (a, b) => a.telephone - b.telephone,
          multiple: 3,}
     
    },
    {
      title: 'Montant',
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
      title: 'Montant Récurrence',
      dataIndex: 'recurrente',
      render: (text, record) => {
        return (
          <>
           <Space direction="vertical">
           <Text strong>{record.recurrente}</Text>
          </Space>
           
          </>
        )},
        sorter: {
          compare: (a, b) => a.recurrente - b.recurrente,
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
    
    <main id="main" class="main">
         
      <CommandeHeader/>
    
        <div class="pagetitle">

          <div style={{ display: 'flex', justifyContent: 'flex-end' }} className="col-lg-12 ">
            <Link className="" to="/ajouter_devis" >
              <button style={{margin:'0 20px'}} type="button" className="btn btn-primary btn-sm ml-2 "><PlusSquareFilled /> Lancer une commande</button> </Link>
            <button style={{margin:'0 20px'}} type="button" className="btn btn-primary  btn-sm ml-2 "><PlusSquareFilled /> Nouvelle Opération</button>
          </div>
          <br />
        </div>


        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <Table rowSelection={{type: selectionType, ...rowSelection,}} 
              columns={columns} dataSource={devis} />
            </div>
          </div>
        </div>

 




    </main>
  );
}

