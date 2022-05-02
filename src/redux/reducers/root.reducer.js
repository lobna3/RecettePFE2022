import { combineReducers } from "redux";
import clientReducer from "./client.reducer";
import commandeReducer from "./commande.reducer";
import articleReducer from "./article.reducer";

const rootReducer = combineReducers({ 
    client: clientReducer, 
    commande:commandeReducer,
    article:articleReducer,
});
export default rootReducer;

