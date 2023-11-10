import { configureStore } from '@reduxjs/toolkit'
import petsReducer from './slices/petsSlice'
import authReducer from './slices/authSlice'
import wishlistReducer from './slices/wishlistSlice'
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    petstore: petsReducer,
    auth : authReducer,
    wishlist: wishlistReducer,
  },
  middleware: [thunk],
})