import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: "please, log in first",
  },
  reducers: {
    saveLogin(state, action) {
      state.login = action.payload;
    },
  },
});

export const { saveLogin } = loginSlice.actions;
export default loginSlice.reducer;
