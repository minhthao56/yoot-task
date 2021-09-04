import queryString from "query-string";
import axiosClient from "./axiosClient";

const bashUrl = "Project/";

export const apiProject = {
  getListProjects: (params: IParamsGetListProjects) => {
    const url = bashUrl + "GetListProjects";
    return axiosClient.post(url, params );
  },

  getDetailProject: (params: IParamsProjectId) => {
    const url = bashUrl + "GetDetailProject?" + queryString.stringify(params);
    return axiosClient.get(url);
  },

  createProject: (params: IParamsCreateProject) => {
    const url = bashUrl + "CreateProject";
    return axiosClient.post(url, params);
  },

  updateProject: (params: IParamsUpdataProject) => {
    const url = bashUrl + "UpdateProject";
    return axiosClient.put(url, params);
  },

  deleteProject: (params: IParamsProjectId) => {
    const url = bashUrl + "DeleteProject?" + queryString.stringify(params);
    return axiosClient.delete(url);
  },
};
