import { createStore } from "redux";
import { scoreReducer } from "./reducer";

export const store = createStore(scoreReducer);
