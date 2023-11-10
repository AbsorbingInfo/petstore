import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false, 
    userName: '',
  },
  reducers: {
    setUsername: (state, action) => {
      state.userName = action.payload;
    },
    setSetAuthStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {
  setUsername,
  setSetAuthStatus
} = authSlice.actions;

export default authSlice.reducer;