import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  role_id: "",
  store: {
    name: "",
    tax_no: "",
    bank_account: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
