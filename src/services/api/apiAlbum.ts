import queryString from "query-string";

import axiosClient from "./axiosClient";

const bashUrl = "Album/";
export const apiAlbum = {
    //getListAlbum
    getListAlbum: (params: IParamsGetListAlbum) => {
        const url = bashUrl + "GetListAlbums";
        return axiosClient.post(url, params);
    },

    //getDetailAlbum
    getDetailAlbum: (params: IParamsGetDetailAlbum) => {
        const url = bashUrl + "GetDetailAlbum?" + queryString.stringify(params);
        return axiosClient.get(url)
    },
    //createalbum
    createAlbum: (params: IParamsCreateAlbum) => {
        const url = bashUrl + "CreateAlbum";
        return axiosClient.post(url, params);
    },
    // updateAlbum
    updateAlbum: (params: IParamsUpdateAlbum) => {
        const url = bashUrl + "UpdateAlbum";
        return axiosClient.put(url, params);
    },
    //deletealbum
    deleteAlbum: (params: IParamsAlbumId) => {
        const url = bashUrl + "DeletetAlbum?" + queryString.stringify(params);
        return axiosClient.delete(url);
    }
};
