import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./features/Users";

const store = configureStore({
  reducer: {
    users: UsersReducer,
  },
});

export default store;
