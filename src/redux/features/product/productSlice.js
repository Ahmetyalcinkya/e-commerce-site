import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  totalProductCount: "",
  pageCount: 0,
  activePage: "",
  fetchState: "",
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
