import { configureStore } from "@reduxjs/toolkit";

import trucksReducer from './catalog/TruckInfo/slice.js';
import detailsReducer from './catalog/TruckDetailsById/slice.js';
import favoritesReducer from './catalog/Favorites/slice.js';

export const store = configureStore({
  reducer: {
    catalogs: trucksReducer,
    details: detailsReducer,
    favorites: favoritesReducer,
  },
})