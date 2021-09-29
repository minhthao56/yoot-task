import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Button, Input, SelectBox } from "../../components";
import { apiStatusTask } from "../../services";
import "./CreateStatusPage.scss";

export const CreateStatusPage = () => {
    const formik = useFormik({
        initialValues: {
            Title: "",
            Orderview: "",
            Status: 10,
            Options: [
                //[value-option, content-option]
                [10, "Hoạt Động"],
                [90, "Ngưng Hoạt Động"],
            ],
        },
        validationSchema: yup.object({
            Title: yup.string().required("Vui lòng điền tiêu đề cho tình."),
            Orderview: yup.number().required("Vui lòng điền thứ tự ưu tiên."),
        }),
        onSubmit: (values) => {
            const Title = values.Title;
            const Status = values.Status;
            const Orderview = +values.Orderview;
            try {
                apiStatusTask
                    .createStatusTask({
                        Title,
                        Orderview,
                        Status,
                    })
                    .then((status) => {
                        alert("Thêm Thành Công ");
                        window.location.replace("/status");
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
        <form className="create-status" onSubmit={formik.handleSubmit}>
            <div className="form-header">
                <h3>Tạo mới trạng thái task</h3>
                <div className="form-header__control">
                    <Button isSave type="submit" />
                    <Link to="/status">
                        <Button isCancel type="button" />
                    </Link>
                </div>
            </div>
            <div className="form-title">
                <h5>THÔNG TIN CHUNG</h5>
            </div>
            <div className="form-body">
                <div className="form-body__row">
                    <div>

                        <Input
                            label="Tiêu đề"
                            placeholder="Nhập tiêu đề"
                            type="text"
                            id="Title"
                            name="Title"
                            value={formik.values.Title}
                            onChange={formik.handleChange}
                            error={formik.touched.Title && formik.errors.Title}
                        />
                    </div>
                    <div>

                        <Input
                            label="Thứ thự ưu tiên"
                            placeholder="Nhập thứ tự ưu tiên"
                            type="number"
                            id="Orderview"
                            name="Orderview"
                            value={formik.values.Orderview}
                            onChange={formik.handleChange}
                            error={formik.touched.Orderview && formik.errors.Orderview}
                        />
                    </div>
                </div>
                <div className="form-body__row">
                    <div>
                        <SelectBox
                            label="Trạng thái"
                            id="status"
                            name="status"
                            options={formik.values.Options}
                            handleOnChange={handleOnChange}
                        />
                    </div>
                </div>
        
            </div>
        </form>
    );
};
