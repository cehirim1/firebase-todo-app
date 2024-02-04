import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { userAuthAPI } from "./API/userAuthAPI";

export const store = configureStore({
  reducer: {
    [userAuthAPI.reducerPath]: userAuthAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthAPI.middleware),
});

setupListeners(store.dispatch);
