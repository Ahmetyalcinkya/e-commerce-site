import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import globalReducer from "../features/global/globalSlice";
import thunk from "redux-thunk";
import logger from "redux-logger";
import userReducer from "../features/user/userSlice";
import productReducer from "../features/product/productSlice";
import shoppingCartReducer from "../features/shoppingCart/shoppingCartSlice";
import storeReducer from "../features/store/storeSlice";

export const myStore = configureStore({
  reducer: {
    global: globalReducer,
    user: userReducer,
    product: productReducer,
    shopping: shoppingCartReducer,
    store: storeReducer,
  },
  middleware: [thunk, logger],
});
