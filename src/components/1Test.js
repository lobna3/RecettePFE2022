<html>
<head>
  <title>FACTURE</title>
  <style>
    body {
      padding: 60px;
      font-family: "Hevletica Neue", "Helvetica", "Arial", sans-serif;
      font-size: 16px;
      line-height: 24px;
    }

    body > h4 {
      font-size: 24px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 60px;
    }

    body > header {
      display: flex;
    }

    body > header > .address-block:nth-child(2) {
      margin-left: 100px;
    }

    .address-block address {
      font-style: normal;
    }

    .address-block > h5 {
      font-size: 14px;
      line-height: 14px;
      margin: 0px 0px 15px;
      text-transform: uppercase;
      color: #aaa;
    }

    .table {
      width: 100%;
      margin-top: 60px;
    }

    .table table {
      width: 100%;
      border: 1px solid #eee;
      border-collapse: collapse;
    }

    .table table tr th,
    .table table tr td {
      font-size: 15px;
      padding: 10px;
      border: 1px solid #eee;
      border-collapse: collapse;
    }

    .table table tfoot tr td {
      border-top: 3px solid #eee;
    }
  </style>
</head>
<body>
  <h4>Facture</h4>
  <header>
    <div class="address-block">
      <h5>ADRESSE FACTURATION</h5>
      <address>
        ${commande.adresseFacturation}<br />
        ${commande.client.nom}
        <br/>
        ${commande.client.prenom}
      </address>
    </div>
    <div class="address-block">
      <h5>ADRESSE LIVRAISON</h5>
      <address>
      ${commande.nFacture}
       ${commande.adresseLivraison}
       ${commande.client.email}
      </address>
    </div>
  </header>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th style="text-align:left;">PRODUIT</th>
          <th>PRIX</th>
          <th>QUANITE</th>
          <th>TAXE</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        ${commande.articles.map(
          (elm) => `  <tr>
        <td style="text-align:left;">${elm.service.titre}</td>
        <td style="text-align:center;">${elm.pu}</td>
        <td style="text-align:center;">${elm.qte}</td>
        <td style="text-align:center;">${elm.taxe}</td>
        <td style="text-align:center;">${elm.prix}</td>
      </tr>`
        )}
     
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2" />
          <td style="text-align:right;"><strong>TOTAL HT</strong></td>
          <td style="text-align:center;">${commande.total}</td>
        </tr>
        <tr>
        <td colSpan="2" />
        <td style="text-align:right;"><strong>TAXES</strong></td>
        <td style="text-align:center;">${commande.taxes}</td>
      </tr>
      <tr>
      <td colSpan="2" />
      <td style="text-align:right;"><strong>REMISE</strong></td>
      <td style="text-align:center;">${commande.remise}</td>
    </tr>
    <tr>
    <td colSpan="2" />
    <td style="text-align:right;"><strong>TOTAL TTC</strong></td>
    <td style="text-align:center;">${commande.totalTtc}</td>
  </tr>
      </tfoot>
    </table>
  </div>
</body>
</html>