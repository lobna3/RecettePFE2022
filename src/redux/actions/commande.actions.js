import { getApi, postApi, deleteApi, updateApi } from "../../utils/apiHelpers";
import {
  ADD_COMMANDE,
  GET_COMMANDE_LIST_SUCCESS,
  ADD_COMMANDE_SUCCESS,
  GET_COMMANDE_LIST,
  UPDATE_COMMANDE,
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
    type: GET_COMMANDE_LIST,
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

export const getCommandesApi = (status) => async (dispatch) => {
  try {
    dispatch(getCommandesList());
    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let result = await getApi("commandes", config);
    if (result) {
      result = result.filter((t) => t.status === status);
      dispatch(getCommandesListSuccess(result));
    }
    console.log("Liste des commandes:", result, "Status de commande:", status);
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
      //dispatch(getCommandesApi());
      addToast("Commande créer avec succées", { appearance: "success" });
    } else {
      addToast("Erreur c'est produite , ressayer", { appearance: "error" });
    }
  } catch (error) {
    console.log("ERROR", error.message);
  }
};

export const addFacturetApi = (data, addToast) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_COMMANDE_SUCCESS,
    });
    let result = await postApi("ajouter_facture", data);
    console.log("Result", result);

    if (result.success) {
      //dispatch(getCommandesApi());
      addToast(" Facture créer avec succées", { appearance: "success" });
    } else {
      addToast("Erreur c'est produite , ressayer", { appearance: "error" });
    }
  } catch (error) {
    console.log("ERROR", error.message);
  }
};

export const getCommandeListApi = () => async (dispatch) => {
  try {
    let result = await getApi("commandes");
    dispatch({
      type: GET_COMMANDE_LIST_SUCCESS,
      payload: result,
    });
    console.log("Liste des commandes", result);
  } catch (error) {
    console.log("ERROR", error.message);
  }
};

export const deleteCommandeApi = (id, addToast) => async (dispatch) => {
  try {
    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    // dispatch(addCommande());
    let result = await deleteApi("delete_commande/" + id, config);
    if (result) {
      dispatch(getCommandesApi("Devis"));
      addToast("Commande supprimer avec succées", { appearance: "success" });
    } else {
      addToast("Erreur c'est produite , ressayer", { appearance: "error" });
    }
    console.log("Resultat", result);
  } catch (error) {
    console.log("ERROR", error.message);
  }
};

export const getCommandeByUser = (id) => async (dispatch) => {
  try {
    dispatch(getCommandesList());
    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let result = await getApi("commandeById/" + id, config);
    if (result) {
      dispatch(getCommandesListSuccess(result));
    }

    console.log("details commandes", result);
  } catch (error) {
    console.log("ERROR", error.message);
  }
};

export const updateCommandeApi = (data, id,addToast) => async (dispatch) => {
  try {
    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
   

    let result = await updateApi("maj_commande/" + id, data, config);
    if (result) {
     //dispatch(getCommandesApi());
    
     addToast("Mise à jour effectuées avec succées", { appearance: "success" });
    }else {
      addToast("Erreur c'est produite , ressayer", { appearance: "error" });
    }
    console.log("Resultat",result);
  } catch (error) {
    console.log("ERROR", error.message);
  }
};

export const updateCommandeSatausApi = (data, id,addToast) => async () => {
  try {
    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
   
    let result = await updateApi("mod_status/" + id, data, config);
    if (result) {
     addToast("Mise à jour effectuées avec succées", { appearance: "success" });
    }else {
      addToast("Erreur c'est produite , ressayer", { appearance: "error" });
    }
    console.log("Resultat",result);
  } catch (error) {
    console.log("ERROR", error.message);
  }
};
