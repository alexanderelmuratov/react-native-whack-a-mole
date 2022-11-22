import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { scoreSlice, isGameOverSlice } from "./slices";

const rootReducer = combineReducers({
  score: scoreSlice.reducer,
  isGameOver: isGameOverSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
