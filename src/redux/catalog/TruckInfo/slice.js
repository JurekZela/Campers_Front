import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from './operations.js';

const fulfilledTrucks = (state, action) => {
  state.error = null;
  state.isLoading = false;

  state.items = [...state.items, ...action.payload.items];
  state.page += 1;
  state.total = action.payload.total;
};

const fetchTrucksRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const trucksSlice = createSlice({
  name: "truck",

  initialState: {
    items: [],
    page: 1,
    limit: 4,
    error: null,
    isLoading: false,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchTrucks.fulfilled, fulfilledTrucks)
      .addCase(fetchTrucks.rejected, fetchTrucksRejected)
      .addCase(fetchTrucks.pending, (state, action) => {
        state.isLoading = true;
      })
  }
});
export default trucksSlice.reducer;