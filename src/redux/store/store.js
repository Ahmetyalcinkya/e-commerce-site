import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import globalReducer from "../features/global/globalSlice";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const myStore = configureStore({
  reducer: {
    global: globalReducer,
  },
  middleware: [thunk, logger],
});
