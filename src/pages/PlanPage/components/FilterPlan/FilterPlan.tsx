import { useFormik } from "formik";
import React from "react";
import { Feature, Input, SelectBox} from "../../../../components";

import "./FilterPlan.scss";


export const FilterPlan:React.FC = () => {
	
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
		},
		onSubmit: (values) => {
		  const searchCode = values.Code;
		  const searchTitle = values.Code;
		  const searchStatus = values.Status;
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
						<Input  label="Từ ngày"  type="date" 
						placeholder="Nhap ma code" name="deadline" id="deadline" onChange={formik.handleChange}
						/>
					</div>
					<div className="input-group-task">
						<Input  label="Đến ngày"  type="date" 
						placeholder="Nhap ma code" name="deadline" id="deadline" onChange={formik.handleChange}
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
						<SelectBox label="Trạng thái" id ="status" name="status"
						 options={formik.values.OptionStatus} handleOnChange={handleOnChange}/>
					</div>
					
				</form>
			</div>

		</div>
	)
};
