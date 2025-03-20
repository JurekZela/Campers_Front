import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks,fetchLoadMore } from './operations.js';

const fulfilledTrucks = (state, action) => {
  // state.isLoggedIn = true;
  // state.isRefreshing = false;
  state.total = action.payload.total;
  state.items = action.payload.items;

  if (state.page * 4 >= state.total){
    state.page = 1;
  }
};

const fetchTrucksRejected = (state, action) => {
  // state.isLoading = false;
  state.error = action.payload;
}

const trucksSlice = createSlice({
  name: "trucks",

  initialState: {
    items: [],
    error: false,
    page: 1,
    limit: 4,
    total: 23,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchTrucks.fulfilled, fulfilledTrucks)
      .addCase(fetchTrucks.rejected, fetchTrucksRejected)
      .addCase(fetchTrucks.pending, (state, action) => {
      })
      .addCase(fetchLoadMore.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.page += 1;
        state.limit += 4;

        if (state.page * 4 >= state.total) {
          state.page = 1;
          state.limit = 4;
        }
    })
  }
});
export default trucksSlice.reducer;