import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucksByFilter } from './operations.js';

const fulfilledTrucks = (state, action) => {
  state.error = null;
  state.isLoading = false;

  state.items = [...action.payload.items];
};

const fetchTrucksRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const filterSlice = createSlice({
  name: "filters",

  initialState: {
    items: [],
    error: null,
    isLoading: false,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchTrucksByFilter.fulfilled, fulfilledTrucks)
      .addCase(fetchTrucksByFilter.rejected, fetchTrucksRejected)
      .addCase(fetchTrucksByFilter.pending, (state, action) => {
        state.isLoading = true;
      })
  }
});
export default filterSlice.reducer;