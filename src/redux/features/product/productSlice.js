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
  fetchStates: fetchStates.not_fetched,
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
    changeFetchState: (state, action) => {
      state.fetchStates = action.payload;
    },
  },
});

export const { setProducts, addPageCount, changeFetchState } =
  productSlice.actions;

export default productSlice.reducer;
