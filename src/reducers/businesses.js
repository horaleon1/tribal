import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  businesses: [],
  status: null,
};

const myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json');
// myHeaders.append('Content-Encoding', 'gzip')
myHeaders.append("Access-Control-Allow-Origin", "*")    
myHeaders.append('Access-Control-Allow-Credentials','true')
// myHeaders.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')    
// myHeaders.append('Access-Control-Allow-Origin', 'https://0.0.0.0:3000')
// myHeaders.append(
//      "Access-Control-Allow-Headers",
//      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method")   
// myHeaders.append("Allow", "GET, POST, OPTIONS, PUT, DELETE")
myHeaders.append('Authorization', 'XxIWiDpit53dmgFziYiJx7vrzfxo2j6Y8PsngbW0')

const defaultOptions = {
  headers:myHeaders
  // "x-api-key": "XxIWiDpit53dmgFziYiJx7vrzfxo2j6Y8PsngbW0"
};

export const getUsers = createAsyncThunk(
  "businesses/getUsers",
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

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = businesses.actions;

export default businesses.reducer;
