import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal(state, { payload }) {
      if (state === payload) {
        return null;
      } else {
        return payload;
      }
    },
  },
});
export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
