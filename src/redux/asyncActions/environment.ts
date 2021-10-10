import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiEnvironment } from "../../services";

export const doGetListEnvironments = createAsyncThunk(
    "environment@doGetListEnvironments",
    async (params: IParamsGetListEnvironment) => {
        const result = await apiEnvironment.getListEnvironment(params);
        console.log("result", result)
        return result.data;
    }
);

export const doGetDetailEnvironment = createAsyncThunk(
    "environment@doGetDetailEnvironment",
    async (params: IParamsGetDetailEnvironment) => {
        const result = await apiEnvironment.getDetailEnvironment(params);
        return result.data;
    }
);

export const doDeleteEnvironment = createAsyncThunk(
    "environment@doGetDetailEnvironment",
    async (params: IParamsEnvironmentId) => {
        const result = await apiEnvironment.deleteEnvironment(params);
        return result.data;
    }
);


