import { ADD_SUIVIE, GET_SUIVIE_LIST, GET_SUIVIE_LIST_SUCCESS, UPDATE_SUIVIE} from '../actionTypes'
import { getApi, postApi, deleteApi, updateApi } from '../../utils/apiHelpers'

export const addSuivie = () => {
    return {
        type: ADD_SUIVIE
    }
};

export const getSuivie = () => {
    return {
        type: GET_SUIVIE_LIST
    }
};

export const getSuivieSuccess = (data) => {
    return {
        type: GET_SUIVIE_LIST_SUCCESS,
        payload: data

    }
};

export const updateSuivie = (data) => {
    return {
        type: UPDATE_SUIVIE,
        payload: data
    }
};

export const getSuivieApi = () => async dispatch => {

    try {
        dispatch(getSuivie());
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await getApi("suivies", config);
        dispatch(getSuivieSuccess(result));
        console.log(result);
    } catch (error) {
        console.log("ERROR", error.message)
    }
};

export const addSuivieApi = (data) => async dispatch => {

    try { dispatch({
        type: ADD_SUIVIE
      });
       
        let result = await postApi("ajouter_suivie", data);
       
        console.log("result Suivie",result);
    } catch (error) {
        console.log("ERROR", error.message)
    }
};


export const deleteSuivie = (id) => async dispatch => {
    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        dispatch(addSuivie());
        let result = await deleteApi("delete_suivie/" + id, config);
        if (result) {
            dispatch(getSuivieApi());
        }
        console.log(result);
    } catch (error) {
        console.log("ERROR", error.message)
    }

};

export const updateSuivieApi = (body, id) => async dispatch => {

    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }

        let result = await updateApi("maj_suivie/" + id, body, config);
        if (result) {
            dispatch(getSuivieApi());
        }
        console.log(result)
    } catch (error) {
        console.log("ERROR", error.message)
    }
};