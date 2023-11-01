import { createSlice } from "@reduxjs/toolkit";

export const fetchStates = {
  not_fetched: "NOT_FETCHED",
  fetching: "FETCHING",
  fetched: "FETCHED",
  fetch_failed: "FAILED",
};

const initialState = {
  productList: [],
  totalProductCount: "",
  pageCount: 0,
  activePage: "",
  fetchState: fetchStates.not_fetched,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.productList = action.payload;
    },
    addPageCount: (state) => {
      state.pageCount += 1;
    },
  },
});

export const { setProducts, addPageCount } = productSlice.actions;

export default productSlice.reducer;
