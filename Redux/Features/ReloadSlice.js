import { createSlice } from "@reduxjs/toolkit";

const ReloadSlice = createSlice({
  name: "ReloadSlice",
  initialState: {
    reload: false,
  },
  reducers: {
    SET_RELOAD: (state) => {
      state.reload = !state.reload;
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

export const { SET_RELOAD } = ReloadSlice.actions;

export const selectReload = (state) => state.reload.reload;

export default ReloadSlice.reducer;
