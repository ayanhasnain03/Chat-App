import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/reducer/auth";
import api from "./api/api";
import miscSlice from "./reducer/misc";

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [api.reducerPath]: api.reducer,
    [miscSlice.name]: miscSlice.reducer,
  },
  middleware: (mid) => [...mid(), api.middleware],
});

export default store;
