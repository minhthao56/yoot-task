import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = process.env.REACT_APP_URL_TASK;
const token = localStorage.getItem("token");

const axiosClient = axios.create({
  baseURL: baseURL + "api/",
  headers: {
    "content-type": "application/json",
    Authorization: token,
  },
});
axiosClient.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (err: AxiosError) => {
    throw err;
  }
);
export default axiosClient;
