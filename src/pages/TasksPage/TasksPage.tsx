import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { doGetListAccounts, useAppDispatch, useAppSelector } from "../../redux";
import { apiEnvironment, apiPriority, apiProject, apiStatusTask, apiTask } from "../../services";
import { apiTypeDevice } from "../../services/api/apiTypeDevice";
import { apiVersion } from "../../services/api/apiVersion";
import { FilterTasks, TableTasks } from "./components";
import "./TasksPage.scss";

// data mau dung thu
const dataTask = [
	{
		Id:79,
		Code:"110022",
		Title:"Khi nhập giờ hẹn lịch phỏng vấn thì click vào vị trí ngày để xoá sẽ k ảnh hưởng đến tháng và năm (UV và NTD)",
		PersonJoin:"nam quoc",
		StatusWork:"to do",
		Info:"Dự án: Việc làm NTD (Web)",
		Status:"hoat dong",
		InfoCreated:"nam quoc 20/20/2021",
		InfoUpdate:"nam quoc 20/20/2021 2:12 pm",
	},
	{
		Id:77,
		Code:"110056",
		Title:"Đang bị lỗi k nhập tiêu đề là k lưu lại, cần có dòng đỏ dưới mỗi tiêu đề",
		PersonJoin:"nam quoc",
		StatusWork:"to do",
		Info:"Dự án: Việc làm NTD (Web)",
		Status:"hoat dong",
		InfoCreated:"nam quoc 20/20/2021",
		InfoUpdate:"nam quoc 20/20/2021 2:12 pm",
	},
	{
		Id:75,
		Code:"110089",
		Title:"NTD chưa nhận được thông báo ở chuông nên k biết được có ng mới ứng tuyển",
		PersonJoin:"nam quoc",
		StatusWork:"to do",
		Info:"Dự án: Việc làm NTD (Web)",
		Status:"hoat dong",
		InfoCreated:"nam quoc 20/20/2021",
		InfoUpdate:"nam quoc 20/20/2021 2:12 pm",
	},
]
export const TasksPage = () => {
  	const dispatch = useAppDispatch();
	const { error, listAccounts, isLoading } = useAppSelector(
		(state) => state.account
	);
	const [accs, setAccs] = useState<Array<ResAccount>>([]);
	const [statusTask, setStatusTask] = useState([]);
	const [version, setVersion] = useState([]);
	const [priority, setPPriority] = useState([]);
	const [typeDevices,setTypeDevices] = useState([]);
	const [env,setEnv] = useState([]);
	const [project,setProject] = useState([]);
	const [listTask,setListTask] = useState<Array<IResTask>>([]);

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
	// console.log("bala",project);
	const handleSearch = () => {
		//distch 
		try {
			const data = dataTask
			setListTask(data);
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
