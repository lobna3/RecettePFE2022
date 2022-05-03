import { getApi, postApi, deleteApi, updateApi } from "../../utils/apiHelpers";
import {
  ADD_COMMANDE,
  GET_COMMANDE_LIST_SUCCESS,
  ADD_COMMANDE_SUCCESS,
  GET_COMMANDE_LIST,
  UPDATE_COMMANDE,
  GET_DETAILS,
  GET_DETAILS_SUCCESS
} from "../actionTypes";

export const addCommande = () => {
  return {
    type: ADD_COMMANDE,
  };
};

export const addStep = (data) => {
  return {
    type: ADD_COMMANDE,
    payload: data,
  };
};

export const getCommandesList = () => {
  return { 
    type: GET_COMMANDE_LIST 
  };
};

export const getCommandesListSuccess = (data) => {
  return {
    type: GET_COMMANDE_LIST_SUCCESS,
    payload: data,
  };
};

export const updateCommande = (data) => {
  return {
    type: UPDATE_COMMANDE,
    payload: data,
  };
};

export const getCommandesApi = () => async (dispatch) => {
  try {
    dispatch(getCommandesList());
    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let result = await getApi("commandes", config);
    dispatch(getCommandesListSuccess(result));
    console.log("Liste des commandes",result);
  } catch (error) {
    console.log("ERROR", error.message);
  }
};

export const addCommandetApi = (data, addToast) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_COMMANDE_SUCCESS,
    });
    let result = await postApi("ajouter_commande", data);
    console.log("Result", result);
     
    if (result.success) {
      dispatch(getCommandesApi());
      addToast("Commande créer avec succées", { appearance: "success" });
    }  
    else {
      addToast("Erreur c'est produite , ressayer", { appearance: "error" });
    }
  } catch (error) { console.log("ERROR", error.message);}
};

export const getCommandeListApi = () => async (dispatch) => {
  try {
    let result = await getApi("commandes");
    dispatch({
      type: GET_COMMANDE_LIST_SUCCESS,
      payload: result,
    });
    console.log("Liste des commandes",result)
  } catch (error) {
    console.log("ERROR", error.message);
  }
};

export const deleteCommandeApi = (id) => async (dispatch) => {
  try {
    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    // dispatch(addCommande());
    let result = await deleteApi("delete_commande/" + id, config);
    if (result) {
      dispatch(getCommandesApi());
    }
    console.log("Resultat",result);
  } catch (error) {
    console.log("ERROR", error.message);
  }
};

export const getCommandeById = (id) => async (dispatch) => {
  try {
    dispatch(getCommandesList());
    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let result = await getApi("commandeById/" + id, config);
    if (result) {
      dispatch(getCommandesListSuccess(result.result));
    }
    console.log(result);
  } catch (error) {console.log("ERROR", error.message);}
};

export const updateCommandeApi = (body, id) => async (dispatch) => {
  try {
    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    let result = await updateApi("maj_commande/" + id, body, config);
    if (result) {
      dispatch(getCommandesApi());
    }
    console.log(result);
  } catch (error) { console.log("ERROR", error.message);}
};

export const getCommandeDetails = (commandeId) => {
  return {
      type: GET_DETAILS, 
      payload:commandeId
  }
};

export const getCommandeDetailsSuccess = (payload) => {
  return {
      type: GET_DETAILS_SUCCESS,
      payload: payload
  }
};

export const getCommandeDetailsApi = (commandeId) => async dispatch => {

  try {
      let config = {
          headers: {
              'Authorization': localStorage.getItem('token')
          }
      }
      dispatch(getCommandeDetails(commandeId));
      let result = await getApi("commandeById/" + commandeId, config);
      if (result.success) {
          console.log("RESULT DETAILS", result);
          if(result.details==null)
          {
              dispatch(getCommandeDetailsSuccess([]));
          }else 
          {
              dispatch(getCommandeDetailsSuccess(result.details));
          }
          
      }

  } catch (error) {
    console.log("ERROR", error.message);
  }
}