import { useFormik } from "formik";
import React from "react";
import { Feature, Input, SelectBox} from "../../../../components";

import "./FilterTasks.scss";
interface IPropsOptions{
	listAccounts:any
}
export const FilterTasks:React.FC<IPropsOptions & IFilterTask> = ({listAccounts,handleSubmit}) => {
	const formik = useFormik({
		initialValues: {
		  Code: "",
		  Title:"",
		  Status: 0,
		  Options: [
			//[value-option, content-option]
			[0, "Tất cả"],
			[10, "Hoạt Động"],
			[90, "Ngưng Hoạt Động"],
		  ],
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
		window.location.replace("/version");
	  };
	
	const optionUser = listAccounts.map((item:any)=>{
		return [item.Id, item.Name]
	})
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
						name="code" 
						id="code"
						value={formik.values.Code}
          				onChange={formik.handleChange}
						error=""
						
						/>
					</div>
					{formik.values.Code}
					<div className="input-group-task">
						<Input label="Tiêu đề" type="text" placeholder="Nhập tiêu đề" 
						value={formik.values.Title}
						name="title" id="title" onChange={formik.handleChange} 
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Dự án" 
						id ="project" name="project" 
						value="" options={optionUser} handleOnChange={()=>{}}
						/>
					</div>
					<div className="input-group-task">
						<Input  label="Hạn chót"  type="date" 
						placeholder="Nhap ma code" name="code" id="code" onChange={()=>{}}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Môi trường" id ="env" name="env" value="allEnv" 
						 options={[]} handleOnChange={()=>{}}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Thiết bị" id ="typeDevice" name="typeDevice" value="typeDevice"
						 options={[]} handleOnChange={()=>{}}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Ưu tiên" id ="" name="" value=""
						 options={[]} handleOnChange={()=>{}}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Phiên bản đã mở" id ="" name="" value=""
						 options={[]} handleOnChange={()=>{}}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Phiên bản đã sửa" id ="" name="" value=""
						options={[]} handleOnChange={()=>{}}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Trạng thái công việc" id ="" name="" value=""
						 options={[]} handleOnChange={()=>{}}/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Trạng thái" id ="" name="" value=""
						 options={[]} handleOnChange={()=>{}}/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Người tham gia" id ="" name="" value=""
						 options={[]} handleOnChange={()=>{}}/>
					</div>
				</form>
			</div>

		</div>
	)
};
