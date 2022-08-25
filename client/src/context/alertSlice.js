import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.showAlert = true;
      state.alertText = "Login Successful! Redirecting...";
      state.alertType = "success";
    },
    clearAlert: (state) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
    },
  },
});

export const alertActions = { ...alertSlice.actions };

export const alertReducer = alertSlice.reducer;
