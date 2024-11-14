import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";
import statusSlice from "./statusSlice";
import userSlice from "./userSlice";
import productSlice from "./productSlice";
import priceSlice from "./priceSlice";
import attributeSlice from "./attributeSlice";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    statuses: statusSlice.reducer,
    users: userSlice.reducer,
    orders: orderSlice.reducer,
    price: priceSlice.reducer,
    attribute: attributeSlice.reducer,
  },
});

export default store;
