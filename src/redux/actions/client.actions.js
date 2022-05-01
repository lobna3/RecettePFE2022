import { getApi, postApi } from "../../utils/apiHelpers";
import {
  ADD_FIRST_STEP,
  ADD_SECOND_STEP,
  ADD_THIRD_STEP,
  ADD_FOUR_STEP,
  ADD_CLIENT,
  GET_CLIENT_LIST_SUCCESS,
} from "../actionTypes";

export const addFirstStep = (data) => {
  return {
    type: ADD_FIRST_STEP,
    payload: data,
  };
};

export const addSecondStep = (data) => {
  return {
    type: ADD_SECOND_STEP,
    payload: data,
  };
};

export const addThirdStep = (data) => {
  return {
    type: ADD_THIRD_STEP,
    payload: data,
  };
};

export const addFourStep = (data) => {
  return {
    type: ADD_FOUR_STEP,
    payload: data,
  };
};

export const addClientApi =
  (data, addToast, handleClose) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_CLIENT,
      });
      let result = await postApi("ajouter_client", data);
      console.log("Result", result);
      if (result.success) {
        addToast("Client Ajouter avec succées", { appearance: "success" });
      } else {
        addToast("Erreur c'est produite , ressayer", { appearance: "error" });
      }
      handleClose();
    } catch (error) {}
  };

export const getClientListApi = () => async (dispatch) => {
  try {
    let result = await getApi("clients");
  
    dispatch({
      type: GET_CLIENT_LIST_SUCCESS,
      payload:result
    });
  } catch (error) {}
};
