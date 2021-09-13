import queryString from "query-string";
import axiosClient from "./axiosClient";
const bashUrl = "TypeDevice/";

export const apiTypeDevice = {
    getListTypeDevices: (params : IParamsGetListTypeDevice) =>{
        const url = bashUrl + "GetListTypeDevices";
        return axiosClient.post(url , params);
    },


}
