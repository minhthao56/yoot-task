import queryString from "query-string";
import axiosClient from "./axiosClient";
const bashUrl = "Team/";

export const apiTeam = {
    getListTeams: (params:IParamsGetListTeam) =>{
        const url = bashUrl + "GetListTeams";
        return axiosClient.post(url,params);
    },
    getDetailTeam: (params:IParamsTeamId) =>{
        const url = bashUrl + "GetDetailTeam?"+ queryString.stringify(params);
        return axiosClient.get(url);
    },
    createTeam: (params:IParamsCreateTeam) =>{
        const url = bashUrl + "CreateTeam";
        return axiosClient.post(url,params);
    },
    updateTeam: (params:IParamsUpdateTeam) =>{
        const url = bashUrl + "UpdateTeam";
        return axiosClient.put(url,params);
    },
    deleteTeam: (params:IParamsTeamId)=>{
        const url = bashUrl + "DeleteTeam?" + queryString.stringify(params);
        return axiosClient.delete(url);
    }

}