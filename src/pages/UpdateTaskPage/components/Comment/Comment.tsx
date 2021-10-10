import React, { Fragment, useState } from 'react'
import { useParams } from 'react-router';
import { Button, Input, Table } from '../../../../components';
import { apiTask } from '../../../../services';
import './Comment.scss';


export const Comment:React.FC<IPropDataDetailTaskComments> = ({dataComment}) => {
    const {Id}:any = useParams();
    const [listComment,setListComment] = useState(dataComment.TaskComments)
    const [comment,setComment] = useState<string>("");
    const handleChange =(event:any)=>{
        setComment(event.target.value);
    };
    const handleSubmit =(e:any)=>{
        e.preventDefault();
        // setListComment([...listComment,comment]);
        try {
            apiTask
                .addMessageTask({
                    TaskId:Id,
                    Message:comment,
                })
                .then((comments) => {
                    alert("thanh cong")
                    window.location.replace(`/tasks/update/${Id}`);
                });
        } catch (error) {
            console.log(error);
        }

    };
    console.log('sdasdasd',listComment);
    return (
        <div className="comment">
            <h4 className="image-video__title">Các bình luận </h4>
            <form onSubmit={handleSubmit} className="comment-form">
                <Input placeholder="Nhập phản hồi" value={comment} name="comment" 
                onChange={(e)=>handleChange(e)}/>
                <Button type="submit" className="btn-submit">Gửi</Button>
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
