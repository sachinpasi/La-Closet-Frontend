import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
  },
  reducers: {
    ADD_PRODUCT_TO_CART: (state, action) => {
      state.cart = action.payload;
      console.log(state.cart);
    },
    // LOGIN: (state, action) => {
    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({
    //       isLoggedIn: action.payload?.isLoggedIn,
    //       userId: action.payload?.userId,
    //       name: action.payload?.name,
    //       email: action.payload?.email,
    //       token: action.payload?.token,
    //       role: action.payload?.role,
    //     })
    //   );
    //   state.user = action.payload;
    //   console.log(state.user);
    // },
    // LOGOUT: () => {
    //   localStorage.removeItem("user");
    //   return initialState;
    // },
  },
});

export const { ADD_PRODUCT_TO_CART } = CartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export default CartSlice.reducer;
