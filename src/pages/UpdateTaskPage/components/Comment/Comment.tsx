import React, { Fragment } from 'react'
import { Button, Input, Table } from '../../../../components';
import './Comment.scss';


export const Comment:React.FC<IPropDataDetailTaskComments> = ({dataComment}) => {
    // const dataC = dataComment.map((item:any) => item.Id);
    console.log('binh luan',dataComment.TaskComments);
    return (
        <div className="comment">
            <h4 className="image-video__title">Các bình luận </h4>
            <form action="" className="comment-form">
                <Input placeholder="Nhập phản hồi"/>
                <Button className="btn-submit">Gửi</Button>
            </form>
            <Table 
                thead={['Người bình luận','Thời gian','Nội dung','','','','','']}
                tbody={
                    <Fragment>
                        {
                            dataComment.TaskComments.map((item:any,index:number) =>(
                                    <tr key={index} className="">
                                        <td>
                                            <b>
                                                {item.CreateUserName}
                                            </b>
                                        </td>
                                        <td>
                                            {item.CreateDate}
                                        </td>
                                        <td>
                                            {item.Message}
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
