import { Button, Input, Loader, SelectBox, Textarea } from '../../../../components';
import { useFormik } from 'formik';
import './CommonInfo.scss';
import { useState } from 'react';
import { apiTask } from '../../../../services';
import { useParams } from 'react-router';

export const CommonInfo: React.FC<IPropsForm & IPropDataDetailTask & IPropsOptions> = (
    {dataDetailTask,
    listProject,
    listEnv,
    listTypeDevices,
    ListPriority,
    listVersion,
    listStatusTask,
    submitUpdate
    
}) => {
    const {Id}:any = useParams();
    const [loadding, setLoadding] = useState(false)
    const [data,setData] = useState(dataDetailTask);
    console.log('code nay',dataDetailTask);
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
            Code:data.Code,
            Title:data.Title,
            Status:data.Status,
            Description:data.Description,
            Deadline:data.Deadline,
            ProjectId:data.Projectid,
            Statustaskid:data.Statustaskid,
            Priorityid:data.Priorityid,
            Environment:data.Environment,
            Openedversion:data.Openedversion,
            Fixedversion:data.Fixedversion,
            Typedevice:data.Typedevice,
            OptionStatus: [
                //[value-option, content-option]
                [10, "Hoạt Động"],
                [90, "Ngưng Hoạt Động"],
            ],
        },
        onSubmit: (values) => {
			setLoadding(true);
            // alert(JSON.stringify(values, null, 2));
            const Code = values.Code;
			const Title = values.Title;
			const Deadline = values.Deadline;
			const Description = values.Description;
			const Status = values.Status;
			const Projectid = values.ProjectId;
			const Environment = values.Environment;
			const Typedevice = values.Typedevice;
			const Priorityid = values.Priorityid;
			const Openedversion = values.Openedversion;
			const Fixedversion = values.Fixedversion;
			const Statustaskid = values.Statustaskid;
            try{
                apiTask
                .updateTask({
                    Id:Id,
                    Code:Code,
                    Title:Title,
                    Deadline:Deadline,
                    Description: Description,
                    Status: Status,
                    Projectid: Projectid,
                    Environment: Environment,
                    Typedevice: Typedevice,
                    Priorityid: Priorityid,
                    Openedversion: Openedversion,
                    Fixedversion: Fixedversion,
                    Statustaskid: Statustaskid,
                    TaskUsers:[{
                        Id: 10,
                        UserId: 3,
                        TypeTaskUserId: 10
                    }],
                    
                }).then((tasks) => {
                    // alert("update Thành Công ");
					setLoadding(true);
                    window.location.replace("/tasks");
                });
            }catch(e){
                console.log('error updateTask',e);
            }
            
            
        },
    });
    console.log('form',submitUpdate)
    const handleOnChange = (valueSelect: number) => {
		setData(formik.values.Status = valueSelect);
        console.log('status',formik.values.Status)
	};
    const handleOnChangeProjectId = (valueSelect: number) => {
		setData(formik.values.ProjectId = valueSelect);
        console.log('project',formik.values.ProjectId);
	};
    const handleOnChangeStatustaskid = (valueSelect: number) => {
		setData(formik.values.Statustaskid = valueSelect);
        console.log('statutask',formik.values.Statustaskid);
	};
    const handleOnChangePriorityid = (valueSelect: number) => {
		setData(formik.values.Priorityid = valueSelect);
        console.log('Priorityid',formik.values.Priorityid);
	};
    const handleOnChangeEnvironment = (valueSelect: number) => {
		setData(formik.values.Environment = valueSelect);
        console.log('env',formik.values.Environment);
	};
    const handleOnChangeOpenedversion = (valueSelect: number) => {
		setData(formik.values.Openedversion = valueSelect);
        console.log('open',formik.values.Openedversion);
	};
    const handleOnChangeFixedversion = (valueSelect: number) => {
		setData(formik.values.Fixedversion = valueSelect);
        console.log('fix',formik.values.Fixedversion);
	};
    const handleOnChangeTypedevice = (valueSelect: number) => {
		setData(formik.values.Typedevice = valueSelect);
        console.log('type',formik.values.Typedevice);
	};
    return (
        <>
		    <Loader loadding = {loadding}/>
            <form action="" className="common-info show" onSubmit={formik.handleSubmit}>
                <h4 className="common-info__title">Thông tin chung </h4>
                <button type="submit">luu</button>
                <div  className="common-info__form" >
                    <div className="common-info__form-row">
                        <div className="common-info__form-input">
                            <Input label="Mã code" type="text" 
                            value={formik.values.Code} 
                            placeholder="Nhập mã code" id ="code" name="Code"
                            onChange={formik.handleChange}
                            readonly={true}
                            />
                        </div>
                        <div className="common-info__form-input">
                            <SelectBox label="Dự án" 
                            id ="project" name="ProjectId" 
                            value={formik.values.ProjectId} 
                            options={optionProject} 
                            handleOnChange={handleOnChangeProjectId}
                            />
                        </div>
                        <div className="common-info__form-input">
                            <SelectBox label="Trạng thái công việc" 
                            id ="priority" name="priority"  value={formik.values.Statustaskid}
                            options={optionStatusTask} handleOnChange={handleOnChangeStatustaskid}/>
                        </div>
                    </div>
                    <Input label="Tiêu đề" 
                        type="text" 
                        value={formik.values.Title}  
                        name="Title"
                        placeholder="Nhập tiêu đề" 
                        error={''} onChange={formik.handleChange}
                    />
                    <Textarea label="Mô tả" 
                        value={formik.values.Description} 
                        name="Description" 
                        placeholder="Nhập mô tả" 
                        id="textarea"
                        onChange={formik.handleChange}
                    />
                </div>
                <h4 className="common-info__title">Thông tin bổ sung</h4>
                <div  className="common-info__form-additional">
                    <div className="common-info__form-input">
                        <Input label="Hạn chót" type="datetime-local" 
                        placeholder=""
                        name="Deadline"
                        value={formik.values.Deadline}
                        onChange={formik.handleChange}
                        />
                    </div>
                    <div className="common-info__form-input">
                        <SelectBox label="Ưu tiên" 
                        id ="" name=""  value={formik.values.Priorityid} 
                        options={optionPriority} handleOnChange={handleOnChangePriorityid}/>  
                    </div>
                    <div className="common-info__form-input">
                        <SelectBox label="Môi Trường" 
                        id ="" name="" value={formik.values.Environment} 
                        options={optionEnv} handleOnChange={handleOnChangeEnvironment}/>
                    </div>
                    <div className="common-info__form-input">
                        <SelectBox label="Phiên bản đã mở" 
                        id ="" name=""  value={formik.values.Openedversion} 
                        options={optionVersion} handleOnChange={handleOnChangeOpenedversion}/>
                    </div>
                    <div className="common-info__form-input">
                        <SelectBox label="Phiên bản sửa" 
                        id ="" name="" value={formik.values.Fixedversion} 
                        options={optionVersion} handleOnChange={handleOnChangeFixedversion}/>
                    </div>
                    <div className="common-info__form-input">
                        <SelectBox label="Thiết bị" 
                        id ="" name=""  value={formik.values.Typedevice} 
                        options={optionTypeDevices} handleOnChange={handleOnChangeTypedevice}/>
                    </div>
                    <div className="common-info__form-input">
                        <SelectBox label="Trạng thái" 
                        id ="" name="status" value={formik.values.Status} 
                        options={formik.values.OptionStatus} handleOnChange={handleOnChange}/>
                    </div>
                </div>
            </form>
        </>
    )
}
