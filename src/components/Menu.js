import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <Link className="navbar-brand" to="/recette"></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{margin: '0 200px',marginTop:10}}>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/recette">Recette </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/devis">Devis en cours </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/commandes">Commandes en cours</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/factures">Facture</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ventes">Ventes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/brouillon">Brouillon</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}