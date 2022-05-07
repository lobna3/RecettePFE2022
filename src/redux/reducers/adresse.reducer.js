import { ADD_ADRESSE, GET_ADRESSE_LIST, GET_ADRESSE_LIST_SUCCESS, UPDATE_ADRESSE } from "../actionTypes";

const adresseInitState = {
    loading: false,
    list: [],
    selectedAdresse: {}
}

const adresseReducer = (state = adresseInitState, action) => {
    let { type, payload } = action;
    switch (type) {
        case ADD_ADRESSE:
            return { ...state, loading: true }
        case GET_ADRESSE_LIST:
            return { ...state, loading: true }
        case GET_ADRESSE_LIST_SUCCESS:
            return { ...state, loading: false, list: payload }
        case UPDATE_ADRESSE:
            return { ...state, selectedAdresse: payload }

        default:
            return state;
    }
}
export default adresseReducer ; 