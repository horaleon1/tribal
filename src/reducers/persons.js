import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  persons: [],
  status: "",
};

export const getPersons = createAsyncThunk(
  "businesses/getPersons",
  async (businessId) => {
    return await fetch(`/prod/business/${businessId}/persons`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.REACT_APP_API_KEY}`,
      },
    }).then((res) => res.json());
  }
);

export const deletePerson = createAsyncThunk(
  "businesses/deletePerson",
  async (info) => {
    const response = await fetch(
      `/prod/business/${info.businessId}/persons/${info.personId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${process.env.REACT_APP_API_KEY}`,
        },
      }
    );
    return response.data;
  }
);

export const addPerson = createAsyncThunk(
  "businesses/addPerson",
  async (info) => {
    const { businessId, data } = info;
    const response = await fetch(`/prod/business/${businessId}/persons`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(data),
    });
    return response.data;
  }
);

export const updatePerson = createAsyncThunk("editPersion", async (info) => {
  const { businessId, personId, data } = info;
  const response = await fetch(
    `/prod/business/${businessId}/persons/${personId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(data),
    }
  );
  return response.data;
});

export const persons = createSlice({
  name: "persons",
  initialState,
  extraReducers: {
    [getPersons.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPersons.fulfilled]: (state, action) => {
      state.status = "success";
      state.persons = action.payload;
    },
    [getPersons.rejected]: (state, action) => {
      state.status = "rejected";
    },

    [deletePerson.pending]: (state, action) => {
      state.status = "loading";
    },
    [deletePerson.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deletePerson.rejected]: (state, action) => {
      state.status = "rejected";
    },

    [addPerson.pending]: (state, action) => {
      state.status = "loading";
    },
    [addPerson.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addPerson.rejected]: (state, action) => {
      state.status = "rejected";
    },

    [updatePerson.pending]: (state, action) => {
      state.status = "loading";
    },
    [updatePerson.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [updatePerson.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default persons.reducer;
