import { useFormik } from 'formik';
import {Button, Input, SelectBox, Textarea } from '../../../../components';
import * as Yup from 'yup';
import './CommonInfo.scss';
import { apiTask } from '../../../../services';

interface IPropsOptions{
	listStatusTask:Array<number | string>,
	listVersion:Array<number | string>,
	ListPriority:Array<number | string>,
	listTypeDevices:Array<number | string>,
	listEnv:Array<number | string>,
	listProject:Array<number | string>,
}
interface IPropsSubmit {
    onSubmitForm: (Code:string,Title:string,Deadline:string,Description:string, Status: number)=> void;
}

export const CommonInfo: React.FC<IPropsTab & IPropsOptions & IPropsSubmit> = ({
    tab,
    listProject,
    listEnv,
    listTypeDevices,
    ListPriority,
    listVersion,
    listStatusTask,
    onSubmitForm
    // props
}) => {

    const optionProject:Array<string|number>[] = listProject.map((item:any)=>{
		return [item.Id, item.Name]
	})
	const optionStatusTask:Array<string|number>[] = listStatusTask.map((item:any)=>{
		return [item.Id, item.Title]
	})
	const optionVersion:Array<string|number>[] = listVersion.map((item:any)=>{
		return [item.Id, item.Title]
	})
	const optionPriority:Array<string|number>[] = ListPriority.map((item:any)=>{
		return [item.Id, item.Title]
	})
	const optionTypeDevices:Array<string|number>[] = listTypeDevices.map((item:any)=>{
		return [item.Id, item.Title]
	})
	const optionEnv:Array<string|number>[] = listEnv.map((item:any)=>{
		return [item.Id, item.Title]
	})
    const formik = useFormik({

		initialValues: {
			Code: '',
			Title:"",
            Deadline:"",
            Description:"",
            Environment:0,
            TypeDevice:0,
            FixedVersion:0,
            OpenedVersion:0,
			Status: 10,
			OptionStatus: [
                //[value-option, content-option]
                [10, "Hoạt Động"],
                [90, "Ngưng Hoạt Động"],
            ],
            OptionProject:optionProject,
            OptionStatusTask:optionStatusTask,
            OptionVersion:optionVersion,
            OptionPriority:optionPriority,
            OptionTypeDevices:optionTypeDevices,
            OptionEnv:optionEnv,
		},
        validationSchema: Yup.object({
            Code: Yup.string().required('vui lòng điền mã code'),
            Text: Yup.string().required('vui lòng điền tiêu đề'),
            Description: Yup.string().required('vui lòng điền mô tả'),
          }),
          
        onSubmit: (values) => {
            const Code = values.Code;
            const Title = values.Title;
            const Deadline = values.Deadline;
            const Description = values.Description;
            const Environment = values.Environment;
            const TypeDevice = values.TypeDevice;
            const FixedVersion = values.FixedVersion;
            const OpenedVersion = values.OpenedVersion;
            const Status = values.Status;
            try {
                apiTask
                    .createTask({
                        Code:Code,
                        Title:Title,
                        Deadline:Deadline,
                        Description: Description,
                        Status: Status,
                    })
                    .then((tasks) => {
                        alert("Thêm Thành Công ");
                        window.location.replace("/tasks");
                    });
                
            } catch (error) {
                console.log("error here",error);
            }
            // onSubmitForm(Code,Title,Deadline,Description,Status);
        },
	});
	const handleOnChange = (valueSelect: number) => {
		formik.values.Status = valueSelect;
	};
    return (
        
      
        <form action="" className={tab ? "common-info show":"common-info"} onSubmit={formik.handleSubmit}>
            <Button type="submit" isSave className="">Lưu</Button>
            <h4 className="common-info__title">Thông tin chung </h4>
            <div className="common-info__form">
                <div className="common-info__form-row">
                    <div className="common-info__form-input">
                        <Input label="Mã code" type="text" 
                        placeholder="Nhập mã code" 
                        id ="code" name="Code" 
                        onChange={formik.handleChange}
						value={formik.values.Code}
						error={formik.touched.Code && formik.errors.Code}
                        />
                    </div>
                    {formik.values.Code}
                    <div className="common-info__form-input">
                        <SelectBox label="Dự án" id ="project" name="project"  options={optionProject}
                         handleOnChange={handleOnChange}
                         />
                    </div>
                    <div className="common-info__form-input">
                        <SelectBox label="Trạng thái công việc" id ="statusTask" name="statusTask" 
                         options={optionStatusTask} 
                         handleOnChange={handleOnChange}
                         />
                    </div>
                </div>
                    <Input label="Tiêu đề" type="text" name="Title" 
                        placeholder="Nhập tiêu đề" 
                        onChange={formik.handleChange}
                        value={formik.values.Title}
                        error={formik.touched.Title && formik.errors.Title}
                    />
                    <Textarea label="Mô tả" placeholder="Nhập mô tả" 
                        id="textarea"
                        name="Description"
                        onChange={formik.handleChange}
                        value={formik.values.Description}
                        error={formik.touched.Description && formik.errors.Description}
                />
            </div>
            <h4 className="common-info__title">Thông tin bổ sung</h4>
            <div className="common-info__form-additional">
                <div className="common-info__form-input">
                    <Input label="Hạn chót" type="datetime-local" placeholder=""
                    name="Deadline"
                    id="Deadline"
                    value={formik.values.Deadline}
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
            </div>
        </form>
    )
}
