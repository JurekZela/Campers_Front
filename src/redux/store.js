// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import { configureStore } from "@reduxjs/toolkit";
//
// const persistedAuthReducer = persistReducer({
//   key: 'root',
//   storage,
//   whitelist: ['token']
// }, authReducer)
//
// export const store = configureStore({
//   reducer: {
//
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })
//
// export const persistor = persistStore(store);