import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';

export const fetchPets = createAsyncThunk('petstore/fetchPets', async () => {

  const response = await fetch('https://petstore-api-cyan.vercel.app/api/pets');
  const data = await response.json();
  return data;
});

const petsSlice = createSlice({
  name: 'petstore',
  initialState: {
    pets: [], 
    searchQuery: '',
    sortOrder: 'def',
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSort: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.pets = action.payload;
      });
  },
});

export const {
  setSearchQuery,
  setSort,
  clearSearch,
  clearSort,
} = petsSlice.actions;

export default petsSlice.reducer;
