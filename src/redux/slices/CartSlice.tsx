import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cartPage',
  initialState: {
    count: 0,
  },
  reducers: {
    inc: (state) => {
      state.count += 1;
    },
  },
});
export default cartSlice.reducer;

export const { inc } = cartSlice.actions;
