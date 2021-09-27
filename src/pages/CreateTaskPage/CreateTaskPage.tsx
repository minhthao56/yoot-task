import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Button, Input, Loader, SelectBox, Textarea } from '../../components';
import { apiEnvironment, apiPlan, apiPriority, apiProject, apiStatusTask, apiTask } from '../../services';
import { apiTypeDevice } from '../../services/api/apiTypeDevice';
import { apiVersion } from '../../services/api/apiVersion';
import { CommonInfo, PersonJoin } from './components';
import * as Yup from 'yup';
import './CreateTaskPage.scss';
import { unwrapResult } from '@reduxjs/toolkit';
import { doGetListTasks, useAppDispatch, useAppSelector } from '../../redux';

export const CreateTaskPage = () => {
	const dispatch = useAppDispatch();
	const {listTasks} = useAppSelector((state) => state.tasks)
	const [listTask,setListTask] = useState<any>(listTasks);
    const [loadding, setLoadding] = useState(false)



	const [showPersonJoin,setShowPersonJoin] = useState(true);
	const [showCommonInfo,setShowCommonInfo] = useState(false);
	const [statusTask, setStatusTask] = useState([]);
	const [version, setVersion] = useState([]);
	const [priority, setPPriority] = useState([]);
	const [typeDevices,setTypeDevices] = useState([]);
	const [env,setEnv] = useState([]);
	const [project,setProject] = useState([]);

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
	const handleCreateSubmit = (Code:string,Title:string,Deadline:string,Description:string, Status: number)=>{
		// console.log("moi click guide",setSubmitFormCreate(submitFormCreate));
		try {
			apiTask
			.createTask({
				Code:Code,
				Title:Title,
				Deadline:Deadline,
				Description: Description,
				Status: Status,
			})
			.then((res) => res.data)
			.then((tasks) => {
				alert("Thêm Thành Công ");
				window.location.replace("/tasks");
			});
			
		} catch (error) {
			console.log("error here",error);
		}
		console.log('save',Code);
		
		
	}
	
	// console.log("moi click guide",submitFormCreate)
	
	const optionProject:Array<string|number>[] = project.map((item:any)=>{
		return [item.Id, item.Name]
	})
	const optionStatusTask:Array<string|number>[] = statusTask.map((item:any)=>{
		return [item.Id, item.Title]
	})
	const optionVersion:Array<string|number>[] = version.map((item:any)=>{
		return [item.Id, item.Title]
	})
	const optionPriority:Array<string|number>[] = priority.map((item:any)=>{
		return [item.Id, item.Title]
	})
	const optionTypeDevices:Array<string|number>[] = typeDevices.map((item:any)=>{
		return [item.Id, item.Title]
	})
	const optionEnv:Array<string|number>[] = env.map((item:any)=>{
		return [item.Id, item.Title]
	})
    const formik = useFormik({
		initialValues: {
			Code: '',
			Title: '',
			Description: '',
			Deadline:'',
			Status:10,
			OptionStatus: [
				//[value-option, content-option]
				[10, "Hoạt Động"],
				[90, "Ngưng Hoạt Động"],
			],
			Projectid: 0,
			Environment: 0,
			Typedevice: 0,
			Priorityid: 0,
			Openedversion: 0,
			Fixedversion: 0,
			Statustaskid: 0,
			TaskUsers:[{
				Id: 10,
				UserId: 2,
				TypeTaskUserId: 0
			}],
			LogTaskChangeStatuses:[{
				Id: 0,
				StatusOldText: "ngung",
				StatusNewText: "hoat dong",
				CreateUserName:"2021-10-01T02:23",
				CreateDate: "2021-10-01T02:23"
			}],
			TaskComments:[{
				Id: 0,
				CreateUserName: "2021-10-01T02:23",
				CreateDate: "2021-10-01T02:23",
				Message: "ba labala"
			}],

		},
		onSubmit: values => {
			setLoadding(true);
			alert(JSON.stringify(values, null, 2));
			const Code = values.Code;
			const Title = values.Title;
			const Deadline = values.Deadline;
			const Description = values.Description;
			const Status = values.Status;
			const Projectid = values.Projectid;
			const Environment = values.Environment;
			try {
				apiTask
					.createTask({
						Code:Code,
						Title:Title,
						Deadline:Deadline,
						Description: Description,
						Status: Status,
						Projectid: Projectid,
						Environment: Environment,
						Typedevice: 5,
						Priorityid: 3,
						Openedversion: 4,
						Fixedversion: 1,
						Statustaskid: 1,
						TaskUsers:[{
							Id: 10,
							UserId: 2,
							TypeTaskUserId: 10
						}],
						LogTaskChangeStatuses:[{
							Id: 0,
							StatusOldText: "ngung",
							StatusNewText: "hoat dong",
							CreateUserName:"admin",
							CreateDate: "2021-10-01T02:23"
						}],
						TaskComments:[{
							Id: 0,
							CreateUserName: "admin",
							CreateDate: "2021-10-01T02:23",
							Message: "ba labala"
						}],

					})
					.then((tasks) => {
						alert("Thêm Thành Công ");
						setLoadding(true);

						window.location.replace("/tasks");
					});
				
				} catch (error) {
					console.log("error here",error);
				}
			// onSubmitForm(Code,Title,Deadline,Description,Status);
	  	},
		
	});
	const handleOnChange = (valueSelect: number) => {
		formik.values.Status = valueSelect;
	};
	const handleOnChangeProject = (valueSelect: number) => {
		formik.values.Projectid = valueSelect;
	};
	const handleOnChangeEnvironment = (valueSelect: number) => {
		formik.values.Environment = valueSelect;
	};

    return (
		<>
		<Loader loadding = {loadding}/>

		<form className="create-task" onSubmit={formik.handleSubmit}>
			<div className="create-task__header">
				<h3 className="create-task__header-title">Tạo công việc mới</h3>
				<div className="create-task__header-right">
					<Button type="submit" isUpdate className="">Cập nhập</Button>
					<Button type="submit" isSave className="">Lưu</Button>
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
						{/* <CommonInfo tab={showPersonJoin}
						listStatusTask={statusTask}
						listVersion={version}
						ListPriority={priority}
						listTypeDevices={typeDevices}
						listEnv={env}
						listProject={project}
						onSubmitForm={handleCreateSubmit}
						
						/> */}
						<div className={showPersonJoin ? "common-info show":"common-info"}>
							{/* <Button type="submit" isSave className="">Lưu</Button> */}
							<h4 className="common-info__title">Thông tin chung </h4>
							<form className="common-info__form">
								<div className="common-info__form-row">
									<div className="common-info__form-input">
										<Input label="Mã code" type="text" 
										placeholder="Nhập mã code" 
										id ="code" name="Code" 
										onChange={formik.handleChange}
										value={formik.values.Code}
										error={formik.touched.Code && formik.errors.Code}
										/>
									</div>
									{formik.values.Code}
									<div className="common-info__form-input">
										<SelectBox label="Dự án" id ="Projectid" name="Projectid"  options={optionProject}
										handleOnChange={handleOnChangeProject}
										/>
									</div>
									<div className="common-info__form-input">
										<SelectBox label="Trạng thái công việc" id ="statusTask" name="statusTask" 
										options={optionStatusTask} 
										handleOnChange={handleOnChange}
										/>
									</div>
								</div>
									<Input label="Tiêu đề" type="text" name="Title" 
										placeholder="Nhập tiêu đề" 
										onChange={formik.handleChange}
										value={formik.values.Title}
										error={formik.touched.Title && formik.errors.Title}
									/>
									<Textarea label="Mô tả" placeholder="Nhập mô tả" 
										id="textarea"
										name="Description"
										onChange={formik.handleChange}
										value={formik.values.Description}
										error={formik.touched.Description && formik.errors.Description}
								/>
							</form>
							<h4 className="common-info__title">Thông tin bổ sung</h4>
							<form className="common-info__form-additional">
								<div className="common-info__form-input">
									<Input label="Hạn chót" type="datetime-local" placeholder=""
									name="Deadline"
									id="Deadline"
									value={formik.values.Deadline}
									onChange={formik.handleChange}
									/>
								</div>
								<div className="common-info__form-input">
									<SelectBox label="Ưu tiên" id ="priority" name="priority"  
									options={optionPriority} handleOnChange={handleOnChange}
									/>
								</div>
								<div className="common-info__form-input">
									<SelectBox label="Môi Trường" id ="Environment" name="Environment"  
									options={optionEnv} handleOnChange={handleOnChangeEnvironment}/>
								</div>
								<div className="common-info__form-input">
									<SelectBox label="Phiên bản đã mở" id ="version" name="version"  
									options={optionVersion} handleOnChange={handleOnChange}/>
								</div>
								<div className="common-info__form-input">
									<SelectBox label="Phiên bản sửa" id ="versionUpdate" name="versionUpdate"  
									options={optionVersion} handleOnChange={handleOnChange}/>
								</div>
								<div className="common-info__form-input">
									<SelectBox label="Thiết bị" id ="typeDevice" name="typeDevice"  
									options={optionTypeDevices} handleOnChange={handleOnChange}/>
								</div>
								<div className="common-info__form-input">
									<SelectBox label="Trạng thái" id ="status" name="status"  
									options={formik.values.OptionStatus} handleOnChange={handleOnChange}/>
								</div>
							</form>
						</div>
						
						<PersonJoin tab={showCommonInfo}

						/>

					</div>
				</div>
			</div>
			
		</form>
		</>
    )
}
