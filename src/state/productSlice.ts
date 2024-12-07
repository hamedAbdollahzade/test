import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Attribute } from "./attributeSlice";
import { Price } from "./priceSlice";

export interface Product {
  id: number;
  name: string;
  category: string;
  attribute: Attribute[];
  price: Price[];
}

const productSlice = createSlice({
  name: "products",
  initialState: [] as Product[],
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice;
