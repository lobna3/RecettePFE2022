import { combineReducers } from "redux";
import clientReducer from "./client.reducer";
import commandeReducer from "./commande.reducer";
import articleReducer from "./article.reducer";
import suivieReducer from "./suivie.reducer";
import paiementReducer from "./paiement.reducer";
import commandeDetailsReducer from "./commande.details.reducer";
import adresseReducer from "./adresse.reducer";
import produitReducer from "./produit.reducer";

const rootReducer = combineReducers({ 
    client: clientReducer, 
    commande:commandeReducer,
    article:articleReducer,
    suivie:suivieReducer,
    paiement:paiementReducer,
    detailsCommande:commandeDetailsReducer,
    produit:produitReducer,
    adresse:adresseReducer
});
export default rootReducer;

