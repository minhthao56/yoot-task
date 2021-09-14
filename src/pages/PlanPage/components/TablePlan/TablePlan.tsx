import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { RiPencilRulerFill } from "react-icons/ri";
import { Actions, Button, Table } from "../../../../components";
import './TablePlan.scss';
const theadTask = [
	"từ ngày","đến ngày","tiêu đề",
	"mô tả","trạng thái",
	"thông tin tạo","thông tin sửa",""
]

export const TablePlan: React.FC = () => {
  	// Khong call api tai day chi truyen data props

	return (
		<div className="table-tasks">
			<div className="table-tasks__header">
				<h3 className="table-tasks__header-title">Danh sách công việc</h3>
				<Link to={`/tasks/create`} className="table-tasks__header-right">
					<Button type="submit" isCreate className="btn-search">Tao moi</Button>
				</Link>
			</div>
			<div className="table-tasks__body">
				<Table thead={theadTask} 
					tbody={
						<Fragment>
						</Fragment>
					}
				/>
				
			</div>
		</div>
	)
};
