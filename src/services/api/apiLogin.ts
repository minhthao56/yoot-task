import axiosAuth from "./axiosAuth";

const bashUrl = "Login/";

export const apiLogin = {
  login: (params: IParamsLogin) => {
    const url = bashUrl + "Index";
    return axiosAuth.post(url, params);
  },
};
