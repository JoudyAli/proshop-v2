import {createSlice} from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cart') ? JSON.parse
(localStorage.getItem('cart')) : { items: [], totalAmount: 0 }; // Initialize cart state from localStorage or default

const cartSlice= createSlice({
  name: 'cart',
    initialState,
    reducers: {}
});

export default cartSlice.reducer; // Export the reducer for use in the store