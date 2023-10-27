import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from 'js-cookie';


const initialState = {
  user: null,
  openLogin: false,
  openRegister: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleLoginModal: (state, action) => {
      state.openLogin = action.payload
      state.openRegister = false // false true
    },
    toggleRegisterModal: (state, action) => {
      state.openRegister = action.payload
      state.openLogin = false // false true
    },
    setUser: (state, action) => {
      state.user = action.payload
    }
  },
});

export const { toggleLoginModal, toggleRegisterModal, setUser } = authSlice.actions;

export default authSlice.reducer;