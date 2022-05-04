import { GET_DETAILS, GET_DETAILS_SUCCESS } from "../actionTypes";
const commandeDetailsInitState = {
  selectedCommande: "",
  commandeDetails: [],
  loading: false,
};

const commandeDetailsReducer = (state = commandeDetailsInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_DETAILS:
      return { ...state, loading: true, selectedCommande: payload };
    case GET_DETAILS_SUCCESS:
      return { ...state, loading: false, commandeDetails: payload };

    default:
      return state;
  }
};

export default commandeDetailsReducer;
