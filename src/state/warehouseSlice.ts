// src/redux/warehouseSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./productSlice";

interface IwarehouseSlice {
  id: number;
  name: string;
  products: Product[];
}

const warehouseSlice = createSlice({
  name: "warehouses",
  initialState: {
    warehouse1: [] as IwarehouseSlice[],
    warehouse2: [] as IwarehouseSlice[],
  },
  reducers: {
    addProductToWarehouse1: (state, action) => {
      state.warehouse1.push(action.payload);
    },
    addProductToWarehouse2: (state, action) => {
      state.warehouse2.push(action.payload);
    },
    removeProductFromWarehouse1: (state, action) => {
      state.warehouse1 = state.warehouse1.filter(
        (product) => product.id !== action.payload
      );
    },
    removeProductFromWarehouse2: (state, action) => {
      state.warehouse2 = state.warehouse2.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const {
  addProductToWarehouse1,
  addProductToWarehouse2,
  removeProductFromWarehouse1,
  removeProductFromWarehouse2,
} = warehouseSlice.actions;

export default warehouseSlice;
