import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Features/UserSlice";
import CartReducer from "../Features/CartSlice";

export default configureStore({
  reducer: {
    user: UserReducer,
    cart: CartReducer,
  },
});
