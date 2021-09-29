import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { doGetListAccounts, doGetListTasks, useAppDispatch, useAppSelector } from "../../redux";
import { apiEnvironment, apiPriority, apiProject, apiStatusTask,  } from "../../services";
import { apiTypeDevice } from "../../services/api/apiTypeDevice";
import { apiVersion } from "../../services/api/apiVersion";
import { FilterTasks, TableTasks } from "./components";
import "./TasksPage.scss";

export const TasksPage = () => {
  	const dispatch = useAppDispatch();
	const { error, listAccounts,isLoading} = useAppSelector(
		(state) => state.account,
		
	);
	const {listTasks} = useAppSelector((state) => state.tasks)

	const [accs, setAccs] = useState<Array<ResAccount>>([]);
	const [statusTask, setStatusTask] = useState([]);
	const [version, setVersion] = useState([]);
	const [priority, setPPriority] = useState([]);
	const [typeDevices,setTypeDevices] = useState([]);
	const [env,setEnv] = useState([]);
	const [project,setProject] = useState([]);
	const [listTask,setListTask] = useState<Array<ResTask>>([]);

	useEffect(() => {
		dispatch(doGetListAccounts({}))
			.then(unwrapResult)
			.then((res: IResGetListAccount) => {
				setAccs(res.Content.Accounts);
			})
			.catch((err) => {
				alert("Đã có lỗi");
			});
		
	}, [dispatch]);
	useEffect(() => {
		dispatch(doGetListTasks({}))
			.then(unwrapResult)
			.then((res: IResGetListTasks) => {
				setListTask(res.Content.Tasks);
			})
			.catch((err) => {
				alert("Đã có lỗi");
			});
	}, [dispatch]);	
	useEffect(() => {
		try {
			apiStatusTask
				.getListStatusTasks({})
				.then((res)=>res.data)
				.then((data) => {
					const listStatusTask = data.Content.StatusTasks;
					setStatusTask(listStatusTask);
				})
			apiVersion
				.getListVersions({})
				.then((res)=>res.data)
				.then((data) => {
					const listVersion = data.Content.Versions;
					setVersion(listVersion);
				})
			apiPriority
				.getListPriorities({})
				.then((res)=>res.data)
				.then((data) => {
					const listPriority = data.Content.Priorities;
					setPPriority(listPriority);
				})
			apiTypeDevice
				.getListTypeDevices({})
				.then((res)=>res.data)
				.then((data) => {
					const listTypeDevices = data.Content.TypeDevices;
					setTypeDevices(listTypeDevices);
				})
			apiEnvironment
				.getListEnvironment({})
				.then((res)=>res.data)
				.then((data) => {
					const listEnv = data.Content.Environments;
					setEnv(listEnv);
				})
			apiProject
				.getListProjects({})
				.then((res)=>res.data)
				.then((data) => {
					const listProject = data.Content.Projects;
					setProject(listProject);
				})				
		} catch (error) {
			console.log(error);
		}
	},[])

	if (error === 0) {
		alert("Đã có lỗi");
	}
	// function filter tasks
	const handleSearch = (Code:string,Title: string, Deadline:string,Status: number) => {
		try {
			dispatch(doGetListTasks({
				Code: Code,
				Title: Title,
				Deadline: Deadline,
				Status: Status,
			}))
			.then(unwrapResult)
			.then((data: IResGetListTasks) => {
				setListTask(data.Content.Tasks);
			});
		} catch (error) {
		  	console.log(error);
		}
	  };

    return(
        <div className="task-page">
			<div className="task-page__header">
				<FilterTasks 
				listAccounts={listAccounts} 
				listStatusTask={statusTask}
				listVersion={version}
				ListPriority={priority}
				listTypeDevices={typeDevices}
				listEnv={env}
				listProject={project}
				handleSubmit={handleSearch}
				/>
			</div>
			<div className="task-page__body">
				<TableTasks dataTask={listTask}/>
			</div>
        </div>
    ) 
};
