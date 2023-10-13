import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "user",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity++;
      state.total += action.payload.price * action.payload.quantity;
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
