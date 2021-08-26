import { configureStore } from "@reduxjs/toolkit";
import businesses from "./reducers/businesses";
import persons from "./reducers/persons";
import ui from "./reducers/ui";

export const store = configureStore({
  reducer: {
    businesses,
    persons,
    ui,
  },
});
