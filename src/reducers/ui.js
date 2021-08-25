import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hasSquaresLayout: true,
  modalType: "",
};

export const ui = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleLayout: (state) => {
      state.hasSquaresLayout = !state.hasSquaresLayout;
    },
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
    onCloseModalBox: (state) => {
      state.modalType = "";
    },
  },
});

export const { toggleLayout, setModalType, onCloseModalBox } = ui.actions;

export default ui.reducer;
