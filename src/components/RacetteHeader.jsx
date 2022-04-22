import Menu from './Menu';
import { Breadcrumb } from 'antd';
import { HomeOutlined} from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Link, } from 'react-router-dom';
const { Search } = Input;

export default () => {
    return (
        <>
            <Menu />
            <br/>
            <BottomHeader />
        </>
    )
}

export const BottomHeader = () => {
    return (
        <>
        <br/>
         <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 20px'}} className="header_bottom">
            <Breadcrumb>
                <Breadcrumb.Item href="">
                  
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                   
                    <span>Home</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Dashbord</Breadcrumb.Item>
            </Breadcrumb>
            <div className="header_bottom_rigth">
            <Space direction="vertical">
           <Search placeholder="input search text" onSearch={Search} style={{ width: 250 }} />
           </Space>
            </div>
          
        </div>
        <br/>
        </>
       
    )
}

export const RecettesHeader = () => {
    return (
        <>
        <Menu />
            <br/>
        <div style={{ display: 'flex', justifyContent: 'space-between',margin: '0 20px' }} className="header_bottom">
            <Breadcrumb>
                <Breadcrumb.Item href="">
                  
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                   
                    <span>Recette</span>
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="header_bottom_rigth">
            <Space direction="vertical">
           <Search placeholder="input search text" onSearch={Search} style={{ width: 250 }} />
           </Space>
            </div>
          
        </div>
        <br/>
        </>
        
    )
}

export const DevisHeader = () => {
    return (
        <>
        <Menu />
            <br/>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 20px' }} className="header_bottom">
            <Breadcrumb>
                <Breadcrumb.Item href="">
                  
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                   
                    <span>Recette</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Devis en cours</Breadcrumb.Item>
            </Breadcrumb>
            <div className="header_bottom_rigth">
            <Space direction="vertical">
           <Search placeholder="input search text" onSearch={Search} style={{ width: 250 }} />
           </Space>
            </div>
          
        </div>
        <br/>
        </>
        
    )
}

export const CommandeHeader = () => {
    return (
        <>
        <Menu />
            <br/>
        <div style={{ display: 'flex', justifyContent: 'space-between',margin: '0 20px' }} className="header_bottom">
            <Breadcrumb>
                <Breadcrumb.Item href="">
                  
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                   
                    <span>Recette</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Commande en cours</Breadcrumb.Item>
            </Breadcrumb>
            <div className="header_bottom_rigth">
            <Space direction="vertical">
           <Search placeholder="input search text" onSearch={Search} style={{ width: 250 }} />
           </Space>
            </div>
          
        </div>
        <br/>
        </>
        
    )
}

export const FactureHeader = () => {
    return (
        <>
        <Menu />
            <br/>
        <div style={{ display: 'flex', justifyContent: 'space-between',margin: '0 20px' }} className="header_bottom">
            <Breadcrumb>
                <Breadcrumb.Item href="">
                  
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                   
                    <span>Recette</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Facture</Breadcrumb.Item>
            </Breadcrumb>
            <div className="header_bottom_rigth">
            <Space direction="vertical">
           <Search placeholder="input search text" onSearch={Search} style={{ width: 250 }} />
           </Space>
            </div>
          
        </div>
        <br/>
        </>
        
    )
}

export const VenteHeader = () => {
    return (
        <>
        <Menu />
            <br/>
        <div style={{ display: 'flex', justifyContent: 'space-between',margin: '0 20px' }} className="header_bottom">
            <Breadcrumb>
                <Breadcrumb.Item href="">
                  
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                   
                    <span>Recette</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Vente</Breadcrumb.Item>
            </Breadcrumb>
            <div className="header_bottom_rigth">
            <Space direction="vertical">
           <Search placeholder="input search text" onSearch={Search} style={{ width: 250 }} />
           </Space>
            </div>
          
        </div>
        <br/>
        </>
        
    )
}

export const BrouillonHeader = () => {
    return (
        <>
        <Menu />
            <br/>
        <div style={{ display: 'flex', justifyContent: 'space-between',margin: '0 20px' }} className="header_bottom">
            <Breadcrumb>
                <Breadcrumb.Item href="">
                  
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                   
                    <span>Recette</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Brouillon</Breadcrumb.Item>
            </Breadcrumb>
            <div className="header_bottom_rigth">
            <Space direction="vertical">
           <Search placeholder="input search text" onSearch={Search} style={{ width: 250 }} />
           </Space>
            </div>
          
        </div>
        <br/>
        </>
        
    )
}

export const AjoutDHeader = () => {
    return (
        <>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'space-between',margin: '0 20px' }} className="header_bottom">
            <Breadcrumb>
                <Breadcrumb.Item href="">
                  
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                   
                   <Link to="/Recette"><span>Recette</span></Link> 
                </Breadcrumb.Item>
                <Breadcrumb.Item>Nouvelle Devis</Breadcrumb.Item>
            </Breadcrumb>
            <div className="header_bottom_rigth">
            <Space direction="vertical">
           <Search placeholder="input search text" onSearch={Search} style={{ width: 250 }} />
           </Space>
            </div>
          
        </div>
        <br/>
        </>
        
    )
}


