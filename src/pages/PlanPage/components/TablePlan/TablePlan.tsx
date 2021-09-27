import { info } from "console";
import React, { Fragment } from "react";
import { RiPencilRulerFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button, Table } from "../../../../components";
import './TablePlan.scss';
const theadTask = [
	"từ ngày","đến ngày","tiêu đề",
	"mô tả","trạng thái",
	"thông tin tạo","thông tin sửa",""
]

export const TablePlan: React.FC<any> = ({dataPlans}) => {
  	// Khong call api tai day chi truyen data props

	return (
		<div className="table-tasks">
			<div className="table-tasks__header">
				<h3 className="table-tasks__header-title">Danh sách kế hoạch</h3>
				<Link to={`/tasks/create`} className="table-tasks__header-right">
					<Button type="submit" isCreate className="btn-search">Tao moi</Button>
				</Link>
			</div>
			<div className="table-tasks__body">
				<Table thead={theadTask} 
					tbody={
						<Fragment>
							{
								dataPlans.map((plan:any,index:number) =>(
									<tr key={index} className="">
										<td>
											
												{plan.FromDate}
											
										</td>
										<td>
											{plan.FromDate}
										</td>
										<td>
											<b>
												{plan.Title}
											</b>
										</td>
										<td>
											{plan.Description}
										</td>
										<td>
											{plan.StatusText}
											
										</td>
										<td>
											<p>

											{plan.CreateUserName}
											</p>
											{plan.CreateDate}
										</td>
										<td>
											<p>

											{plan.UpdateUserName}
											</p>
											{plan.UpdateDate}
										</td>
										
										<td>
											<Link to={`/plans/update/${plan.Id}`} className="bt_style" >
												<button className="bt_style-edit" onClick={() =>{console.log(plan.Id)}}>
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
