import { Input, SelectBox, Textarea } from '../../../../components';
import './CommonInfo.scss';

export const CommonInfo: React.FC<IPropsTab> = ({tab}) => {
    console.log(tab);
    return (
        <div className="common-info show">
            <h4 className="common-info__title">Thông tin chung </h4>
            <form action="" className="common-info__form">
                <div className="common-info__form-row">
                    <div className="common-info__form-input">
                        <Input label="Mã code" type="text" placeholder="Nhập mã code" id ="code" name="" value=""/>
                    </div>
                    <div className="common-info__form-input">
                        <SelectBox label="Dự án" id ="" name="" value="" options={[]} handleOnChange={()=>{}}/>
                    </div>
                    <div className="common-info__form-input">
                        <SelectBox label="Trạng thái công việc" id ="" name="" value="" options={[]} handleOnChange={()=>{}}/>
                    </div>
                </div>
                <Input label="Tiêu đề" type="text" placeholder="Nhập tiêu đề" error="Vui lòng điền tiêu đề"/>
                <Textarea label="Mô tả" placeholder="Nhập mô tả" id="textarea"/>
            </form>
            <h4 className="common-info__title">Thông tin bổ sung</h4>
            <form action="" className="common-info__form-additional">
                <div className="common-info__form-input">
                    <Input label="Hạn chót" type="datetime-local" placeholder=""/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Ưu tiên" id ="" name="" value="" options={[]} handleOnChange={()=>{}}/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Môi Trường" id ="" name="" value="" options={[]} handleOnChange={()=>{}}/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Phiên bản đã mở" id ="" name="" value="" options={[]} handleOnChange={()=>{}}/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Phiên bản sửa" id ="" name="" value="" options={[]} handleOnChange={()=>{}}/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Thiết bị" id ="" name="" value="" options={[]} handleOnChange={()=>{}}/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Trạng thái" id ="" name="" value="" options={[]} handleOnChange={()=>{}}/>
                </div>
            </form>
        </div>
    )
}
