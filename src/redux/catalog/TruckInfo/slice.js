import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from './operations.js';

const fulfilledTrucks = (state, action) => {
  // state.isLoggedIn = true;
  // state.isRefreshing = false;
  state.items = action.payload.items;
};

const fetchTrucksRejected = (state, action) => {
  // state.isLoading = false;
  state.error = action.payload;
}

const trucksSlice = createSlice({
  name: "truck",
  initialState: {
    items: [],
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTrucks.fulfilled, fulfilledTrucks)
      .addCase(fetchTrucks.rejected, fetchTrucksRejected)
      .addCase(fetchTrucks.pending, (state, action) => {})
  }
});

export default trucksSlice.reducer;