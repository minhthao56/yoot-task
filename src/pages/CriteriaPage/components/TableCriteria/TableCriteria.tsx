import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "../../../../components";
import './TableCriteria.scss';
const theadTask = [
	"tiêu đề",
	"mô tả","trạng thái",
	"thông tin tạo","thông tin sửa",""
]



export const TableCriteria: React.FC = () => {
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
