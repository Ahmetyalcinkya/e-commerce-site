import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
    deleteFromCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity -= 1;
      }
      if (state.cart[itemIndex].cartQuantity === 0) {
        state.cart.splice(itemIndex, 1);
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

export const { setCart, setPayment, setAddress, deleteFromCart } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
