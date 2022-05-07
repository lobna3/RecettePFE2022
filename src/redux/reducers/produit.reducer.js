import { ADD_PRODUIT, GET_PRODUIT_LIST, GET_PRODUIT_LIST_SUCCESS, UPDATE_PRODUIT } from "../actionTypes";

const produitInitState = {
    loading: false,
    list: [],
    selectedProduit: {}
}

const produitReducer = (state = produitInitState, action) => {
    let { type, payload } = action;
    switch (type) {
        case ADD_PRODUIT:
            return { ...state, loading: true }
        case GET_PRODUIT_LIST:
            return { ...state, loading: true }
        case GET_PRODUIT_LIST_SUCCESS:
            return { ...state, loading: false, list: payload }
        case UPDATE_PRODUIT:
            return { ...state, selectedProduit: payload }

        default:
            return state;
    }
}
export default produitReducer ; 