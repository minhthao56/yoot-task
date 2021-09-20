import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { doGetListTasks} from "../../asyncActions";

type TypeinitialState = {
	isLoading: boolean;
	listTasks: Array<ResTask>;
	error: any;
};

const initialState = {
	error: {},
	isLoading: false,
	listTasks: [],
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
		builder.addCase(doGetListTasks.rejected, (state, action) => {
			const error = action.error;
			state.error = error;
			state.isLoading = false;
		});
	},
});

const { reducer } = taskSlice;

export default reducer;
