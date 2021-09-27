import { useFormik } from 'formik';
import { Input, SelectBox} from '../../../../components';
import './CommonInfo.scss';
interface IPropsOptions{
}
export const CommonInfo: React.FC<IPropsTab & IPropsOptions> = ({
    tab,
}) => {
    console.log(tab);
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
              TypeDevice:0,
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
		onSubmit: (values) => {
		},
	});
	const handleOnChange = (valueSelect: number) => {
		formik.values.Status = valueSelect;
	};
    return (
        <div className={tab ? "common-info show":"common-info"}>
            <h4 className="common-info__title">Thông tin chung </h4>
            <form action="" className="common-info__form-additional">
                <div className="common-info__form-input">
                    <Input label="Tên dự án"  placeholder=""
                    name="deadline"
                    id="deadline"
                    onChange={formik.handleChange}
                    />
                    <SelectBox label="Trạng thái" id ="status" name="status"  
                    options={formik.values.Options} handleOnChange={handleOnChange}/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Trạng thái" id ="status" name="status"  
                    options={formik.values.Options} handleOnChange={handleOnChange}/>
                </div>
            </form>
        </div>
    )
}
