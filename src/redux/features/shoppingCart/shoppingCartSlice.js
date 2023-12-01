import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  payment: {},
  address: {},
};

export const shoppingCartSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    setCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cart.push(tempProduct);
      }
    },
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { setCart, setPayment, setAddress } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
