import React from 'react'
import { Button, Input } from '../../../../components';
import './ImageVideo.scss';

export const ImageVideo:React.FC<IPropDataDetailTaskImg> = ({dataImage}) => {
    return (
        <div className="image-video">
            <h4 className="image-video__title">Hình ảnh/Video </h4>
            <div className="image-video__body">
                <form className="image-video__content">
                    <h6 className="image-video__text">Hình ảnh/Video</h6>
                    <Input type="file" id="file-image" value=""/>
                </form>
                <div className="image-video__box-show">
                    {
                        dataImage.TaskMedias.map((img:any,index:number)=>{
                            return(
                                <div className="list-img" key={index}>
                                    <img src={img.Link} alt="img comment" />
                                </div>
                            )
                        })
                    }
                    <Button className="btn-seem">Xem</Button>
                    <Button className="btn-remove">Xóa</Button>
                </div>
            </div>
        </div>
    )
}
