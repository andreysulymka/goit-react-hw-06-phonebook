import { createSlice } from "@reduxjs/toolkit";



export const filtersSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setStatusFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;

