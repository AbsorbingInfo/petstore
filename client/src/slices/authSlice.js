import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('auth/login', async (body) => {
  const response = await fetch(`http://localhost:4000/api/login`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();
  console.log(data)
  return data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false, 
    userName: '',
  },
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.userName = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.userName = action.payload.email;
        state.isLoggedIn = true;
      })
  },
});

export const {
  logout,
} = authSlice.actions;

export default authSlice.reducer;