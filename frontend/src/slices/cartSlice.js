import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {cartItems: []};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            const itemExists = state.cartItems.find((cartItem) => cartItem._id === item._id);

            if (itemExists) {
                state.cartItems = state.cartItems.map((cartItem) => cartItem._id === itemExists._id ? item : cartItem);
            } else {
                state.cartItems = [...state.cartItems, item];
            }

            return updateCart(state);
        }
    },
    extraReducers: (builder) => {
        
    }
});

export const {
    addToCart
} = cartSlice.actions;

export default cartSlice.reducer;