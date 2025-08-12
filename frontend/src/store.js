// Entry point to Redux store configuration
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice'; // Import the API slice
import cartSliceReducer from './slices/cartSlice'; // Import the cart slice
import authSliceReducer from './slices/authSlice';


const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // Add the API slice reducer 
    cart: cartSliceReducer, // Add the cart slice reducer 
    auth: authSliceReducer,
  },
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware), // Add the API slice middleware
  devTools:true, // Enable Redux DevTools

});

export default store;
