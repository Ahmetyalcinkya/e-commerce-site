import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    setCategory: (state, action) => {
      state.categories = action.payload;
    },
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setRoles, setCategory, changeLanguage, changeTheme } =
  globalSlice.actions;

export default globalSlice.reducer;
