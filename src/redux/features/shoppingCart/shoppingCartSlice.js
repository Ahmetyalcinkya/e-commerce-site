import { createSlice } from "@reduxjs/toolkit";
import { fetchStates } from "../product/productSlice";

const initialState = {
  cart: [],
  payment: {},
  address: {},
  fetchStates: fetchStates.not_fetched,
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
    getUserAddress: (state, action) => {
      state.address = action.payload;
    },
    setAddress: (state, action) => {
      return {
        ...state,
        address: { ...state.address, ...action.payload },
      };
    },
    changeFetchState: (state, action) => {
      state.fetchStates = action.payload;
    },
  },
});

export const {
  setCart,
  setPayment,
  getUserAddress,
  setAddress,
  deleteFromCart,
  resetCart,
  productChecked,
  changeFetchState,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
