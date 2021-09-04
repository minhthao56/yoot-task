import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = process.env.REACT_APP_URL_TASK;
const token = process.env.REACT_APP_TOKEN_LOGIN;

const axiosAuth = axios.create({
  baseURL: baseURL + "api/",
  headers: {
    "content-type": "application/json",
    Authorization: token,
  },
});

axiosAuth.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (err: AxiosError) => {
    throw err;
  }
);

export default axiosAuth;
