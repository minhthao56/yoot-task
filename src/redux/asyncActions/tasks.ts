import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiTask,apiStatusTask,apiProject } from "../../services";

export const doGetListTasks = createAsyncThunk(
    "tasks@doGetListTasks",
    async (params: IParamsGetListTask) => {
        const result = await apiTask.getListTasks(params);
        console.log('list task',result);
        return result.data;
    }
);

export const doGetDetailTask = createAsyncThunk(
    "tasks@doGetDetailTask",
    async (params: IParamsTaskId) => {
        const result = await apiTask.getDetailTask(params);
        console.log('detail task',result);

        return result.data;
    }
);
export const doGetListStatusTask = createAsyncThunk(
    "statusTask@doGetListStatusTask",
    async (params: IParamsGetListStatusTask) => {
        const result = await apiStatusTask.getListStatusTasks(params);
        // console.log('status task',result);

        return result.data;
    }
);
export const doGetListProject = createAsyncThunk(
    "project@doGetListProject",
    async (params: IParamsGetListProjects) => {
        const result = await apiProject.getListProjects(params);
        // console.log('list project',result);

        return result.data;
    }
);
