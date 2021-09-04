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
    return axiosClient.get(url);
  },
};
