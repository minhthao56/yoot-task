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
		handleSubmit}
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
			Title:"",
			Status: 0,
			OptionStatus: status,
			OptionProject:optionProject,
			OptionUser:optionUser,
		},
		onSubmit: (values) => {
		  const searchCode = values.Code;
		  const searchTitle = values.Code;
		  const searchStatus = values.Status;
		  handleSubmit(searchCode, searchTitle,searchStatus);
		},
	});
	const handleOnChange = (valueSelect: number) => {
		formik.values.Status = valueSelect;
	};
	const handleRetype = () => {
		window.location.replace("/tasks");
	};
	
	return (
		<div className="filter-tasks">
			<div className="filter-tasks__header">
				<h3 className="filter-tasks__header-title">Tìm kiếm</h3>
				<div className="filter-tasks__header-right">
					<Feature handleOnClick={() => {}} />
				</div>
			</div>
			<div className="filter-tasks__body">
				<form action="" className="filter-tasks__body-form" onSubmit={formik.handleSubmit}>
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
						id ="project" name="project" 
						options={optionProject} handleOnChange={handleOnChange}
						/>
					</div>
					<div className="input-group-task">
						<Input  label="Hạn chót"  type="date" 
						placeholder="Nhap ma code" name="deadline" id="deadline" onChange={formik.handleChange}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Môi trường" id ="env" name="env" 
						 options={optionEnv} handleOnChange={handleOnChange}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Thiết bị" id ="typeDevice" name="typeDevice" 
						 options={optionTypeDevices} handleOnChange={handleOnChange}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Ưu tiên" id ="priority" name="priority"
						 options={optionPriority} handleOnChange={handleOnChange}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Phiên bản đã mở" id ="version" name="version" 
						 options={optionVersion} handleOnChange={handleOnChange}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Phiên bản đã sửa" id ="versionUpdate" name="versionUpdate" 
						options={optionVersion} handleOnChange={handleOnChange}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Trạng thái công việc" id ="statusTask" name="statusTask" 
						 options={optionStatusTask} handleOnChange={handleOnChange}/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Trạng thái" id ="status" name="status"
						 options={formik.values.OptionStatus} handleOnChange={handleOnChange}/>
					</div>
					{handleOnChange}
					<div className="input-group-task">
						<SelectBox label="Người tham gia" id ="user" name="user" 
						 options={optionUser} handleOnChange={handleOnChange}/>
					</div>
				</form>
			</div>

		</div>
	)
};
