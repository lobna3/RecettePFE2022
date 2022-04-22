import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" >
        <Link class="navbar-brand" to="/recette"></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" style={{margin: '0 200px'}}>
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/recette">Recette </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/devis">Devis en cours </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/commandes">Commandes en cours</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/factures">Facture</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/ventes">Ventes</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/brouillon">Brouillon</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}