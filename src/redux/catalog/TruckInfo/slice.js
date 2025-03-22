import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from './operations.js';

const fulfilledTrucks = (state, action) => {
  // state.isLoggedIn = true;
  // state.isRefreshing = false;
  // state.total = action.payload.total;
  state.items = [...state.items, ...action.payload.items];
  state.page += 1;
  state.total = action.payload.total;
};

const fetchTrucksRejected = (state, action) => {
  // state.isLoading = false;
  state.error = action.payload;
}

const trucksSlice = createSlice({
  name: "truck",

  initialState: {
    items: [],
    page: 1,
    limit: 4,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchTrucks.fulfilled, fulfilledTrucks)
      .addCase(fetchTrucks.rejected, fetchTrucksRejected)
      .addCase(fetchTrucks.pending, (state, action) => {
      })
  }
});
export default trucksSlice.reducer;