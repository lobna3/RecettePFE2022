import { ADD_SUIVIE, GET_SUIVIE_LIST, GET_SUIVIE_LIST_SUCCESS, UPDATE_SUIVIE} from "../actionTypes";

const suivieInitState = {
    loading: false,
    list: [],
    selectedSuivie: {}
}

const suivieReducer = (state = suivieInitState, action) => {
    let { type, payload } = action;
    switch (type) {
        case ADD_SUIVIE:
            return { ...state, loading: true }
        case GET_SUIVIE_LIST:
            return { ...state, loading: true }
        case GET_SUIVIE_LIST_SUCCESS:
            return { ...state, loading: false, list: payload }
        case UPDATE_SUIVIE:
            return { ...state, selectedSuivie: payload }

        default:
            return state;
    }
}
export default suivieReducer ; 