import { createSlice } from "@reduxjs/toolkit";

interface initialStateInterface {

}

const mainSlice = createSlice({
  name: "categorySlice",
  initialState: {

  } satisfies initialStateInterface as initialStateInterface,
  reducers: {

  },
});

export const {} = mainSlice.actions;
export default mainSlice.reducer;
