import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
  name: "score",
  initialState: 0,
  reducers: {
    addScore: (state) => state + 1,
    resetScore: () => 0,
  },
});

export const isGameOverSlice = createSlice({
  name: "isGameOver",
  initialState: false,
  reducers: {
    setIsGameOver: (_, { payload }) => payload,
  },
});
