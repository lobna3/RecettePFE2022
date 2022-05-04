import { getApi} from "../../utils/apiHelpers"
import { GET_DETAILS, GET_DETAILS_SUCCESS } from "../actionTypes"

export const getCommandeDetails = (id) => {
    return {
        type: GET_DETAILS, 
        payload:id
    }
};

export const getCommandeDetailsSuccess = (payload) => {
    return {
        type: GET_DETAILS_SUCCESS,
        payload: payload
    }
};

export const getCommandeDetailsApi = (id) => async dispatch => {

    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        dispatch(getCommandeDetails(id));
        let result = await getApi("commandeById/" + id, config);
        if (result) {
            console.log("Details commande", result);
            if(result.details==null)
            {
                dispatch(getCommandeDetailsSuccess([]));
            }else 
            {
                dispatch(getCommandeDetailsSuccess(result.details));
            }
            
        }
       

    } catch (error) {console.log("ERROR", error.message);

    }
};

export const getCommandesListDetailsApi = (id) => async (dispatch) => {
    try {
      let result = await getApi("commandeById/" +id);
      dispatch({
        type: GET_DETAILS_SUCCESS,
        payload: result,
      });
      console.log("Détails commandes",result)
    } catch (error) {
      console.log("ERROR", error.message);
    }
  };