import queryString from "query-string";

import axiosClient from "./axiosClient";

const bashUrl = "Account/";
export const apiAccount = {
  //getListAccounts
  getListAccounts: (params: IParamsGetListAccount) => {
    const url = bashUrl + "GetListAccounts";
    return axiosClient.post(url, params);
  },

  //getDetailAccount
  getDetailAccount: (params: IParamsGetDetailAccount) => {
    const url = bashUrl + "GetDetailAccount?" + queryString.stringify(params);
    return axiosClient.get(url)
  },
  //createAccount
  createAccount: (params:IParamsCreateAccount) => {
    const url = bashUrl + "CreateAccount";
    return axiosClient.post(url, params);
  },
  //updateAccount
  updateAccount: (params: IParamsUpdateAccount) => {
    const url = bashUrl + "UpdateAccount";
    return axiosClient.put(url, params);
  },
  //deleteAccount
  deleteAccount: (params: IParamsAccountId) => {
    const url = bashUrl + "DeletetAccount?" + queryString.stringify(params);
    return axiosClient.delete(url);
  }
};
