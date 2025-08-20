// src/store/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isSignedIn: false, // e.g. { username: "Akshay", email: "...", token: "..." }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // store user object
    },
    setToken: (state, action) => {
      state.token = action.payload;
      state.isSignedIn = true;
    },
    logout: (state) => {
      state.user = null;
       state.token = null;
  state.isSignedIn = false;
    },
  },
});

export const { setToken,setUser, logout } = authSlice.actions;
export default authSlice.reducer;