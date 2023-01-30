import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  avatar: "",
};

export const ActivateSlice = createSlice({
  name: "activate",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    SetAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
});

export const { setName, SetAvatar } = ActivateSlice.actions;

export default ActivateSlice.reducer;
