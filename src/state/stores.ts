import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./productSlice";

interface IInventory {
  id: number;
  name: string | null;
  product: Product[];
}

interface IStore {
  id: number;
  name: string | null;
  inventory: IInventory[];
}

const storeSlice = createSlice({
  name: "store",
  initialState: [] as IStore[],
  reducers: {
    setStore: (state, action: PayloadAction<IStore>) => {
      state.push(action.payload);
    },
  },
});

export const { setStore } = storeSlice.actions;
export default storeSlice;
