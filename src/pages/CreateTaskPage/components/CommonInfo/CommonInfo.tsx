import { Input, SelectBox, Textarea } from '../../../../components';
import './CommonInfo.scss';

export const CommonInfo: React.FC<IPropsTab> = ({tab}) => {
    console.log(tab);
    return (
        <div className={tab ? "common-info show":"common-info"}>
            <h4 className="common-info__title">Thông tin chung </h4>
            <form action="" className="common-info__form">
                <div className="common-info__form-row">
                    <div className="common-info__form-input">
                        <Input label="Mã code" type="text" placeholder="Nhập mã code" id ="code" name="" value=""/>
                    </div>
                    <div className="common-info__form-input">
                        <SelectBox label="Dự án"/>
                    </div>
                    <div className="common-info__form-input">
                        <SelectBox label="Trạng thái công việc"/>
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
                    <SelectBox label="Ưu tiên"/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Môi Trường"/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Phiên bản đã mở"/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Phiên bản sửa"/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Thiết bị"/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Trạng thái"/>
                </div>
            </form>
        </div>
    )
}
