import { combineReducers } from "@reduxjs/toolkit";
import demoSlice from "../slice/appSlice/demoSlice";
import account from "../slice/apiSlice/accountSlice";
import environment from "../slice/apiSlice/environmentSlice";

export const rootReducer = combineReducers({
  demoSlice,
  account,
  environment
});
