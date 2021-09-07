import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { doGetListAccounts } from "../../asyncActions";

type TypeinitialState = {
  isLoading: boolean;
  listAccounts: Array<ResAccount>;
  error: any;
};

const initialState = {
  error: {},
  isLoading: false,
  listAccounts: [],
} as TypeinitialState;

const slice = createSlice({
  initialState,
  name: "account@",
  reducers: {},
  extraReducers: (builder) => {
    //doGetListAccounts
    builder.addCase(doGetListAccounts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      doGetListAccounts.fulfilled,
      (state, action: PayloadAction<IResGetListAccount>) => {
        if (action.payload.Result) {
          state.listAccounts = action.payload.Content.Accounts;
        } else {
          state.error = action.payload.Result;
        }
        state.isLoading = false;
      }
    );
    builder.addCase(doGetListAccounts.rejected, (state, action) => {
      const error = action.error;
      state.error = error;
      state.isLoading = false;
    });
  },
});

const { reducer } = slice;

export default reducer;
