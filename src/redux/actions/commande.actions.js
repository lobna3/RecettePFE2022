import { getApi, postApi } from "../../utils/apiHelpers";
import {ADD_COMMANDE,GET_COMMANDE_LIST_SUCCESS,} from "../actionTypes";
  
export const addCommandetApi =
  (data, addToast, handleClose) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_COMMANDE,
      });
      let result = await postApi("ajouter_commande", data);
      console.log("Result", result);
      if (result.success) {
        addToast("Commande ajouter avec succées", { appearance: "success" });
      } else {
        addToast("Erreur c'est produite , ressayer", { appearance: "error" });
      }
      handleClose();
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