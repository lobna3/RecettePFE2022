import React, 
{ 
  //Component 
} from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";

export default function AjoutDevis(){   
return(
   
   
     
     
<main id="main" class="main">
  <div class="pagetitle">
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">Nouvelle Devis</li>
        </ol>
      </nav>
  </div>

  <div className="row"> 
          <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
              <form className="forms-sample">
                
                <div className="row">
                 <div className="col-md-4">
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Date émission </label>
                    <DatePicker className="form-control w-100"/>
                  </Form.Group>
                 </div>
                 <div className="col-md-4">
                 <Form.Group>
                    <label htmlFor="exampleInputUsername1"> Date echéance</label>
                    <DatePicker className="form-control w-100" />
                  </Form.Group>
                 </div>
                 <div className="col-md-4">
                 <Form.Group>
                    <label htmlFor="exampleInputEmail1">Condition</label>
                    <select className="form-control">
                            <option>Personnalisé</option>
                            <option>échéance à la fin du mois</option>
                            <option>échéance à la fin du mois prochain</option>
                          </select>
                  </Form.Group>
                 </div>
                </div>

                <hr class="my-3"></hr>

                <div className="row grid-margin stretch-card">
                <div className="">
              <div className="">
                <p>Facture N</p>
                <form className="form-inline">
                <button type="button" className="btn btn-gradient-info btn-">Auto</button>
                  <button type="button" className="btn btn-outline-info btn-">Manuel</button>
                  <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                  <Form.Control  type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="0001" />
                  <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
                </form>
              </div>
            </div>
                </div>

                <hr class="my-3"></hr>

                <div className="row">
                  <div className="col-md-6">
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Client</label>
                    <select className="form-control">
                            <option></option>
                            
                          </select>
                  </Form.Group>
                  </div>
                  <div className="col-md-6">
                  <Form.Group>
                    <label htmlFor="exampleInputPassword1">N de référence</label>
                    <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="" />
                  </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                  <Form.Group>
                    <label htmlFor="exampleInputPassword1">Adresse de facturation</label>
                    <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="Tunis, Sousse" />
                  </Form.Group>
                  </div>
                  <div className="col-md-6">
                  <Form.Group>
                    <label htmlFor="exampleInputPassword1">Adresse de livraison</label>
                    <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="Tunis, Sousse..." />
                  </Form.Group>
                  </div>
                </div>

                <hr class="my-3"></hr>

                <div className="row">
                <button type="button" className="btn btn-outline-primary  btn-block"><i className="mdi mdi-plus"></i>Ajouter un  article  </button>
                <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                <div className="card-body">
                <div className="table-striped">
                  <table className="table">
                    <thead className="bg-light">
                      <tr>
                        <th>Produit / Services</th>
                        <th>Qte</th>
                        <th>P.U</th>
                        <th>Taxes</th>
                        <th>Prix</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>  
                            <Form.Group>
                    <label htmlFor="exampleInputEmail1"></label>
                    <select className="form-control">
                            <option>Produit1</option>
                            
                          </select>
                            </Form.Group>
                        </td>
                        <td> <Form.Control type="password" className="form-control" id="" placeholder="2" /></td>
                        <td> <Form.Control type="password" className="form-control" id="" placeholder="" /></td>
                        <td> <Form.Control type="password" className="form-control" id="" placeholder="20%" /></td>
                        <td><Form.Control type="password" className="form-control" id="" placeholder="2DT"/></td>
                      </tr>
                      <tr>
                        <td>
                             <Form.Group>
                    <label htmlFor="exampleInputEmail1"></label>
                    <select className="form-control">
                            <option>Produit2</option>
                            
                          </select>
                             </Form.Group>

                        </td>
                        <td> <Form.Control type="password" className="form-control" id="" placeholder="2"/></td>
                        <td> <Form.Control type="password" className="form-control" id="" placeholder=""/></td>
                        <td> <Form.Control type="password" className="form-control" id="" placeholder="20%"/></td>
                        <td><Form.Control type="password" className="form-control" id="" placeholder="2DT"/></td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Group>
                    <label htmlFor="exampleInputEmail1"></label>
                    <select className="form-control">
                            <option>Produit3</option>
                            
                          </select>
                          </Form.Group>

                        </td>
                        <td> <Form.Control type="password" className="form-control" id="" placeholder="2" /></td>
                        <td> <Form.Control type="password" className="form-control" id="" placeholder="" /></td>
                        <td> <Form.Control type="password" className="form-control" id="" placeholder="20%" /></td>
                        <td><Form.Control type="password" className="form-control" id="" placeholder="2DT"/></td>
                      </tr>
                     
                    </tbody>
                  </table>
                  <p></p>
                  <table className="ml-auto">
                    <tr><td>Total:</td><td><Form.Control type="password" className="form-control" id="" placeholder="20.000TND" /></td></tr>
                    <tr><td>Remise:</td> <td><Form.Control type="password" className="form-control" id="" placeholder="" /></td></tr>
                    <tr><td>Taxes:</td><td><Form.Control type="password" className="form-control" id="" placeholder="" /></td></tr>
                    <hr></hr>
                    <tr><td>Total TTC:</td><td><Form.Control type="password" className="form-control" id="" placeholder="20.000TND" /></td></tr>
                    <tr><td>Payé:</td><td><Form.Control type="password" className="form-control" id="" placeholder="-0.000" /></td></tr>
                    <tr><td>Solde:</td><td><Form.Control type="password" className="form-control" id="" placeholder="20.000TND" /></td></tr>
                  </table>
                </div>
              </div>
            </div>
         </div>
                </div>
               
               <div className="row">
              <div className="col-md-12  grid-margin stretch-card">
                <div className="card">
                  <div className="card-body bg-light">
                    <div className="row">
                      <div className="col-md-12 d-flex align-items-right">
                        <div className="d-flex flex-row align-items-right">
                        <button type="button" className="btn btn-gradient-info btn-fw">Payé</button>
                        </div>
                        <div className="d-flex flex-row align-items-right ml-auto">
                          <table>
                            <tr>
                              <td><p className="mb-0 ml-1 text-center"> Remise</p></td>
                            </tr>
                            <tr>
                            <td><p className="mb-0 ml-1"><td><Form.Control type="password" className="form-control" id="" placeholder="75.000DT" /></td></p></td>
                            </tr>
                          </table>
                        </div>
                        <div className="d-flex flex-row align-items-right ml-auto">
                        <table>
                            <tr>
                              <td><p className="mb-0 ml-1 text-center"> Taxes</p></td>
                            </tr>
                            <tr>
                            <td><p className="mb-0 ml-1"><td><Form.Control type="password" className="form-control" id="" placeholder="25.000DT" /></td></p></td>
                            </tr>
                          </table>
                        </div>
                        <div className="d-flex flex-row align-items-right ml-auto">
                        <table>
                            <tr>
                              <td><p className="mb-0 ml-1 text-center">Total</p></td>
                            </tr>
                            <tr>
                            <td><p className="mb-0 ml-1"><td><Form.Control type="password" className="form-control" id="" placeholder="95.000DT" /></td></p></td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               </div>
                
                
              </form>
           </div>
             
           </div>
           
          </div>

          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="template-demo">
                <div class="d-grid gap-2 mt-3">
                <button class="btn btn-primary" type="button">Visualiser</button>
                 </div>
                 <div class="d-grid gap-2 mt-3">
                <button class="btn btn-success" type="button">Enregistrer dans le brouillon</button>
                </div>
                <div class="d-grid gap-2 mt-3">
                <button class="btn btn-outline-primary" type="button">Valider et générer</button>
              </div>
                  
                  <p></p>
                  <p>Parmétre de facture  <i className="mdi mdi-settings  mdi-18px"></i></p>
                  <hr></hr>
              
                  <div class="form-check form-switch">
                      <label class="form-check-label" for="flexSwitchCheckChecked">Adresse de Facturation</label>
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
                     
                    </div>

                    <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked">Adresse de Livraison</label>
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
                     
                    </div>
                        
                     
               
                    <label htmlFor="exampleTextarea1"></label>
                    <textarea className="form-control" id="exampleTextarea1" rows="3" placeholder="Note"></textarea>
                  
                
                    <label htmlFor="exampleTextarea1"></label>
                    <textarea className="form-control" id="exampleTextarea1" rows="3" placeholder="Condition générale"></textarea>
                  
                </div>
              </div>
            </div>
          </div>
 
   
         
          </div>
      
   
</main>
    );
}