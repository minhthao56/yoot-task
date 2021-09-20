import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { RiPencilRulerFill } from "react-icons/ri";
import { Button, Table } from "../../../../components";
import './TableTasks.scss';
const theadTask = [
	"mã code","tiêu đề",
	"người tham gia","trạng thái công viêc",
	"thông tin","trạng thái",
	"thông tin tạo","thông tin sửa",""
]

interface IPropsData{
	dataTask:Array<ResTask>
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
												{task.Code}
											</b>
										</td>
										<td>
											{task.Title}
										</td>
										<td>
											{task.JoinUserNames}
										</td>
										<td>
											<b>
												{task.StatusTaskText}
											</b>
										</td>
										<td>
											<p>Dự án: <b>{task.ProjectText}</b> </p>
											<p>Hạn chót: <b>{task.Deadline}</b> </p>
											<p>Môi trường: <b>{task.EnvironmentText}</b> </p>
											<p>Thiết bị: <b>{task.TypeDeviceText}</b> </p>
											<p>Ưu tiên :<b>{task.PriorityText}</b> </p>
										</td>
										<td>
											{task.StatusText}
										</td>
										<td>
											<p>
												{task.CreateUserName}
											</p>
											<p>
												{task.CreateDate}
											</p>
										</td>
										<td>
											<p>
												{task.UpdateUserName}
											</p>
											<p>
												{task.UpdateDate}
											</p>
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
