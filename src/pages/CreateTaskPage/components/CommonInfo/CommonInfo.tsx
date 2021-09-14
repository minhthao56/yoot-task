import { useFormik } from 'formik';
import { Input, SelectBox, Textarea } from '../../../../components';
import './CommonInfo.scss';
interface IPropsOptions{
	listStatusTask:any,
	listVersion:any,
	ListPriority:any,
	listTypeDevices:any,
	listEnv:any,
	listProject:any,
}
export const CommonInfo: React.FC<IPropsTab & IPropsOptions> = ({
    tab,
    listProject,
    listEnv,
    listTypeDevices,
    ListPriority,
    listVersion,
    listStatusTask,
}) => {
    console.log(tab);
    const optionProject = listProject.map((item:any)=>{
		return [item.Id, item.Name]
	})
	const optionStatusTask = listStatusTask.map((item:any)=>{
		return [item.Id, item.Title]
	})
	const optionVersion = listVersion.map((item:any)=>{
		return [item.Id, item.Title]
	})
	const optionPriority = ListPriority.map((item:any)=>{
		return [item.Id, item.Title]
	})
	const optionTypeDevices = listTypeDevices.map((item:any)=>{
		return [item.Id, item.Title]
	})
	const optionEnv = listEnv.map((item:any)=>{
		return [item.Id, item.Title]
	})
    const formik = useFormik({

		initialValues: {
			code: "",
			text:"",
            description:"",
			Status: 0,
			OptionStatus: [
                //[value-option, content-option]
                [10, "Hoạt Động"],
                [90, "Ngưng Hoạt Động"],
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
            <form action="" className="common-info__form">
                <div className="common-info__form-row">
                    <div className="common-info__form-input">
                        <Input label="Mã code" type="text" 
                        placeholder="Nhập mã code" 
                        id ="code" name="code" 
                        onChange={formik.handleChange}
						value={formik.values.code}
						error={formik.touched.code && formik.errors.code}
                        />
                    </div>
                    <div className="common-info__form-input">
                        <SelectBox label="Dự án" id ="" name=""  options={optionProject}
                         handleOnChange={handleOnChange}
                         />
                    </div>
                    <div className="common-info__form-input">
                        <SelectBox label="Trạng thái công việc" id ="" name="" 
                         options={optionStatusTask} 
                         handleOnChange={handleOnChange}
                         />
                    </div>
                </div>
                <Input label="Tiêu đề" type="text" name="text" 
                placeholder="Nhập tiêu đề" 
                onChange={formik.handleChange}
                value={formik.values.text}
                error={formik.touched.text && formik.errors.text}
                />
                <Textarea label="Mô tả" placeholder="Nhập mô tả" 
                id="textarea"
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
                error={formik.touched.description && formik.errors.description}
                />
            </form>
            <h4 className="common-info__title">Thông tin bổ sung</h4>
            <form action="" className="common-info__form-additional">
                <div className="common-info__form-input">
                    <Input label="Hạn chót" type="datetime-local" placeholder=""
                    name="deadline"
                    id="deadline"
                    onChange={formik.handleChange}
                    />
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Ưu tiên" id ="priority" name="priority"  
                    options={optionPriority} handleOnChange={handleOnChange}
                    />
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Môi Trường" id ="env" name="env"  
                    options={optionEnv} handleOnChange={handleOnChange}/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Phiên bản đã mở" id ="version" name="version"  
                    options={optionVersion} handleOnChange={handleOnChange}/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Phiên bản sửa" id ="versionUpdate" name="versionUpdate"  
                    options={optionVersion} handleOnChange={handleOnChange}/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Thiết bị" id ="typeDevice" name="typeDevice"  
                    options={optionTypeDevices} handleOnChange={handleOnChange}/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Trạng thái" id ="status" name="status"  
                    options={formik.values.OptionStatus} handleOnChange={handleOnChange}/>
                </div>
            </form>
        </div>
    )
}