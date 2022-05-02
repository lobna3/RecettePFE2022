import { getApi, postApi,deleteApi,updateApi } from "../../utils/apiHelpers";
import {ADD_COMMANDE,GET_COMMANDE_LIST_SUCCESS,ADD_COMMANDE_SUCCESS,
   GET_COMMANDE_LIST, UPDATE_COMMANDE} from "../actionTypes";

export const addCommande = () => {
  return {
      type: ADD_COMMANDE,
  }
};

export const getCommande = () => {
  return {
      type: GET_COMMANDE_LIST
  }
};

export const updateCommande = (data) => {
  return {
      type: UPDATE_COMMANDE,
      payload: data
  }
}

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
    } catch (error) { console.log("ERROR", error.message)}
  };

  export const deleteCommande = (id) => async dispatch => {
    try {
        dispatch(addCommande());
        let result = await deleteApi('delete_commande/' + id);
        if (result) {
            dispatch(getCommandeListApi());
        }
    } catch (error) {console.log("ERROR", error.message)
     
    }

};

export const updateCommandeApi = (body, id) => async dispatch => {

  try {
      let result = await updateApi('maj_commande/' + id, body);
      if (result) {
          dispatch(getCommandeListApi());
      }
  } catch (error) {

  }
}



