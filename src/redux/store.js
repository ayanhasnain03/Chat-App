import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/reducer/auth";
import api from "./api/api";

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (mid) => [...mid(), api.middleware],
});

export default store;
