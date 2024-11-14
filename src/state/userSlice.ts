import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [{ id: 1, name: "hamed" }],
  reducers: {
    setUser: (state, action) => action.payload,
    clearUser: (state) => (state = []),
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice;
