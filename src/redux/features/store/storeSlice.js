import { createSlice } from "@reduxjs/toolkit";
import { fetchStates } from "../product/productSlice";

const initialState = {
  store: {
    name: "",
    email: "",
    role_id: "",
    store: {
      name: "",
      tax_no: "",
      bank_account: "",
    },
  },
  fetchStates: fetchStates.not_fetched,
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
});

export const {} = storeSlice.actions;

export default storeSlice.reducer;
