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
  <div className="card">
  <div className="card-header">
    <strong>NFacture: </strong> ${commandeDetails.nFacture}
    <span className="float-right">
      <strong>Facturer:</strong>
      ${commandeDetails.dateEmission}
    </span>
    <span className="float-right">
      <strong>Status:</strong>${commandeDetails.status}
    </span>
  </div>
  </div>
  </div>
  </header>
  <div className="card-body">
    <div className="row">
      <div className="col-md-6">
        <h6 className="mb-3"></h6>
        <div>
          <strong>Arsela</strong>
        </div>
        <div> Boulevard Khalifa Karoui</div>
        <div> Sahloul 4054 Sousse, Tunisie</div>
        <div>Email: info@arsela.com</div>
        <div>Phone: (+216) 26 314 922</div>
      </div>
      <div className="col-md-6">
        <h6 className="mb-3"></h6>
        <div>
          <strong>Client</strong>
        </div>
        <div>
          Attn:
          ${commandeDetails.client.nom}
          ${commandeDetails.client.prenom}
        </div>
        <div>
          ${commandeDetails.client.activite}
        </div>
        <div>
          Email:
          ${commandeDetails.client.email}
        </div>
        <div>
          Phone:
          ${commandeDetails.client.telephone}
        </div>
      </div>
    </div>
    </div>
    <div class="table">
    <table>
      <thead>
        <tr>
          <th style="text-align:left;">PRODUIT</th>
          <th style="text-align:left;">DESCRIPTION</th>
          <th>PRIX U</th>
          <th>QUANITE</th>
          <th>TAXE</th>
          <th>PRIX</th>
        </tr>
      </thead>
      <tbody>
        ${commandeDetails.articles.map(
          (elm) => `  <tr>
        <td style="text-align:left;">${elm.service.titre}</td>
        <td style="text-align:left;">${elm.service.description}</td>
        <td style="text-align:center;">${elm.pu}DT</td>
        <td style="text-align:center;">${elm.qte}</td>
        <td style="text-align:center;">${elm.taxe}</td>
        <td style="text-align:center;">${elm.prix}DT</td>
      </tr>`
        )}
     
      </tbody>
      
    </table>
   
    <div className="row">
     
        <table class="table table-clear">
          <tbody>
            <tr>
              <td class="left">
                <strong>SubTotal</strong>
              </td>
              <td class="right"> ${commandeDetails.total} DT</td>
            </tr>
            <tr>
              <td class="left">
                <strong>Remise (20%)</strong>
              </td>
              <td class="right"> ${commandeDetails.remise} DT</td>
            </tr>
            <tr>
              <td class="left">
                <strong>Tax(10%)</strong>
              </td>
              <td class="right">${commandeDetails.taxes} DT</td>
            </tr>
            <tr>
              <td class="left">
                <strong>Total</strong>
              </td>
              <td class="right">
                <strong> ${commandeDetails.totalTtc}DT</strong>
              </td>
            </tr>
          </tbody>
        </table>
     
    <div className="card">
      <p>Note:${commandeDetails.note}</p>
    </div>
  </div>
  
  </div>
  
  