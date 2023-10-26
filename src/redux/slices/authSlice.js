import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  token: null,
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
    }
  }
});

export const { toggleLoginModal, toggleRegisterModal } = authSlice.actions;

export default authSlice.reducer;