import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  access_token: "",
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state, action) {
      if (action.payload.token) {
        state.isAuthenticated = true;
        state.access_token = action.payload.token;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authenticationActions = authenticationSlice.actions;

export default authenticationSlice.reducer;
