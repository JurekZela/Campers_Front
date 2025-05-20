import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,

  reducers: {
    toggleFavorites: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex(item => item.id === id);
      if (index === -1) {
        state.push(action.payload);
      } else {
        state.splice(index, 1);
      }
      localStorage.setItem('favorites', JSON.stringify(state));
    },
  }
  }
);

export const { toggleFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;