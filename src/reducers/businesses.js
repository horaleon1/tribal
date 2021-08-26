import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  businesses: {},
  status: null,
  business: { name: "" },
};

export const getBusinesses = createAsyncThunk(
  "businesses/getBusinesses",
  async () => {
    return await fetch("/prod/business", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.REACT_APP_API_KEY}`,
      },
    }).then((res) => res.json());
  }
);

export const deleteBusiness = createAsyncThunk(
  "businesses/deleteBusiness",
  async (businessId) => {
    const response = await fetch(`/prod/business/${businessId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.REACT_APP_API_KEY}`,
      },
    });
    return response.data;
  }
);

export const addBusiness = createAsyncThunk("addBusiness", async (data) => {
  const response = await fetch("/prod/business/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.REACT_APP_API_KEY}`,
    },
    body: JSON.stringify(data),
  });
  return response.data;
});

export const updateBusiness = createAsyncThunk("addBusiness", async (info) => {
  const { businessId, values } = info;
  const response = await fetch(`/prod/business/${businessId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.REACT_APP_API_KEY}`,
    },
    body: JSON.stringify(values),
  });
  return response.data;
});

export const getBusinessById = createAsyncThunk(
  "businesses/getBusinessesById",
  async (businessId) => {
    return await fetch(`/prod/business/${businessId}`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.REACT_APP_API_KEY}`,
      },
    }).then((res) => res.json());
  }
);

export const businesses = createSlice({
  name: "businesses",
  initialState,
  extraReducers: {
    [getBusinesses.pending]: (state, action) => {
      state.status = "loading";
    },
    [getBusinesses.fulfilled]: (state, action) => {
      state.status = "success";
      state.businesses = action.payload;
    },
    [getBusinesses.rejected]: (state, action) => {
      state.status = "rejected";
    },

    [deleteBusiness.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteBusiness.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deleteBusiness.rejected]: (state, action) => {
      state.status = "rejected";
    },

    [addBusiness.pending]: (state, action) => {
      state.status = "loading";
    },
    [addBusiness.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addBusiness.rejected]: (state, action) => {
      state.status = "rejected";
    },

    [updateBusiness.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateBusiness.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [updateBusiness.rejected]: (state, action) => {
      state.status = "rejected";
    },

    [getBusinessById.pending]: (state, action) => {
      state.status = "loading";
    },
    [getBusinessById.fulfilled]: (state, action) => {
      state.status = "success";
      state.business = action.payload;
    },
    [getBusinessById.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default businesses.reducer;
