import { combineReducers } from "@reduxjs/toolkit";
import demoSlice from "../slice/appSlice/demoSlice";
import account from "../slice/apiSlice/accountSlice";
import tasks from "../slice/apiSlice/tasksSlice";
import environment from "../slice/apiSlice/environmentSlice";

export const rootReducer = combineReducers({
  demoSlice,
  account,
  tasks,
  environment
});
