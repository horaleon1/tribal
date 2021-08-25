import { configureStore } from "@reduxjs/toolkit";
import businesses from "./reducers/businesses";
import ui from "./reducers/ui";

export const store = configureStore({
  reducer: {
    businesses,
    ui,
  },
});
