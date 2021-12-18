import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Features/UserSlice";
import CartReducer from "../Features/CartSlice";
import ReloadReducer from "../Features/ReloadSlice";

export default configureStore({
  reducer: {
    user: UserReducer,
    cart: CartReducer,
    reload: ReloadReducer,
  },
});
