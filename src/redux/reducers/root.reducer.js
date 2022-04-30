import { combineReducers } from "redux";
import clientReducer from "./client.reducer";
import commandeReducer from "./commande.reducer";

const rootReducer = combineReducers({ client: clientReducer, commande:commandeReducer });
export default rootReducer;

