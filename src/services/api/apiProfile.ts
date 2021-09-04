import axiosAuth from "./axiosAuth";

const bashUrl = "Profile/";

export const apiProflie = {
    updateProfile: (params: IParamsUpdateProfile) => {
    const url = bashUrl + "UpdateProfile";
    return axiosAuth.post(url, params);
  },
};
