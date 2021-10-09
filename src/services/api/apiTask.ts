import queryString from "query-string";
import axiosClient from "./axiosClient";
const bashUrl = "Task/";

export const apiTask = {
    getListTasks: (params : IParamsGetListTask) =>{
        const url = bashUrl + "GetListTasks";
        return axiosClient.post(url , params);
    },
    getDetailTask:(params:IParamsTaskId)=>{
        const url = bashUrl + "GetDetailTask?"+ queryString.stringify(params);
        return axiosClient.get(url);
    },
    createTask:(params:IParamsCreateTask)=>{
        const url = bashUrl + "CreateTask";
        return axiosClient.post(url,params);
    },
    updateTask:(params:IParamsUpdateTask)=>{
        const url = bashUrl + "UpdateTask";
        return axiosClient.post(url,params);
    },
    deleteTask:(params:IParamsTaskId)=>{
        const url = bashUrl + "DeleteTask?"+ queryString.stringify(params);
        return axiosClient.get(url);
    },
    addMessageTask:(params:IParamsMessageTask)=>{
        const url = bashUrl + "AddMessageTask?" + queryString.stringify(params);
        return axiosClient.post(url,params);
    }

}
