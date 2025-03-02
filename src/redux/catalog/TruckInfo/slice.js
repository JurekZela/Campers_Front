import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from './operations.js';

const fulfilledTrucks = (state, action) => {
  // state.isLoggedIn = true;
  // state.isRefreshing = false;
  // state.user = action.payload.user;
  console.log(action);
  console.log(state);
}

const trucksSlice = createSlice({
  name: "trucks",
  initialState: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTrucks.fulfilled, fulfilledTrucks)
  }
});

export default trucksSlice.reducer;