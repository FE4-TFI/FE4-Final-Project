// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./authSlice";

// const store = configureStore({
//   reducer: {
//     user: authSlice,
//   },
// });

// export default store;

import {
    configureStore,
    combineReducers,
    getDefaultMiddleware,
  } from "@reduxjs/toolkit";
  import logger from "redux-logger";
  import laporReducer from "./laporReducer";
  import authReducer from "./authSlice";
  import "./edukasiReducer";
  import edukasiReducer from "./edukasiReducer";
  
  const rootReducer = combineReducers({
    lapor: laporReducer,
    auth: authReducer,
    edukasi: edukasiReducer,
  });
  
  const middleware = [...getDefaultMiddleware(), logger];
  
  const store = configureStore({
    reducer: rootReducer,
    middleware: middleware,
  });
  
  export default store;