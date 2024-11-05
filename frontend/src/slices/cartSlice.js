import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {cartItems: []};

const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}

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

            state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

            state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

            state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

            state.totalPrice = (
                Number(state.itemsPrice) +
                Number(state.shippingPrice) + 
                Number(state.taxPrice)
            ).toFixed(2);

            localStorage.setItem('cart', JSON.stringify(state));
        }
    },
    extraReducers: (builder) => {
        
    }
});

export const {
    addToCart
} = cartSlice.actions;

export default cartSlice.reducer;