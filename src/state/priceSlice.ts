import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Price {
  id: number;
  type: number;
  name: string;
  value: number;
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
