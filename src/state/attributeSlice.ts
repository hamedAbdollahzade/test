import { createSlice } from "@reduxjs/toolkit";

export interface Attribute {
  id: number;
  name: string;
  value: string | number | [];
  value_id: number;
}

const attributeSlice = createSlice({
  name: "attribute",
  initialState: [] as Attribute[],
  reducers: {
    addattribute: (state, action) => {
      state.push({
        ...action.payload,
        value_id: Math.ceil(Math.random() * 100),
        id: state.length ? state.length + 1 : 1,
      });
      console.log(state);
    },
  },
});

export const { addattribute } = attributeSlice.actions;
export default attributeSlice;
