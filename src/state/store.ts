import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";
import statusSlice from "./statusSlice";
import userSlice from "./userSlice";
import productSlice from "./productSlice";
import priceSlice from "./priceSlice";
import attributeSlice from "./attributeSlice";
import warehouseSlice from "./warehouseSlice";
import storeSlice from "./stores";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    statuses: statusSlice.reducer,
    users: userSlice.reducer,
    orders: orderSlice.reducer,
    price: priceSlice.reducer,
    attribute: attributeSlice.reducer,
    store: storeSlice.reducer,
    warehouses: warehouseSlice.reducer,
  },
});

export default store;
