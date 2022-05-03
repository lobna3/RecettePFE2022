import { combineReducers } from "redux";
import clientReducer from "./client.reducer";
import commandeReducer from "./commande.reducer";
import articleReducer from "./article.reducer";
import suivieReducer from "./suivie.reducer";
import paiementReducer from "./paiement.reducer";


const rootReducer = combineReducers({ 
    client: clientReducer, 
    commande:commandeReducer,
    article:articleReducer,
    suivie:suivieReducer,
    paiement:paiementReducer,
    
});
export default rootReducer;

