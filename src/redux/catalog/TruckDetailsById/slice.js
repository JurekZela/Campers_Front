import { createSlice } from '@reduxjs/toolkit';
import { fetchDetailsById } from './operations.js';

const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    item: [],
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDetailsById.fulfilled, (state, action) => {
        state.item = action.payload;
      })
      .addCase(fetchDetailsById.rejected, (state, action) => {})
      .addCase(fetchDetailsById.pending, (state, action) => {})
  }
});

export default detailsSlice.reducer;