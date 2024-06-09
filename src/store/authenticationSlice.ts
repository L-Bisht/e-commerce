import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TRootState } from ".";

export type TUserData = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};
type TInitialState = {
  isAuthenticated: boolean;
  access_token: string;
  userData: TUserData;
  status: "idle" | "pending" | "succeded" | "error";
  error: string | null;
};
const initialState: TInitialState = {
  isAuthenticated: false,
  access_token: "",
  userData: {} as TUserData,
  error: null,
  status: "idle",
};

const baseURL = import.meta.env.VITE_BASE_URL;

export const loginUser = createAsyncThunk(
  "authentication/login",
  async (
    payload: {
      username: string;
      password: string;
    },
    thunkAPI
  ) => {
    try {
      const loginUrl = new URL(`${baseURL}/auth/login`);
      const response = await axios.post(loginUrl.toString(), {
        ...payload,
      });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue({
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }
);

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.access_token = "";
      state.userData = {} as TUserData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "error";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("inside fullfilled");

        state.isAuthenticated = true;
        const userData = action.payload as TUserData;
        state.access_token = userData.token;
        state.userData = userData;
        state.status = "succeded";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.status = "error";
      });
  },
});

export const isAuthenticatedSelector = (state: TRootState) =>
  state.authentication.isAuthenticated;
export const userDataSelector = (state: TRootState) =>
  state.authentication.userData;

export const { logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
