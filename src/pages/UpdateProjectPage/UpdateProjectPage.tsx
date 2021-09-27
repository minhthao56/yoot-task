import { useFormik } from "formik";
import React from "react";
import { ImScissors } from "react-icons/im";
import { Input, SelectBox, Table } from '../../components';
import { Link } from "react-router-dom";
import { Fragment, useState } from 'react';
import * as yup from "yup";
import { Button } from "../../components";
import { apiProject } from "../../services";
import "./UpdateProjectPage.scss";
const numberTr =[1,2,3,4];

export const UpdateProjectPage = () => {
    const [showState, setshowState] = useState(1);

    const [listRow,setListRow] = useState(numberTr);
    // handler add row
    const handleAddRow = () => {
        setListRow((listRow) => [...listRow,listRow[listRow.length - 1] + 1]);
    }
    const handleDeleteRow = (number:any)=>{
        const row = Number(number);
        setListRow(listRow.filter(item => item !== row));
    }
    const showStateTab = (i:number) =>{
        setshowState(i)
    }
    const formik = useFormik({
        initialValues: {
            Name: "",
            Status: 10,
            Options: [
                //[value-option, content-option]
                [10, "Hoạt Động"],
                [90, "Ngưng Hoạt Động"],
            ],
            Typedeviceid: 1,
            Devices: [
                //[value-option, content-option]
                [1, "Tất cả thiết bị (Laptop, Mobile)"],
                [2, "Tất cả Mobile"],
                [3, "Web Safari"],
                [4, "Web Mobile"],
                [5, "Web Laptop"],
                [6, "Web"],
                [7, "Tất cả Laptop"],
                [8, "Android APP"],
            ],
            UserId:0,
            optionUser:[
                [0,""],
                [16,"Duy Thanh"],
                [5,"Gia Huy"],
                [14,"Hữu"],
                [15,"Hữu Ý"],
                [17,"Huỳnh Trọng Nghĩa"],
                [10,"Kiên Phạm"],
                [7,"Minh Thảo"],
                [4,"Nam Quốc"],
                [18,"Nguyễn Hoài Nam"],
                [13,"Nguyễn Tấn Đạt"],
                [9,"San Nguyễn"],
                [6,"Sơn Lê"],
                [12,"Trần Anh Kiệt"],
                [8,"Vũ Lê"],
            ],
        },
        validationSchema: yup.object({
            Name: yup.string().required("Vui lòng điền Tên cho dự án."),
        }),
        onSubmit: (values) => {
            const Name = values.Name;
            const Status = values.Status;
            const Typedeviceid = values.Typedeviceid;
            const ProjectUsers = values.UserId;
            try {
                apiProject
                    .updateProject({
                        Name,
                        Typedeviceid,
                        Status,
                        
                    })
                    .then((project) => {
                        alert("Update Thành Công ");
                        window.location.replace("/projects");
                    });
            } catch (error) {
                console.log(error);
            }
        },
    });
    const handleOnChange = (valueSelect: number) => {
        formik.values.Status = valueSelect;
    };
    const handleOnChangee =(valueSelect: number)=>{
        formik.values.Typedeviceid = valueSelect;
    }
    return (
        <form className="create-project" onSubmit={formik.handleSubmit}>
            <div className="form-header">
                <h3>Cập nhật dự án</h3>
                <div className="form-header__control">
                    <Button isSave type="submit" />
                    <Link to="/projects">
                        <Button isCancel type="button" />
                    </Link>
                </div>
            </div>
            <div className="form-body">
                <div className="form-body_nav">
                    <span className={showState === 1 ? 'active' : ''} onClick={() => { showStateTab(1) }}>Thông tin chung</span>
                    <span className={showState === 2 ? 'active' : ''} onClick={() => { showStateTab(2) }}>Người tham gia</span>
                </div>
                <div className="form-body_tab">
                    <div className={showState === 1 ? 'common' : 'tab'}>
                        <h4 className="common-info__title">Thông tin chung</h4>
                        <form action="" className="common-info__form-additional">
                            <div className="common-info__form-input">
                                <Input label="Tên dự án" placeholder="Nhập tên dự án"
                                    type="text"
                                    name="Name"
                                    id="Name"
                                    value={formik.values.Name}
                                    error={formik.touched.Name && formik.errors.Name}
                                    onChange={formik.handleChange}
                                    
                                />
                            </div>
                            <div className="common-info__form-select">
                                <SelectBox label="Thiết bị" id="Typedeviceid" name="Typedeviceid"
                                    options={formik.values.Devices} 
                                    handleOnChange={handleOnChangee} />
                            </div>
                            <div className="common-info__form-select">
                                <SelectBox label="Trạng thái" id="status" name="status"
                                    options={formik.values.Options} 
                                    handleOnChange={handleOnChange} />
                            </div>
                        </form>
                    </div>
                    <div className={showState === 2 ? 'common' : 'tab'}>
                    <h4 className="person-join__title">Các thành viên</h4>
            <div className="person-join__wrapper">
                <div className="person-join__wrapper-header">
                    <Button className="btn-addRow" handleOnClick={()=> {handleAddRow()}}>Thêm hàng</Button>
                </div>  
                <form className="person-join__wrapper-body">
                    <Table 
                    thead={["Người tham gia","Tác vụ"]}
                    tbody={
                        <Fragment>
                        {
                            listRow.map((number)=> (
                                <tr key={number}>
                                    <td>
                                        <SelectBox id ="UserId" name="UserId"
                                        options={formik.values.optionUser} handleOnChange={handleOnChange}/>
                                    </td>
                                    <td>
                                        <div className="bt_style">
                                            <button className="bt_style-delete" onClick={()=>{handleDeleteRow(number)}}>
                                            <ImScissors />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                            
                        </Fragment>   
                    }
                    />
                    
                </form>
            </div>
                    </div>
                </div>
            </div>
        </form>
    );
};
