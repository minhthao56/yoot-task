import React from "react";
import { Feature, Input, SelectBox} from "../../../../components";
import "./FilterTasks.scss";
const select = [
	{
		value: "1",
		label:"tat ca"
	},
	{
		value: "2",
		label:"nguoi"
	},
	{
		value: "3",
		label:"ao ma the"
	},
]
export const FilterTasks = () => {
	return (
		<div className="filter-tasks">
			<div className="filter-tasks__header">
				<h3 className="filter-tasks__header-title">Tìm kiếm</h3>
				<div className="filter-tasks__header-right">
					<Feature />
				</div>
			</div>
			<div className="filter-tasks__body">
				<form action="" className="filter-tasks__body-form">
					<div className="input-group-task">
						<Input label="Mã code" 
						type="text" placeholder="Nhập mã code" 
						name="code" 
						id="code"
						onChange={()=>{}}
						
						/>
					</div>
					<div className="input-group-task">
						<Input label="Tiêu đề" type="text" placeholder="Nhập tiêu đề" name="title" id="title" onChange={()=>{}}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Dự án" 
						id ="project" name="project" 
						value="allProject" onChange={()=>{}} 
						option={select}
						/>
					</div>
					<div className="input-group-task">
						<Input  label="Hạn chót"  type="date" placeholder="Nhap ma code" name="code" id="code" onChange={()=>{}}
						/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Môi trường" id ="env" name="env" value="allEnv"/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Thiết bị" id ="typeDevice" name="typeDevice" value="typeDevice"/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Ưu tiên" id ="" name="" value=""/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Phiên bản đã mở" id ="" name="" value=""/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Phiên bản đã sửa" id ="" name="" value=""/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Trạng thái công việc" id ="" name="" value=""/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Trạng thái" id ="" name="" value=""/>
					</div>
					<div className="input-group-task">
						<SelectBox label="Người tham gia" id ="" name="" value=""/>
					</div>
				</form>
			</div>

		</div>
	)
};
