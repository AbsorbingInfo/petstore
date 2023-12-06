import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';

export const fetchWishlist = createAsyncThunk('wishlist/fetchWishlist', async () => {
  const response = await fetch('https://petstore-api-cyan.vercel.app/api/wishlist');
  const data = await response.json();
  return data;
});

export const addWishlistItemAsync = createAsyncThunk('wishlist/addWishlistItem', async (item) => {
  
  const cleanItem = {id: item.id, name: item.name, img: item.img, rate: item.rate}
  await fetch(`https://petstore-api-cyan.vercel.app/api/wishlist`, {
    method: 'POST',
    body: JSON.stringify(cleanItem),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return item;
});

export const deleteWishlistItemAsync = createAsyncThunk('wishlist/deleteWishlistItem', async (item) => {
  console.log('rannnn',item)
  await fetch(`https://petstore-api-cyan.vercel.app/api/deletewishlist`, {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return item.id;
});

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlist: [], 
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload.wishlist;
      })
      .addCase(deleteWishlistItemAsync.fulfilled, (state, action) => {
        state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
      })
      .addCase(addWishlistItemAsync.fulfilled, (state, action) => {
        state.wishlist.push(action.payload);  
      });
  },
});


export default wishlistSlice.reducer;