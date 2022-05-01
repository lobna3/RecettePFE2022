import { getApi, postApi } from "../../utils/apiHelpers";
import {ADD_COMMANDE,GET_COMMANDE_LIST_SUCCESS,ADD_COMMANDE_SUCCESS} from "../actionTypes";



export const addStep = (data) => {
  return {
    type: ADD_COMMANDE,
    payload: data,
  };
};
export const addCommandetApi =
  (data, addToast) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_COMMANDE_SUCCESS,
      });
      let result = await postApi("ajouter_commande", data);
      console.log("Result", result);
      if (result.success) {
        addToast("Commande créer avec succées", { appearance: "success" });
      } else {
        addToast("Erreur c'est produite , ressayer", { appearance: "error" });
      }
   
    } catch (error) {}
  };

export const getCommandeListApi = () => async (dispatch) => {
    try {
      let result = await getApi("commandes");
    
      dispatch({
        type: GET_COMMANDE_LIST_SUCCESS,
        payload:result
      });
    } catch (error) {}
  };