import { unwrapResult } from '@reduxjs/toolkit';
import { error } from 'console';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button } from '../../components';
import { doGetDetailTask, doGetListAccounts, useAppDispatch, useAppSelector } from '../../redux';
import { apiEnvironment, apiPriority, apiProject, apiStatusTask } from '../../services';
import { apiTypeDevice } from '../../services/api/apiTypeDevice';
import { apiVersion } from '../../services/api/apiVersion';
import { Comment, CommonInfo, HistoryStatus, ImageVideo, PersonJoin, Tab, TabNav } from './components';
import './UpdateTaskPage.scss';

export const UpdateTaskPage = () => {
	const {Id}:any = useParams();
	const [selected,setShowSelected] = useState('Thông tin chung');
	const dispatch = useAppDispatch();
	const {detailTask} = useAppSelector((state) => state.tasks);
	const [updateDetailTask,setDetailTask] = useState<Array<IResDetailTask>>(detailTask);
	// get api 
	const [statusTask, setStatusTask] = useState([]);
	const [version, setVersion] = useState([]);
	const [priority, setPPriority] = useState([]);
	const [typeDevices,setTypeDevices] = useState([]);
	const [env,setEnv] = useState([]);
	const [project,setProject] = useState([]);
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
	}, [dispatch]);	
	
	// lay api 
	useEffect(() => {
		try {
			apiStatusTask
				.getListStatusTasks({})
				.then((res)=>res.data)
				.then((data) => {
					const listStatusTask = data.Content.StatusTasks;
					setStatusTask(listStatusTask);
				});
			apiVersion
				.getListVersions({})
				.then((res)=>res.data)
				.then((data) => {
					const listVersion = data.Content.Versions;
					setVersion(listVersion);
				});
			apiPriority
				.getListPriorities({})
				.then((res)=>res.data)
				.then((data) => {
					const listPriority = data.Content.Priorities;
					setPPriority(listPriority);
				});
			apiTypeDevice
				.getListTypeDevices({})
				.then((res)=>res.data)
				.then((data) => {
					const listTypeDevices = data.Content.TypeDevices;
					setTypeDevices(listTypeDevices);
				});
			apiEnvironment
				.getListEnvironment({})
				.then((res)=>res.data)
				.then((data) => {
					const listEnv = data.Content.Environments;
					setEnv(listEnv);
				});
			apiProject
				.getListProjects({})
				.then((res)=>res.data)
				.then((data) => {
					const listProject = data.Content.Projects;
					setProject(listProject);
				});


				
		} catch (error) {
			console.log(error);
		}
	},[]);
	



	useEffect(()=>{
		dispatch(doGetDetailTask({Id:Id}))
			.then(unwrapResult)
			.then((res: IResGetDetailTask) => {
				setDetailTask(res.Content.Task);
			})
			.catch((err) => {
				alert("Đã có lỗi");
			});
	},[dispatch,Id])
	
	console.log('chi tiet task',detailTask);


	// function handler tab
	const setSelected = (tab:any) =>{
		setShowSelected(tab);
	}
    return (
        <form className="update-task" onSubmit={(e)=> e.preventDefault()}>
			<div className="update-task__header">
				<h3 className="update-task__header-title">Chỉnh sửa công việc</h3>
				<div className="update-task__header-right">
					<Button type="submit" isSave className="">Lưu</Button>
					<Button type="submit" isCancel className="">Hủy</Button>
				</div>
			</div>
			<div className="update-task__body">
				<div className="nav-tab">
					<TabNav tabs={['Thông tin chung','Hình ảnh/Video','Người tham gia','Bình luận','Lịch sử chuyển trạng thái']}
						selected={selected} setSelected={setSelected }
					>
						<div className="nav-tab__content">
							<Tab isSelected={selected === 'Thông tin chung' }>
								<CommonInfo dataDetailTask={detailTask}
								listStatusTask={statusTask}
								listVersion={version}
								ListPriority={priority}
								listTypeDevices={typeDevices}
								listEnv={env}
								listProject={project}
								
								/>
							</Tab>
							<Tab isSelected={selected === 'Người tham gia' }>
								<PersonJoin 
								dataDetailTask={updateDetailTask}
								listAccounts= {accs}
								/>
							</Tab>
							<Tab isSelected={selected === 'Hình ảnh/Video' }>
								<ImageVideo dataImage={updateDetailTask}/>
							</Tab>
							<Tab isSelected={selected === 'Bình luận' }>
								<Comment dataComment={updateDetailTask} />
							</Tab>
							<Tab isSelected={selected === 'Lịch sử chuyển trạng thái' }>
								<HistoryStatus dataDetailTask={updateDetailTask}/>
							</Tab>
						</div>
					</TabNav>
				</div>
			</div>
            
        </form>
    )
}
