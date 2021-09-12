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
const tbody = [
	{
		code:"110022",
		title:"Khi nhập giờ hẹn lịch phỏng vấn thì click vào vị trí ngày để xoá sẽ k ảnh hưởng đến tháng và năm (UV và NTD)",
		personJoin:"nam quoc",
		statusWork:"to do",
		info:"Dự án: Việc làm NTD (Web)",
		status:"hoat dong",
		infoCreated:"nam quoc 20/20/2021",
		infoUpdate:"nam quoc 20/20/2021 2:12 pm",
	},
	{
		code:"110056",
		title:"Đang bị lỗi k nhập tiêu đề là k lưu lại, cần có dòng đỏ dưới mỗi tiêu đề",
		personJoin:"nam quoc",
		statusWork:"to do",
		info:"Dự án: Việc làm NTD (Web)",
		status:"hoat dong",
		infoCreated:"nam quoc 20/20/2021",
		infoUpdate:"nam quoc 20/20/2021 2:12 pm",
	},
	{
		code:"110067",
		title:"NTD chưa nhận được thông báo ở chuông nên k biết được có ng mới ứng tuyển",
		personJoin:"nam quoc",
		statusWork:"to do",
		info:"Dự án: Việc làm NTD (Web)",
		status:"hoat dong",
		infoCreated:"nam quoc 20/20/2021",
		infoUpdate:"nam quoc 20/20/2021 2:12 pm",
	},
]
	

export const TableTasks = () => {
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
								tbody.map((task,index) =>(
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
											<Link to={`/tasks/update/${task.code}`} className="bt_style" target="_blank">
												<button className="bt_style-edit" onClick={() =>{console.log(task.code)}}>
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
