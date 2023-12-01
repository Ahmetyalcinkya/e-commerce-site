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
      return {
        ...state,
        productList: [...action.payload],
      };
    },
    addProducts: (state, action) => {
      return {
        ...state,
        productList: [...state.productList, ...action.payload],
      };
    },
    setTotalProductCount: (state, action) => {
      return { ...state, totalProductCount: action.payload };
    },
    changeFetchState: (state, action) => {
      state.fetchStates = action.payload;
    },
  },
});

export const {
  setProducts,
  addProducts,
  setTotalProductCount,
  changeFetchState,
} = productSlice.actions;

export default productSlice.reducer;
