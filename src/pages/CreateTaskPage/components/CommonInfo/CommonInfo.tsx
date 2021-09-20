import { useFormik } from 'formik';
import {Input, SelectBox, Textarea } from '../../../../components';
import * as Yup from 'yup';
import './CommonInfo.scss';

interface IPropsOptions{
	listStatusTask:any,
	listVersion:any,
	ListPriority:any,
	listTypeDevices:any,
	listEnv:any,
	listProject:any,
    formSubmit:boolean,
    onSubmit:any;
    // props:any

}
interface Iitem{
    Id:number;
    Title:string;
    Name: string;
}
export const CommonInfo: React.FC<IPropsTab & IPropsOptions> = ({
    tab,
    listProject,
    listEnv,
    listTypeDevices,
    ListPriority,
    listVersion,
    listStatusTask,
    formSubmit,
    onSubmit,
    // props
}) => {
    console.log('props qua',formSubmit);
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
			Code: '',
			Title:"",
            Description:"",
			Status: 0,
			OptionStatus: [
                //[value-option, content-option]
                [10, "Hoạt Động"],
                [90, "Ngưng Hoạt Động"],
            ],
            OptionProject:optionProject,
		},
        validationSchema: Yup.object({
            Code: Yup.string().required('vui lòng điền mã code'),
            Text: Yup.string().required('vui lòng điền tiêu đề'),
            Description: Yup.string().required('vui lòng điền mô tả'),
          }),
          
        onSubmit: values => {
            console.log('luu vao task nao', values.Code);
            const Code = values.Code;
            const Title = values.Title;
            const TaskComments = values.Description;
            onSubmit(values.Code)
           
            // try {
            //     apiTask
            //         .createTask({
            //             Code,
            //             Title,
            //             TaskComments:{}
                        
            //         })
            // } catch (error) {
            //     console.log('loi nay',error);
            // }
            
            // alert(JSON.stringify(values, null, 2));
        },
	});
	const handleOnChange = (valueSelect: number) => {
		formik.values.Status = valueSelect;
	};
    return (
        
      
        <form className={tab ? "common-info show":"common-info"} onSubmit={formSubmit === true ? formik.handleSubmit : undefined }>
            
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
            </div>
        </form>
    )
}
