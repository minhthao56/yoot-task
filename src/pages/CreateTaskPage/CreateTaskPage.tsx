import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Button } from '../../components';
import { apiEnvironment, apiPriority, apiProject, apiStatusTask } from '../../services';
import { apiTypeDevice } from '../../services/api/apiTypeDevice';
import { apiVersion } from '../../services/api/apiVersion';
import { CommonInfo, PersonJoin } from './components';
import './CreateTaskPage.scss';

export const CreateTaskPage = () => {
	const [showPersonJoin,setShowPersonJoin] = useState(true);
	const [showCommonInfo,setShowCommonInfo] = useState(false);
	const [statusTask, setStatusTask] = useState([]);
	const [version, setVersion] = useState([]);
	const [priority, setPPriority] = useState([]);
	const [typeDevices,setTypeDevices] = useState([]);
	const [env,setEnv] = useState([]);
	const [project,setProject] = useState([]);
	const [submitFormCreate,setSubmitFormCreate] = useState(false);
	// function handler tab
	const handleShowTabPerson = ()=>{
		if(showPersonJoin === false){
			setShowCommonInfo(false);
			setShowPersonJoin(true);
		}
		if(showCommonInfo === true){
			setShowCommonInfo(false);
		}
	}
	const handleShowTabJoin = ()=>{
		if(showPersonJoin === true){
			setShowPersonJoin(false);
			setShowCommonInfo(true);
		}
	}
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
	// 
	const submitForm = ()=>{
		// console.log("moi click guide",setSubmitFormCreate(submitFormCreate));
		return setSubmitFormCreate(true);
	}
	// console.log("moi click guide",submitFormCreate)

    return (
		<Formik
			initialValues={{ 

			}}
			onSubmit={(values)=>{
				console.log("moi submit form xong",values);
			}}
		>
			{({handleSubmit})=>(

				<form className="create-task" onSubmit={handleSubmit}>
					<div className="create-task__header">
						<h3 className="create-task__header-title">Tạo công việc mới</h3>
						<div className="create-task__header-right">
							<Button type="submit" isUpdate className="">Cập nhập</Button>
							<Button type="submit" isSave className="" handleOnClick={submitForm}>Lưu</Button>
							<Button type="submit" isCancel className="">Hủy</Button>
						</div>
					</div>
					<div className="create-task__body">
						<div className="nav-tab">
							<div className="nav-tab__header">
								<span  className={showPersonJoin === true ? 'active':''} onClick={() =>{handleShowTabPerson()}}>Thông tin chung</span>
								<span  className={showCommonInfo === true ? 'active':''} onClick={() =>{handleShowTabJoin()}}>Người tham gia</span>
							</div>
							<div className="nav-tab__content">
								<CommonInfo tab={showPersonJoin}
								listStatusTask={statusTask}
								listVersion={version}
								ListPriority={priority}
								listTypeDevices={typeDevices}
								listEnv={env}
								listProject={project}
								formSubmit={submitFormCreate}
								onSubmit={handleSubmit}
								
								/>
								<PersonJoin tab={showCommonInfo}

								/>

							</div>
						</div>
					</div>
					
				</form>
			)}
		</Formik>
    )
}
