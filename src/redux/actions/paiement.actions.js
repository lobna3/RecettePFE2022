import { ADD_PAIEMENT,  GET_PAIEMENT_LIST, GET_PAIEMENT_LIST_SUCCESS, UPDATE_PAIEMENT} from '../actionTypes'
import { getApi, postApi, deleteApi, updateApi } from '../../utils/apiHelpers'

export const addPaiement = () => {
    return {
        type: ADD_PAIEMENT
    }
};

export const getPaiement = () => {
    return {
        type: GET_PAIEMENT_LIST
    }
};

export const getPaiementSuccess = (data) => {
    return {
        type: GET_PAIEMENT_LIST_SUCCESS,
        payload: data

    }
};

export const updatePaiement = (data) => {
    return {
        type: UPDATE_PAIEMENT,
        payload: data
    }
};

export const getPaiementApi = () => async dispatch => {

    try {
        dispatch(getPaiement());
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await getApi("paiements", config);
        dispatch(getPaiementSuccess(result));
        console.log(result);
    } catch (error) {
        console.log("ERROR", error.message)
    }
};

export const addPaiementApi = (data) => async dispatch => {

    try { 
        dispatch({
        type: ADD_PAIEMENT
      });
       
        let result = await postApi("ajouter_paiement", data);
      
        console.log("ADD Paiements", result)
     
        console.log(result);
    } catch (error) {
        console.log("ERROR", error.message)
    }
};

export const deletePaiement = (id) => async dispatch => {
    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        dispatch(addPaiement());
        let result = await deleteApi("delete_paiement/" + id, config);
        if (result) {
            dispatch(getPaiementApi());
        }
        console.log(result);
    } catch (error) {
        console.log("ERROR", error.message)
    }

};

export const updatePaiementApi = (body, id) => async dispatch => {

    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }

        let result = await updateApi("maj_paiement/" + id, body, config);
        if (result) {
            dispatch(getPaiementApi());
        }
        console.log(result)
    } catch (error) {
        console.log("ERROR", error.message)
    }
};