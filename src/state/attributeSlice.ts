import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    addattribute: (state, action: PayloadAction<Attribute>) => {
      state.push({ ...action.payload });
    },
  },
});

export const { addattribute } = attributeSlice.actions;
export default attributeSlice;
