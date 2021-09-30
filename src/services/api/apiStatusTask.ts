import queryString from "query-string";
import axiosClient from "./axiosClient";
const bashUrl = "StatusTask/";

export const apiStatusTask = {
    getListStatusTasks:(params:IParamsGetListStatusTask) =>{
        const url = bashUrl + "GetListStatusTasks";
        return axiosClient.post(url,params);
    },
    getDetailStatusTask:(params:IParamsStatusTaskId)=>{
        const url = bashUrl + "GetDetailStatusTask?"+ queryString.stringify(params);
        return axiosClient.get(url);
    },
    createStatusTask:(params:IParamsCreateStatusTask)=>{
        const url = bashUrl + "CreateStatusTask";
        return axiosClient.post(url,params);
    },
    updateStatusTask:(params:IParamsUpdateStatusTask)=>{
        const url = bashUrl + "UpdateStatusTask";
        return axiosClient.post(url,params);
    },
    deleteStatusTask:(params:IParamsStatusTaskId)=>{
        const url = bashUrl + "DeleteStatusTask?"+ queryString.stringify(params);
        return axiosClient.get(url);
    }

}
