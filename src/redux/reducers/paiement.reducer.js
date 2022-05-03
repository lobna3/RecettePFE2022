import { ADD_PAIEMENT, GET_PAIEMENT_LIST, GET_PAIEMENT_LIST_SUCCESS, UPDATE_PAIEMENT } from "../actionTypes";

const paiementInitState = {
    loading: false,
    list: [],
    selectedPaiement: {}
}

const paiementReducer = (state = paiementInitState, action) => {
    let { type, payload } = action;
    switch (type) {
        case ADD_PAIEMENT:
            return { ...state, loading: true }
        case GET_PAIEMENT_LIST:
            return { ...state, loading: true }
        case GET_PAIEMENT_LIST_SUCCESS:
            return { ...state, loading: false, list: payload }
        case UPDATE_PAIEMENT:
            return { ...state, selectedPaiement: payload }

        default:
            return state;
    }
}
export default paiementReducer ; 