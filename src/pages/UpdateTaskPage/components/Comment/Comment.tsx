import React, { Fragment } from 'react'
import { Button, Input, Table } from '../../../../components';
import './Comment.scss';
interface IPropComments{
    data:[]
}
interface data {
    Id?:number;
    CreateUserName?:string;
    CreateDate?:string;
    Message?:string;

}
const data =[
    {
        Id:0,
        CreateDate:"2021-07-29T16:20:22",
        CreateUserName:"admin",
        Message:"Thêm nhiều chức năng mới",
    },
    {
        Id:1,
        CreateDate:"2021-07-29T16:20:22",
        CreateUserName:"admin",
        Message:"Thêm nhiều chức năng mới",
    },
    {
        Id:2,
        CreateDate:"2021-07-29T16:20:22",
        CreateUserName:"admin",
        Message:"Thêm nhiều chức năng mới",
    },
]

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
                                    <tr key={item.Id} className="">
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
