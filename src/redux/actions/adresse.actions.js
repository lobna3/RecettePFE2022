import { ADD_ADRESSE, GET_ADRESSE_LIST, GET_ADRESSE_LIST_SUCCESS, UPDATE_ADRESSE} from '../actionTypes'
import { getApi, postApi, deleteApi, updateApi } from '../../utils/apiHelpers'

export const addAdresse = () => {
    return {
        type: ADD_ADRESSE
    }
};

export const getAdresse = () => {
    return {
        type: GET_ADRESSE_LIST
    }
};

export const getAdresseSuccess = (data) => {
    return {
        type: GET_ADRESSE_LIST_SUCCESS,
        payload: data

    }
};

export const updateAdresse = (data) => {
    return {
        type: UPDATE_ADRESSE,
        payload: data
    }
};

export const getAdresseApi = () => async dispatch => {

    try {
        dispatch(getAdresse());
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await getApi('adresses', config);
        dispatch(getAdresseSuccess(result));
        console.log("Liste des adresses", result)
    } catch (error) {
        console.log("ERROR", error.message)
    }
};

export const addAdresseApi = (body) => async dispatch => {

    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        dispatch(addAdresse());
        let result = await postApi('ajouter_adresse', body, config);
        if (result) {
            dispatch(getAdresseApi());
        }
    } catch (error) { console.log("ERROR", error.message)

    }
};

export const deleteAdresse = (id) => async dispatch => {
    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        dispatch(addAdresse());
        let result = await deleteApi('delete_adresse/' + id, config);
        if (result) {
            dispatch(getAdresseApi());
        }
    } catch (error) { console.log("ERROR", error.message)

    }

};

export const updateAdressegApi = (body, id) => async dispatch => {

    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }

        let result = await updateApi('/maj_adresse/' + id, body, config);
        if (result) {
            dispatch(getAdresseApi());
        }
    } catch (error) { console.log("ERROR", error.message)

    }
};