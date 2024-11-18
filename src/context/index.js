import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalType';  // path to your modalSlice
import languageReducer from "./languageSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    language: languageReducer,
    auth: authReducer,
  },
});

export default store;
