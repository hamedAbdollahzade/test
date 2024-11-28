import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Price {
  id: number; // id of the price
  type: number; // optional
  name: string; // مثلا قیمت تمام شده یا ...
  value: number; // قیمتی ک کاربر وارد میکنه
}

const priceSlice = createSlice({
  name: "price",
  initialState: [] as Price[],
  reducers: {
    addPrice: (state, action: PayloadAction<Price>) => {
      state.push(action.payload);
    },
  },
});

export const { addPrice } = priceSlice.actions;
export default priceSlice;
