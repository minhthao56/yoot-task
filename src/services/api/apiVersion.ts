import axiosClient from "./axiosClient";
import queryString from "query-string";

const bashUrl = "Version/";

export const apiVersion = {
    getListVersions: (params: IParamsGetListVersions) => {
      const url = bashUrl + "GetListVersions";
      return axiosClient.post(url, params );
    },
  
    getDetailVersion: (params: IParamsVersionId) => {
      const url = bashUrl + "GetDetailVersion?" + queryString.stringify(params);
      return axiosClient.get(url);
    },
  
    createVersion: (params: IParamsCreateVersion) => {
      const url = bashUrl + "CreateVersion";
      return axiosClient.post(url, params);
    },
  
    updateVersion: (params: IParamsUpdataVersion) => {
      const url = bashUrl + "UpdateVersion";
      return axiosClient.put(url, params);
    },
  
    deleteVersion: (params: IParamsVersionId) => {
      const url = bashUrl + "DeleteVersion?" + queryString.stringify(params);
      return axiosClient.get(url);
    },
  };