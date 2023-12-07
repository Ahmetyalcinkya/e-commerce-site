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
        state.cart[itemIndex].checked = true;
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: 1,
          checked: true,
        };
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
    resetCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart.splice(itemIndex, 1);
      }
    },
    productChecked: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex].checked === true) {
        state.cart[itemIndex].checked = false;
      } else {
        state.cart[itemIndex].checked = true;
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

export const {
  setCart,
  setPayment,
  setAddress,
  deleteFromCart,
  resetCart,
  productChecked,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
