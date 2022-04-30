import {BsFillCartFill,
  BsFillFileEarmarkMedicalFill,
  BsFillGearFill,
  BsBank2,
  BsCashCoin,
  BsSortUp
} from 'react-icons/bs';
import {FaFileInvoiceDollar,FaDonate,FaBalanceScaleLeft,
  //FaArrowRight
} from 'react-icons/fa';
import {MdAssignmentInd} from 'react-icons/md';
import { HomeOutlined} from '@ant-design/icons';
import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = () => {

    return (
<div>
      
<aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    
   <li className="nav-item">
    <Link className="nav-link " to="/">
      <i><HomeOutlined /></i>
      <span>Tableau du bord</span>
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link collapsed" to="/recette">
      <i><FaBalanceScaleLeft /></i>
      <span>Recette</span>
    </Link>
  </li>
  {/*<li className="nav-item">
        <Link className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" to="/Recette">
          <i><FaBalanceScaleLeft/></i><span>Recette</span><i className="bi bi-chevron-down ms-auto"></i>
        </Link>
      <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <Link to="/Recette">
              <i><FaArrowRight/></i><span>Recette</span>
            </Link>
          </li>
          <li>
            <Link to="/devis">
              <i><FaArrowRight/></i><span>Devis en cours</span>
            </Link>
          </li>
          <li>
            <Link to="/commandes">
              <i><FaArrowRight/></i><span>Commandes en cour</span>
            </Link>
          </li>
          <li>
            <Link to="/factures">
              <i><FaArrowRight/></i><span>Factures</span>
            </Link>
          </li>
          <li>
            <Link to="/ventes">
              <i><FaArrowRight/></i><span>Ventes</span>
            </Link>
          </li>
          <li>
            <Link to="/brouillon">
              <i><FaArrowRight/></i><span>Bruoillon</span>
            </Link>
          </li>
          
         
        </ul>
  </li> */}

  

  <li className="nav-item">
    <Link className="nav-link collapsed" to="">
      <i><FaDonate/></i>
      <span>Projets</span>
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link collapsed" to="">
      <i><BsFillFileEarmarkMedicalFill/></i>
      <span>Contrat</span>
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link collapsed" to="">
      <i><MdAssignmentInd/></i>
      <span>Bénéficiaires</span>
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link collapsed" to="">
      <i><BsSortUp/></i>
      <span>Dépenses</span>
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link collapsed" to="">
      <i><FaFileInvoiceDollar/></i>
      <span>Mes Opérations</span>
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link collapsed" to="">
      <i><BsCashCoin/></i>
      <span>Trésorerie</span>
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link collapsed" to="/">
      <i><BsFillCartFill/></i>
      <span>Produit/Services</span>
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link collapsed" to="">
      <i><BsBank2/></i>
      <span>Banque</span>
    </Link>
  </li>
  
  <li className="nav-item">
    <Link className="nav-link collapsed" to="">
      <i><BsFillGearFill/></i>
      <span>Configuration</span>
    </Link>
  </li>


  </ul>
</aside>
</div>
    )
};

export default SideBar;