import queryString from "query-string";

import axiosClient from "./axiosClient";

const bashUrl = "Environment/";
export const apiEnvironment = {
    //getListEnvironment
    getListEnvironment: (params: IParamsGetListEnvironment) => {
        const url = bashUrl + "GetListEnvironments";
        return axiosClient.post(url, params);
    },
    //getDetailEnvironment
    getDetailEnvironment: (params: IParamsGetDetailEnvironment) => {
        const url = bashUrl + "GetDetailEnvironment?" + queryString.stringify(params);
        return axiosClient.get(url)
    },
    //createEnvironment
    createEnvironment: (params: IParamsCreateEnvironment) => {
        const url = bashUrl + "CreateEnvironment";
        return axiosClient.post(url, params);
    },
    // updateEnvironment
    updateEnvironment: (params: IParamsUpdateEnvironment) => {
        const url = bashUrl + "UpdateAlbum";
        return axiosClient.put(url, params);
    },
    //deleteEnvironment
    deleteEnvironment: (params: IParamsEnvironmentId) => {
        const url = bashUrl + "DeletetEnvironment?" + queryString.stringify(params);
        return axiosClient.delete(url);
    }
};
