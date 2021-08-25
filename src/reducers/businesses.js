import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { defaultOptions } from '../utils/headers';

const initialState = {
  businesses: {},
  status: null,
};

export const getUsers = createAsyncThunk(
  "/businesses/getUsers",
  async (dispatch, getState) => {
    return await fetch(
      "/prod/business",
      defaultOptions
    ).then((res) => res.json());
  }
);

export const businesses = createSlice({
  name: "businesses",
  initialState,
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.businesses = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default businesses.reducer;
