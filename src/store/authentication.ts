import { createSlice } from "@reduxjs/toolkit";


export type TUserData = {
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
  token: string
}
type TInitialState = {
  isAuthenticated: boolean,
  access_token: string,
  userData: TUserData
}
const initialState: TInitialState = {
  isAuthenticated: false,
  access_token: "",
  userData: {} as TUserData
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
      state.userData = {} as TUserData
    },
  },
});

export const authenticationActions = authenticationSlice.actions;

export default authenticationSlice.reducer;
