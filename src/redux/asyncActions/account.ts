import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAccount } from "../../services";

export const doGetListAccounts = createAsyncThunk(
  "account@doGetListAccounts",
  async (params: IParamsGetListAccount) => {
    const result = await apiAccount.getListAccounts(params);
    // console.log("list account ",result);
    return result.data;
  }
);

export const doGetDetailAccount = createAsyncThunk(
  "account@doGetDetailAccount",
  async (params: IParamsGetDetailAccount) => {
    const result = await apiAccount.getDetailAccount(params);
    console.log("detail account ",result);

    return result.data;
  }
);
