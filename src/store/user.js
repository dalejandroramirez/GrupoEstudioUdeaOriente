import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const singUp = createAsyncThunk()

let userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    status: "",
  },
  reducers: {
    signIn: (state,action) => {
      state.userInfo = action.payload
    },
    logOut: (state) => {
      state.userInfo = null
    }
  }
});

export const { signIn, logOut } = userSlice.actions;

export default userSlice.reducer