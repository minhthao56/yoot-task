import React from 'react'
import { Button, Input, Table } from '../../../../components';
import './Comment.scss';

export const Comment = (tab:any) => {
    return (
        <div className="comment">
            <h4 className="image-video__title">Các bình luận </h4>
            <form action="" className="comment-form">
                <Input placeholder="Nhập phản hồi"/>
                <Button className="btn-submit">Gửi</Button>
            </form>
            <Table 
                thead={['Người bình luận','Thời gian','Nội dung','','','','','']}
                tbody={[]}

            />
        </div>
    )
}
