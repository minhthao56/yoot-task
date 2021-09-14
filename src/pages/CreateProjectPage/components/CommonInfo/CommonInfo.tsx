import { useFormik } from 'formik';
import { Input, SelectBox, Textarea } from '../../../../components';
import { apiProject } from '../../../../services';
import './CommonInfo.scss';

export const CommonInfo: React.FC<IPropsTab> = ({tab}) => {
    const formik = useFormik({
        initialValues: {
            Name: "",
            Status: 0,
            Options: [
                //[value-option, content-option]
                [0, "Tất cả"],
                [10, "Hoạt Động"],
                [90, "Ngưng Hoạt Động"],
            ],
            Typedeviceid: 0,
            Devices: [
                //[value-option, content-option]
                [0, "Tất cả"],
                [1, "Tất cả thiết bị (Laptop, Mobile)"],
                [2, "Tất cả Mobile"],
                [3, "Web Safari"],
                [4, "Web Mobile"],
                [5, "Web Laptop"],
                [6, "Web"],
                [7, "Tất cả Laptop"],
                [8, "Android APP"],
            ],
        },
        onSubmit: (values) => {},
    });
    const handleOnChange = (valueSelect: number) => {
        formik.values.Status = valueSelect;
        formik.values.Typedeviceid = valueSelect;
    };
    return (
        <div className={tab ? "common-info show" : "common-info"}  >
            <h4 className="common-info__title">Thông tin chung </h4>
            <form action="" className="common-info__form-additional">
                <div className="common-info__form-input">
                    <Input label="Tên dự án" placeholder="Nhập tên dự án"
                        name="name"
                        id="name"
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="common-info__form-select">
                    <SelectBox label="Thiết bị" id="device" name="device"
                        options={formik.values.Devices} handleOnChange={handleOnChange} />
                </div>
                <div className="common-info__form-select">
                    <SelectBox label="Trạng thái" id="status" name="status"
                        options={formik.values.Options} handleOnChange={handleOnChange} />
                </div>
            </form>
        </div>
    )
}
