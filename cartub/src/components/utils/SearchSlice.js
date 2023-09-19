import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search", // Make sure this is a string (e.g., "search")
  initialState: {

  },
  reducers: {
    cacheResults: (state, action) => {     
     state=Object.assign(state,action.payload);
    },
  },
});
export const {cacheResults}=searchSlice.actions;
export default searchSlice.reducer;