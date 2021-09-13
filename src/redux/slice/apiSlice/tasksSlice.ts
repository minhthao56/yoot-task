import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { doGetListTasks,doGetDetailTask } from "../../asyncActions";

type TypeinitialState = {
  isLoading: boolean;
  listTasks: Array<any>;
  error: any;
};

const initialState = {
  error: {},
  isLoading: false,
  listTasks: [],
} as TypeinitialState;

const slice = createSlice({
  initialState,
  name: "tasks@",
  reducers: {},
  extraReducers: (builder) => {
    //doGetListAccounts
    builder.addCase(doGetListTasks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      doGetListTasks.fulfilled,
        (state, action) => {
            console.log("list task",action.payload);
            state.isLoading = false;
        }
    );
    builder.addCase(doGetListTasks.rejected, (state, action) => {
      const error = action.error;
      state.error = error;
      state.isLoading = false;
    });
  },
});

const { reducer } = slice;

export default reducer;
