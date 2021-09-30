import { Input, SelectBox, Textarea } from '../../../../components';
import { useFormik } from 'formik';
import './CommonInfo.scss';
import { useState } from 'react';

export const CommonInfo: React.FC<IPropsTab & IPropDataDetailTask & IPropsOptions> = (
    {tab,dataDetailTask,
    listProject,
    listEnv,
    listTypeDevices,
    ListPriority,
    listVersion,
    listStatusTask,
    
}) => {
    var co = dataDetailTask.Code
    const [Code,setCode] = useState(co);
    console.log('code nay',Code);
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
	});

    const formik = useFormik({
        initialValues:{
            Code:'valadfsdfs',
            Status:10,
            ProjectId:0,
            OptionStatus: [
                //[value-option, content-option]
                [10, "Hoạt Động"],
                [90, "Ngưng Hoạt Động"],
            ],
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })
    // const handleChange=(e)={
    //     setCode({Code:e.target.value});
    // };
    const handleOnChange = (valueSelect: number) => {
		formik.values.Status = valueSelect;
	};
    const handleOnChangeProjectId = (valueSelect: number) => {
		formik.values.ProjectId = valueSelect;
	};
    return (
        <div className="common-info show">
            <h4 className="common-info__title">Thông tin chung </h4>
            <form action="" className="common-info__form" onSubmit={formik.handleSubmit}>
                <div className="common-info__form-row">
                    <div className="common-info__form-input">
                        <Input label="Mã code" type="text" 
                        value={dataDetailTask.Code} 
                        placeholder="Nhập mã code" id ="code" name="Code"
                        onChange={formik.handleChange}
                        />
                    </div>
                    <div className="common-info__form-input">
                        <SelectBox label="Dự án" 
                        id ="project" name="ProjectId" 
                        value={dataDetailTask.Projectid} 
                        options={optionProject} 
                        handleOnChange={handleOnChangeProjectId}
                        />
                    </div>
                    <div className="common-info__form-input">
                        <SelectBox label="Trạng thái công việc" 
                        id ="priority" name="priority"  value={dataDetailTask.Statustaskid}
                        options={optionStatusTask} handleOnChange={handleOnChange}/>
                    </div>
                </div>
                <Input label="Tiêu đề" type="text" value={dataDetailTask.Title} 
                placeholder="Nhập tiêu đề" error={''}/>
                <Textarea label="Mô tả" value={dataDetailTask.Description} placeholder="Nhập mô tả" id="textarea"/>
            </form>
            <h4 className="common-info__title">Thông tin bổ sung</h4>
            <form action="" className="common-info__form-additional">
                <div className="common-info__form-input">
                    <Input label="Hạn chót" type="datetime-local" placeholder=""/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Ưu tiên" 
                    id ="" name=""  value={dataDetailTask.Priorityid} 
                    options={optionPriority} handleOnChange={handleOnChange}/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Môi Trường" 
                    id ="" name="" value={dataDetailTask.Environment} 
                    options={optionEnv} handleOnChange={handleOnChange}/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Phiên bản đã mở" 
                    id ="" name=""  value={dataDetailTask.Openedversion} 
                    options={optionVersion} handleOnChange={handleOnChange}/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Phiên bản sửa" 
                    id ="" name="" value={dataDetailTask.Fixedversion} 
                    options={optionVersion} handleOnChange={handleOnChange}/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Thiết bị" 
                    id ="" name=""  value={dataDetailTask.Typedevice} 
                    options={optionTypeDevices} handleOnChange={handleOnChange}/>
                </div>
                <div className="common-info__form-input">
                    <SelectBox label="Trạng thái" 
                    id ="" name="status" value={dataDetailTask.Status} 
                    options={formik.values.OptionStatus} handleOnChange={handleOnChange}/>
                </div>
            </form>
        </div>
    )
}
