import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { doGetListAccounts, useAppDispatch, useAppSelector } from "../../redux";
import { FilterTasks, TableTasks } from "./components";
import "./TasksPage.scss";

export const TasksPage = () => {
  const dispatch = useAppDispatch();
	const { error, listAccounts, isLoading } = useAppSelector(
		(state) => state.account
	);
	const [accs, setAccs] = useState<Array<ResAccount>>([]);

	useEffect(() => {
		dispatch(doGetListAccounts({}))
			.then(unwrapResult)
			.then((res: IResGetListAccount) => {
				setAccs(res.Content.Accounts);
			})
			.catch((err) => {
				alert("Đã có lỗi");
			});
	}, []);
	const handleSubmit = () => {
		//distch 
	};

    return(
        <div className="task-page">
			<div className="task-page__header">
				<FilterTasks listAccounts={listAccounts} handleSubmit={handleSubmit}/>
			</div>
			<div className="task-page__body">
				<TableTasks />
			</div>
        </div>
    ) 
};
