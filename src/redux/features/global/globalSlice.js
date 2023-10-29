import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

export const globalSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
  },
});

export const { setRoles } = globalSlice.actions;

export default globalSlice.reducer;
