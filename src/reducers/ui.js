import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hasSquaresLayout: true,
  modalType: "",
  isMobileMenuOpen: false,
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
    onToogleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
  },
});

export const {
  toggleLayout,
  setModalType,
  onCloseModalBox,
  onToogleMobileMenu,
} = ui.actions;

export default ui.reducer;
