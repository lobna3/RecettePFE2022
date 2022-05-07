import { ADD_PRODUIT, GET_PRODUIT_LIST,  GET_PRODUIT_LIST_SUCCESS, UPDATE_PRODUIT } from '../actionTypes'
import { getApi, postApi, deleteApi, updateApi } from '../../utils/apiHelpers'

export const addProduit = () => {
    return {
        type: ADD_PRODUIT
    }
};

export const getProduit = () => {
    return {
        type: GET_PRODUIT_LIST
    }
};

export const getProduitSuccess = (data) => {
    return {
        type: GET_PRODUIT_LIST_SUCCESS,
        payload: data

    }
};

export const updateProduit = (data) => {
    return {
        type: UPDATE_PRODUIT,
        payload: data
    }
};

export const getProduitApi = () => async dispatch => {

    try {
        dispatch(getProduit());
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await getApi('services', config);
        dispatch(getProduitSuccess(result));
        console.log("Listes des produits",result)
    } catch (error) {
        console.log("ERROR", error.message)
    }
};

export const addProduitApi = (body) => async dispatch => {

    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        dispatch(addProduit());
        let result = await postApi('ajouter_service', body, config);
        if (result) {
            dispatch(getProduitApi());
        }
    } catch (error) {
        console.log("ERROR", error.message)
    }
};

export const deleteProduitApi = (id) => async dispatch => {
    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        dispatch(addProduit());
        let result = await deleteApi('delete_service/' + id, config);
        if (result) {
            dispatch(getProduitApi());
        }
    } catch (error) {
        console.log("ERROR", error.message)
    }

};

export const updateProduitApi = (body, id) => async dispatch => {

    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }

        let result = await updateApi('maj_service/' + id, body, config);
        if (result) {
            dispatch(getProduitApi());
        }
    } catch (error) {
        console.log("ERROR", error.message)
    }
};