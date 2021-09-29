import { useFormik } from "formik";
import React from "react";
import { Feature, Input, SelectBox} from "../../../../components";

import "./FilterTasks.scss";
interface IPropsOptions{
	listAccounts:any,
	listStatusTask:any,
	listVersion:any,
	ListPriority:any,
	listTypeDevices:any,
	listEnv:any,
	listProject:Array<number | string>,
}

export const FilterTasks:React.FC<IPropsOptions & IFilterTask> = (
	{
		listProject,
		listEnv,
		listTypeDevices,
		ListPriority,
		listVersion,
		listAccounts,
		listStatusTask,
		handleSubmit
	}
) => {
	const all = [{Id:0,Name:"Tất cả"}]
	const title = [{Id:0,Title:"Tất cả"}]
	
	// get api for select option
	const concatUser =  [...all,...listAccounts];
	const concatProject =  [...all,...listProject];
	const concatPriority =  [...title,...ListPriority];
	const concatVersion =  [...title,...listVersion];
	const concatTypeDevices =  [...title,...listTypeDevices];
	const concatStatus =  [...title,...listStatusTask];
	const concatEnv =  [...title,...listEnv];

	
	const optionUser = concatUser.map((item:any)=>{
		return [item.Id, item.Name]
	})
	const optionProject = concatProject.map((item:any)=>{
		return [item.Id, item.Name]
	})
	const optionStatusTask = concatStatus.map((item:any)=>{
		return [item.Id, item.Title]
	})
	const optionVersion = concatVersion.map((item:any)=>{
		return [item.Id, item.Title]
	})
	const optionPriority = concatPriority.map((item:any)=>{
		return [item.Id, item.Title]
	})
	const optionTypeDevices = concatTypeDevices.map((item:any)=>{
		return [item.Id, item.Title]
	})
	const optionEnv = concatEnv.map((item:any)=>{
		return [item.Id, item.Title]
	})


	const status = [
		//[value-option, content-option]
		[10, "Hoạt Động"],
		[90, "Ngưng Hoạt Động"],
	];
	// console.log(concatProject);
	const formik = useFormik({
		initialValues: {
			Code: "",
			Title: "",
			Deadline:"",
			Environment:0,
			TypeDevice:0,
			FixedVersion:0,
			OpenedVersion:0,
			Status:0,
			Project:0,
			Priority:0,
			StatusTask:0,
			Page:0,
			LoginSuccess:0,
			User:0,
			OptionStatus: status,
			OptionProject:optionProject,
			OptionUser:optionUser,
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
			const searchCode = values.Code;
			const searchTitle = values.Title;
			const searchDeadline = values.Deadline;
			const searchStatus = values.Status;
			const searchEnvironment = values.Environment;
			const searchTypeDevice = values.TypeDevice;
			const searchFixedVersion = values.FixedVersion;
			const searchOpenedVersion = values.OpenedVersion;
			const searchProject = values.Project;
			const searchPriority = values.Priority;
			const searchStatusTask = values.StatusTask;
			const searchUser = values.User;
			handleSubmit(
				searchCode, searchTitle, searchDeadline,
				searchStatus,searchEnvironment,searchTypeDevice,
				searchFixedVersion,searchOpenedVersion,searchProject,
				searchPriority,searchStatusTask,searchUser
			);
		},
	});
	const handleOnChange = (valueSelect: number) => {
		formik.values.Status = valueSelect;
	};
	const handleOnChangeEnv = (valueSelect: number) => {
		formik.values.Environment = valueSelect;
	};
	const handleOnChangeTypeDevice = (valueSelect: number) => {
		formik.values.TypeDevice = valueSelect;
	};
	const handleOnChangeFixVersion = (valueSelect: number) => {
		formik.values.FixedVersion = valueSelect;
	};
	const handleOnChangeOpenVersion = (valueSelect: number) => {
		formik.values.OpenedVersion = valueSelect;
	};
	const handleOnChangeProject = (valueSelect: number) => {
		formik.values.Project = valueSelect;
	};
	const handleOnChangePriority = (valueSelect: number) => {
		formik.values.Priority = valueSelect;
	};
	const handleOnChangeStatusTask = (valueSelect: number) => {
		formik.values.StatusTask = valueSelect;
	};
	const handleOnChangeUser = (valueSelect: number) => {
		formik.values.User = valueSelect;
	};
	const handleRetype = () => {
		window.location.replace("/tasks");
	};
	
	return (
		<form className="filter-tasks" onSubmit={formik.handleSubmit}>
			<div className="filter-tasks__header">
				<h3 className="filter-tasks__header-title">Tìm kiếm</h3>
				<div className="filter-tasks__header-right">
					<Feature handleOnClick={handleRetype} />
				</div>
			</div>
			<div className="filter-tasks__body">
				<div  className="filter-tasks__body-form">
					<div className="input-group-task">
						<Input label="Mã code" 
						type="text" placeholder="Nhập mã code" 
						name="Code" 
						id="Code"
						onChange={formik.handleChange}
						value={formik.values.Code}
						error={formik.touched.Code && formik.errors.Code}
						/>
					</div>
					<div className="input-group-task">
						<Input label="Tiêu đề" type="text" placeholder="Nhập tiêu đề" 
						value={formik.values.Title}
						name="Title" id="Title" 
						onChange={formik.handleChange} 
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Dự án" 
						id ="Project" name="Project"
						options={optionProject} handleOnChange={handleOnChangeProject}
						/>
					</div>
					<div className="input-group-task">
						<Input  label="Hạn chót"  type="date" 
						value={formik.values.Deadline}
						placeholder="Nhap ma code" name="Deadline" id="deadline" onChange={formik.handleChange}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Môi trường" id ="Environment" name="Environment" 
						 options={optionEnv} handleOnChange={handleOnChangeEnv}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Thiết bị" id ="TypeDevice" name="TypeDevice" 
						 options={optionTypeDevices} handleOnChange={handleOnChangeTypeDevice}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Ưu tiên" id ="Priority" name="Priority"
						 options={optionPriority} handleOnChange={handleOnChangePriority}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Phiên bản đã mở" id ="OpenedVersion" name="OpenedVersion" 
						 options={optionVersion} handleOnChange={handleOnChangeOpenVersion}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Phiên bản đã sửa" id ="FixedVersion" name="FixedVersion" 
						options={optionVersion} handleOnChange={handleOnChangeFixVersion}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Trạng thái công việc" id ="StatusTask" name="StatusTask" 
						 options={optionStatusTask} handleOnChange={handleOnChangeStatusTask}/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Trạng thái" id ="status" name="status"
						 options={formik.values.OptionStatus} handleOnChange={handleOnChange}/>
					</div>

					<div className="input-group-task">
						<SelectBox label="Người tham gia" id ="User" name="User" 
						 options={optionUser} handleOnChange={handleOnChangeUser}/>
					</div>
				</div>
			</div>

		</form>
	)
};
