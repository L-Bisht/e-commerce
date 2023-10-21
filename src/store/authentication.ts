import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  access_token: "",
  userData: {}
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state, action) {
      if (action.payload.access_token) {
        state.isAuthenticated = true;
        state.access_token = action.payload.access_token;
        state.userData = action.payload.userData;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.access_token = '';
      state.userData = {}
    },
  },
});

export const authenticationActions = authenticationSlice.actions;

export default authenticationSlice.reducer;
