import axiosClient from "./axiosClient";
import queryString from "query-string";

const bashUrl = "Device/";
  
export const apiDevice = {
    getListDevices: (params: IParamsGetListDevices) => {
      const url = bashUrl + "GetListTypeDevices";
      return axiosClient.post(url, params );
    },
  
    getDetailDevice: (params: IParamsDeviceId) => {
      const url = bashUrl + "GetDetailTypeDevice?" + queryString.stringify(params);
      return axiosClient.get(url);
    },
  
    createDevice: (params: IParamsCreateDevice) => {
      const url = bashUrl + "CreateTypeDevice";
      return axiosClient.post(url, params);
    },
  
    updateDevice: (params: IParamsUpdataDevice) => {
      const url = bashUrl + "UpdateTypeDevice";
      return axiosClient.put(url, params);
    },
  
    deleteDevice: (params: IParamsDeviceId) => {
      const url = bashUrl + "DeleteTypeDevice?" + queryString.stringify(params);
      return axiosClient.delete(url);
    },
  };