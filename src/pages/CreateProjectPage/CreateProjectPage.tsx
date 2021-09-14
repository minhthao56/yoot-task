import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { CommonInfo, PersonJoin } from './components';
import * as yup from "yup";
import { Button } from "../../components";
import { apiProject } from "../../services";
import "./CreateProjectPage.scss";

export const CreateProjectPage = () => {
    const [showPersonJoin,setShowPersonJoin] = useState(true);
	const [showCommonInfo,setShowCommonInfo] = useState(false);
    const handleShowTabPerson = ()=>{
        if(showPersonJoin === false){
            setShowCommonInfo(false);
            setShowPersonJoin(true);
        }
        if(showCommonInfo === true){
            setShowCommonInfo(false);
        }
    }
    const handleShowTabJoin = ()=>{
        if(showPersonJoin === true){
            setShowPersonJoin(false);
            setShowCommonInfo(true);
        }
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
        },
        validationSchema: yup.object({
            Name: yup.string().required("Vui lòng điền tiêu đề cho rủi ro."),
        }),
        onSubmit: (values) => {
            const Name = values.Name;
            const Status = values.Status;
            // const Typedeviceid = values.Typedeviceid
            try {
                apiProject
                    .createProject({
                        Name, Status
                    })
                    .then((projects) => {
                        alert("Thêm Thành Công ");
                        window.location.replace("/projects");
                    });
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <form className="create-project" onSubmit={formik.handleSubmit}>
            <div className="form-header">
                <h3>Tạo mới trạng thái task</h3>
                <div className="form-header__control">
                    <Button isSave type="submit" />
                    <Link to="/projects">
                        <Button isCancel type="button" />
                    </Link>
                </div>
            </div>
            <div className="form-body">
                <div className="form-body_nav">
                <span className={showPersonJoin === true ? 'active' : ''} onClick={() => { handleShowTabPerson() }}>Thông tin chung</span>
                <span className={showCommonInfo === true ? 'active' : ''} onClick={() => { handleShowTabJoin() }}>Người tham gia</span>
                </div>
                <div className="nav-tab__content">
						<CommonInfo tab={showPersonJoin}/>
						<PersonJoin tab={showCommonInfo}/>
					</div>
            </div>

        </form>
    );
};
