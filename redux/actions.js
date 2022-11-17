export const ADD_SCORE = "ADD_SCORE";
export const RESET_SCORE = "RESET_SCORE";

export const addScore = () => {
  return {
    type: ADD_SCORE,
  };
};

export const resetScore = () => {
  return {
    type: RESET_SCORE,
  };
};
