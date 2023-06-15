import { configureStore } from "@reduxjs/toolkit";
import { ArtikelApi } from "./reducer";

const store = configureStore({
  // Membuat reducer store artikel api
  reducer: {
    [ArtikelApi.reducerPath]: ArtikelApi.reducer
  },
  // Membuat store middleware
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(ArtikelApi.middleware)
})

export default store