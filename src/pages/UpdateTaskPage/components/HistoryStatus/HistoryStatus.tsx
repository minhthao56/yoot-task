import React from 'react'
import { Table } from '../../../../components'

export const HistoryStatus = (tab:any) => {
    return (
        <div className={tab ? "history-status show":"history-status"}>
            <h4 className="image-video__title">Lịch sử chuyển trạng thái </h4>
            <Table
                thead={['Người chuyển','Trạng thái cũ','Trạng thái mới','Thời gian','','','','']}
                tbody={[]}

            />
        </div>
    )
}
