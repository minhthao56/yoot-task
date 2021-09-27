import { useFormik } from "formik";
import React from "react";
import { Feature, Input, SelectBox} from "../../../../components";

import "./FilterCriteria.scss";

export const FilterCriteria:React.FC = () => {
	
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
		<div className="filter-criteria">
			<div className="filter-criteria__header">
				<h3 className="filter-criteria__header-title">Tìm kiếm</h3>
				<div className="filter-criteria__header-right">
					<Feature handleOnClick={() => {}} />
				</div>
			</div>
			<div className="filter-criteria__body">
				<form action="" className="filter-criteria__body-form" onSubmit={formik.handleSubmit}>
					
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
