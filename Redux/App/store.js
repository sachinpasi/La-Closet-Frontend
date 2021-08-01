import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Features/UserSlice";

export default configureStore({
  reducer: {
    user: UserReducer,
  },
});
