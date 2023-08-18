import { configureStore } from "@reduxjs/toolkit";
import combinedReducers from "./reducers/RootReducer";

const store = configureStore({
  reducer: combinedReducers,
});

export default store;
