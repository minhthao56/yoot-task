import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Button, Input, SelectBox } from "../../components";
import { apiProject } from "../../services";
import "./CreateProjectPage.scss";

export const CreateProjectPage = () => {
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
                        Name,Status
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
    const handleOnChange = (valueSelect: number) => {
        formik.values.Status = valueSelect;
    };

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
            <div className="form-title">
                <h5>THÔNG TIN CHUNG</h5>
            </div>
            <div className="form-body">
                <div className="form-body__row">
                    <Input
                        label="Tiêu đề"
                        placeholder="Nhập tiêu đề"
                        type="text"
                        id="Title"
                        name="Title"
                        value={formik.values.Name}
                        onChange={formik.handleChange}
                        error={formik.touched.Name && formik.errors.Name}
                    />
                </div>
                <div className="form-body__row">
                    <SelectBox
                        label="Trạng thái"
                        id="status"
                        name="status"
                        options={formik.values.Options}
                        handleOnChange={handleOnChange}
                    />
                </div>
            </div>
        </form>
    );
};
