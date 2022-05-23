import { combineReducers } from "redux";
import clientReducer from "./client.reducer";
import commandeReducer from "./commande.reducer";
import articleReducer from "./article.reducer";
import suivieReducer from "./suivie.reducer";
import paiementReducer from "./paiement.reducer";
import commandeDetailsReducer from "./commande.details.reducer";
import adresseReducer from "./adresse.reducer";
import produitReducer from "./produit.reducer";
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({ 
    client: clientReducer, 
    commande:commandeReducer,
    article:articleReducer,
    suivie:suivieReducer,
    paiement:paiementReducer,
    detailsCommande:commandeDetailsReducer,
    produit:produitReducer,
    adresse:adresseReducer,
    auth: authReducer,
     errors: errorsReducer,
     profiles: profileReducer
});
export default rootReducer;

