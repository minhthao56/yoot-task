import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { doGetListAccounts } from "../../asyncActions";

type TypeinitialState = {
  isLoading: boolean;
  listAccounts: Array<any>;
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
    builder.addCase(doGetListAccounts.pending, (state) => {});
    builder.addCase(
      doGetListAccounts.fulfilled,
      (state, payload: PayloadAction<IResGetListAccount>) => {}
    );
  },
});

const { reducer } = slice;

export default reducer;
