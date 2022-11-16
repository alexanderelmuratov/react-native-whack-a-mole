import { ADD_SCORE } from "./actions";

const initialState = {
  score: 0,
};

export const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    default:
      return state;
  }
};
