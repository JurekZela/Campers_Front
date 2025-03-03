import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configureStore } from "@reduxjs/toolkit";

import trucksReducer from './catalog/TruckInfo/slice.js';

const persistedAuthReducer = persistReducer({
  key: 'root',
  storage,
  whitelist: ['token']
}, trucksReducer)

export const store = configureStore({
  reducer: {
    trucks: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);