import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: {
    user: {
      isLoggedIn: false,
      userId: null,
      name: null,
      email: null,
      contactNo: null,
      token: null,
      role: null,
    },
  },
  reducers: {
    LOGIN: (state, action) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          isLoggedIn: action.payload?.isLoggedIn,
          userId: action.payload?.userId,
          name: action.payload?.name,
          email: action.payload?.email,
          token: action.payload?.token,
          role: action.payload?.role,
        })
      );
      state.user = action.payload;
      console.log(state.user);
    },
    LOGOUT: () => {
      localStorage.removeItem("user");
      return initialState;
    },
  },
});

export const { LOGIN, LOGOUT } = UserSlice.actions;

export const selectUser = (state) => state.user.user;

export default UserSlice.reducer;
