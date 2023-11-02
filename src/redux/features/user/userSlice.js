import { createSlice } from "@reduxjs/toolkit";
import { fetchStates } from "../product/productSlice";

const initialState = {
  user: {
    name: "",
    email: "",
    role_id: "1",
  },
  fetchStates: fetchStates.not_fetched,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, user: { ...action.payload } };
    },
    changeFetchState: (state, action) => {
      state.fetchStates = action.payload;
    },
  },
});

export const { setUser, changeFetchState } = userSlice.actions;

export default userSlice.reducer;
