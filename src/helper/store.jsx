import { configureStore } from "@reduxjs/toolkit";
import { ArtikelApi } from "./apiSlice";

const store = configureStore({
  reducer: {
    [ArtikelApi.reducerPath]: ArtikelApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(ArtikelApi.middleware)
})

export default store