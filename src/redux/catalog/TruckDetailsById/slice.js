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
        console.log(action.payload);
      })
  }
});

export default detailsSlice.reducer;