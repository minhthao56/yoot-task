import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { doGetListEnvironments, doDeleteEnvironment } from "../../asyncActions";

type TypeinitialState = {
    isLoading: boolean;
    listEnvironments: Array<ResEnvironment>;
    error: any;
    success: boolean;
    rebound: boolean;
};

const initialState = {
    error: {},
    isLoading: false,
    listEnvironments: [],
    success: false,
    rebound: false

} as TypeinitialState;

const slice = createSlice({
    initialState,
    name: "environment@",
    reducers: {},
    extraReducers: (builder) => {
        //doGetListEnvironments
        builder.addCase(doGetListEnvironments.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(doDeleteEnvironment.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(
            doGetListEnvironments.fulfilled,
            (state, action: PayloadAction<IResGetListEnvironment>) => {
                if (action.payload.Result) {
                    state.listEnvironments = action.payload.Content.Environments;
                } else {
                    state.error = action.payload.Result;
                }
                state.isLoading = false;
                state.rebound = false;
            }
        );
        builder.addCase(
            doDeleteEnvironment.fulfilled,
            (state, action: PayloadAction<IResGetListEnvironment>) => {
                if (action.payload.Result) {
                    state.success = true
                } else {
                    state.success = false
                    state.error = action.payload.Result;
                }
                state.isLoading = false;
                state.rebound = true
            }
        );
        builder.addCase(doGetListEnvironments.rejected, (state, action) => {
            const error = action.error;
            state.error = error;
            state.isLoading = false;
            state.success = false

        });
    },
});

const { reducer } = slice;

export default reducer;
