import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const name = "auth";
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({
  name,
  initialState,
  reducers: {
    emptyErrorAlert: (state) => {
      state.showAlert = true;
      state.alertText = "Please provide all values";
      state.alertType = "danger";
    },
    hideAlert: (state) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
    },
  },
  extraReducers,
});

// exports

export const authActions = { ...slice.actions, ...extraActions };
export const authReducer = slice.reducer;

// implementation

function createInitialState() {
  return {
    // initialize state from local storage to enable user to stay logged in
    user: null,
    error: null,
    isLoading: false,
    showAlert: false,
    alertText: "",
    alertType: "",
  };
}

function createExtraActions() {
  return {
    login: login(),
    logout: logout(),
  };

  function login() {
    return createAsyncThunk(
      `${name}/login`,
      async (currentUser, { rejectWithValue }) => {
        try {
          const { data } = await axios.post("/api/v1/auth/login", currentUser);
          console.log(data);
          return data;
        } catch (error) {
          return rejectWithValue({ msg: error.response.data.msg });
        }
      }
    );
  }

  function logout() {
    return createAsyncThunk(`${name}/logout`, async () => {
      try {
        await axios.get("/api/v1/auth/logout");
      } catch (error) {
        return error.response;
      }
    });
  }
}

function createExtraReducers() {
  return {
    ...login(),
    ...logout(),
  };

  function login() {
    var { pending, fulfilled, rejected } = extraActions.login;
    return {
      [pending]: (state) => {
        state.error = null;
        state.isLoading = true;
      },
      [fulfilled]: (state, action) => {
        const user = action.payload.user;
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));
        state.user = user;
        state.showAlert = true;
        state.alertText = "Login Successful! Redirecting...";
        state.alertType = "success";
        state.isLoading = false;
      },
      [rejected]: (state, action) => {
        state.error = action.error;
        state.showAlert = true;
        state.alertText = action.payload.msg;
        state.alertType = "danger";
        state.isLoading = false;
      },
    };
  }

  function logout() {
    var { pending, fulfilled, rejected } = extraActions.logout;
    return {
      [pending]: (state) => {
        state.error = null;
      },
      [fulfilled]: (state, action) => {
        localStorage.removeItem("user");
        state.user = null;
      },
      [rejected]: (state, action) => {
        state.error = action.error;
      },
    };
  }
}
