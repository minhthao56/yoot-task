import queryString from "query-string";
import axiosClient from "./axiosClient";

const bashUrl = "Plan/";

export const apiPlan = {
  getListPlans: (params: IParamsGetListPlans) => {
    const url = bashUrl + "GetListPlans";
    return axiosClient.post(url, params );
  },

  getDetailPlan: (params: IParamsPlanId) => {
    const url = bashUrl + "GetDetailPlan" + queryString.stringify(params);
    return axiosClient.get(url);
  },

  createPlan: (params: IParamsCreatePlan) => {
    const url = bashUrl + "CreatePlan";
    return axiosClient.post(url, params);
  },

  updatePlan: (params: IParamsUpdatePlan) => {
    const url = bashUrl + "UpdatePlan";
    return axiosClient.put(url, params);
  },

  deletePlan: (params: IParamsPlanId) => {
    const url = bashUrl + "DeletePlan" + queryString.stringify(params);
    return axiosClient.delete(url);
  },
};
