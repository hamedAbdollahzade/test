import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    setOrders: (state, action) => action.payload,
    addOrder: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setOrders, addOrder } = orderSlice.actions;
export default  orderSlice ;
