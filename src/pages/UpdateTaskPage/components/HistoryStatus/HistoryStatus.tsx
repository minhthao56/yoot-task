import React, { Fragment } from 'react'
import { Table } from '../../../../components'

export const HistoryStatus:React.FC<IPropDataDetailTask> = ({dataDetailTask}) => {
    return (
        <div className={`history-status show":"history-status`}>
            <h4 className="image-video__title">Lịch sử chuyển trạng thái </h4>
            <Table
                thead={['Người chuyển','Trạng thái cũ','Trạng thái mới','Thời gian','','','','']}
                tbody={
                    <Fragment>
                        {
                            dataDetailTask.LogTaskChangeStatuses.map((item:any) =>(
                                    <tr key={item.Id} className="">
                                        <td>
                                            <b>
                                                {item.CreateUserName}
                                            </b>
                                        </td>
                                        <td>
                                            {item.StatusOldText}
                                        </td>
                                        <td>
                                            {item.StatusNewText}
                                        </td>
                                        <td>
                                            {item.CreateDate}
                                        </td>
                                    </tr>
                            ))
                        }
                    </Fragment>
                }

            />
        </div>
    )
}
