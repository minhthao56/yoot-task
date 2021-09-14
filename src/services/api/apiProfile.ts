import axiosAuth from "./axiosAuth";

const bashUrl = "Profile/";

export const apiProflie = {
  updateProfile: (params: IParamsUpdateProfile) => {
    const url = bashUrl + "UpdateProfile";
    return axiosAuth.put(url, params);
  },
  getProfile: () => {
    const url = bashUrl + "GetProfile";
    return axiosAuth.get(url)
  }
};
