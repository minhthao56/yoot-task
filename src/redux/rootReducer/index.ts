import { combineReducers } from "@reduxjs/toolkit";
import demoSlice from "../slice/appSlice/demoSlice";
import account from "../slice/apiSlice/accountSlice";

export const rootReducer = combineReducers({
  demoSlice,
  account,
});
