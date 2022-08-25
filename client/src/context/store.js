import { configureStore } from "@reduxjs/toolkit";
import { alertReducer } from "./alertSlice";
import { authReducer } from "./authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
  },
});
