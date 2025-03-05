import { configureStore } from "@reduxjs/toolkit";

import trucksReducer from './catalog/TruckInfo/slice.js';
import detailsReducer from './catalog/TruckDetailsById/slice.js';


export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    details: detailsReducer,
  },
})