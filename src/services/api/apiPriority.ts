import axiosClient from "./axiosClient";
import queryString from "query-string";

const bashUrl = "Prioriry/";

export const apiPriority = {
    getListPrioritys: (params: IParamsGetListPriorities) => {
      const url = bashUrl + "GetListPrioritys";
      return axiosClient.post(url, params );
    },
  
    getDetailPriority: (params: IParamsPriorityId) => {
      const url = bashUrl + "GetDetailPriority" + queryString.stringify(params);
      return axiosClient.get(url);
    },
  
    createPriority: (params: IParamsCreatePriority) => {
      const url = bashUrl + "CreatePriority";
      return axiosClient.post(url, params);
    },
  
    updatePriority: (params: IParamsUpdataPriority) => {
      const url = bashUrl + "UpdatePriority";
      return axiosClient.put(url, params);
    },
  
    deletePriority: (params: IParamsPriorityId) => {
      const url = bashUrl + "DeletePriority" + queryString.stringify(params);
      return axiosClient.delete(url);
    },
  };