import { createSlice } from '@reduxjs/toolkit';

const statusSlice = createSlice({
  name: 'statuses',
  initialState: [],
  reducers: {
    setStatuses: (state, action) => action.payload,
  },
});

export const { setStatuses } = statusSlice.actions;
export default statusSlice;