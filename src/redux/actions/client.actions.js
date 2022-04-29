import { ADD_FIRST_STEP ,ADD_SECOND_STEP,ADD_THIRD_STEP,ADD_FOUR_STEP} from "../actionTypes";

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

  export const addThedStep = (data) => {
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
