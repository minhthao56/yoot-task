import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { RiPencilRulerFill } from "react-icons/ri";
import { Actions, Button, Table } from "../../../../components";
import './TableTasks.scss';
const theadTask = [
	"mã code","tiêu đề",
	"người tham gia","trạng thái công viêc",
	"thông tin","trạng thái",
	"thông tin tạo","thông tin sửa",""
]

interface IPropsData{
	dataTask:any
}

export const TableTasks: React.FC<IPropsData> = ({dataTask}) => {
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
							{
								dataTask.map((task:any,index:number) =>(
									<tr key={index} className="">
										<td>
											<b>
												{task.code}
											</b>
										</td>
										<td>
											{task.title}
										</td>
										<td>
											{task.personJoin}
										</td>
										<td>
											<b>
												{task.statusWork}
											</b>
										</td>
										<td>
											<span>Du an <b>{task.info}</b> </span>
											<br />
											<span>Du an <b>{task.info}</b> </span>
										</td>
										<td>
											{task.status}
										</td>
										<td>
											{task.infoCreated}
										</td>
										<td>
											{task.infoUpdate}
										</td>
										<td>
											<Link to={`/tasks/update/${task.Id}`} className="bt_style" target="_blank">
												<button className="bt_style-edit" onClick={() =>{console.log(task.Id)}}>
													<RiPencilRulerFill />
												</button>
											</Link>											
										</td>
									</tr>
								))
							}
						</Fragment>
					}
				/>
				
			</div>
		</div>
	)
};
