import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { doGetListTasks,doGetDetailTask,doCreateTask} from "../../asyncActions/tasks";

type TypeinitialState = {
	isLoading: boolean;
	listTasks: Array<ResTask>;
	error: any;
	detailTask:any;
	Task:PayloadCreateTask;

};
interface PayloadCreateTask{
}

const initialState = {
	error: {},
	isLoading: false,
	listTasks: [],
	detailTask:{},
	Task:[]
} as TypeinitialState;

const taskSlice = createSlice({
	initialState,
	name: "tasks@",
	reducers: {},
	extraReducers: (builder) => {
		//doGetListAccounts
		builder.addCase(doGetListTasks.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(
			doGetListTasks.fulfilled,
			(state, action: PayloadAction<IResGetListTasks>) => {
				if (action.payload.Result) {
					state.listTasks = action.payload.Content.Tasks;
				} else {
					state.error = action.payload.Result;
				}
				state.isLoading = false;
			}
		);
		builder.addCase(
			doGetDetailTask.fulfilled,
			(state, action: PayloadAction<IResGetDetailTask>) => {
				if (action.payload.Result) {
					state.detailTask = action.payload.Content.Task;
				} else {
					state.error = action.payload.Result;
				}
				state.isLoading = false;
			}
		);
		builder.addCase(
			doCreateTask.fulfilled,
			(state, action: PayloadAction<PayloadCreateTask>) => {
				state.Task = action.payload;
				state.isLoading = false;
			}
		);
		builder.addCase(doGetListTasks.rejected, (state, action) => {
			const error = action.error;
			state.error = error;
			state.isLoading = false;
		});
	},
});

const { reducer } = taskSlice;

export default reducer;
