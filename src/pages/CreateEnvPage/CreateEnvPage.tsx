import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Button, Input, SelectBox } from "../../components";
import { apiEnvironment, apiStatusTask } from "../../services";
import "./CreateEnvPage.scss";

export const CreateEnvPage = () => {
    const formik = useFormik({
        initialValues: {
            Title: "",
            Status: 10,
            Options: [
                //[value-option, content-option]
                [10, "Hoạt Động"],
                [90, "Ngưng Hoạt Động"],
            ],
        },
        validationSchema: yup.object({
            Title: yup.string().required("Vui lòng điền tiêu đề cho rủi ro."),
        }),
        onSubmit: (values) => {
            const Title = values.Title;
            const Status = values.Status;
            try {
                apiEnvironment
                    .createEnvironment({
                        Title,
                        Status,
                    })
                    .then((status) => {
                        alert("Thêm Thành Công ");
                        window.location.replace("/env");
                    });
                // apiStatusTask
                //     .createStatusTask({
                //         Title,
                //         Orderview,
                //         Status,
                //     })
                //     .then((status) => {
                //         alert("Thêm Thành Công ");
                //         window.location.replace("/status");
                //     });
            } catch (error) {
                console.log(error);
            }
        },
    });
    const handleOnChange = (valueSelect: number) => {
        formik.values.Status = valueSelect;
    };

    return (
        <form className="createEnvPage" onSubmit={formik.handleSubmit}>
            <div className="form-header">
                <h3>Tạo mới Environment</h3>
                <div className="form-header__control">
                    <Button isSave type="submit" />
                    <Link to="/env">
                        <Button isCancel type="button" />
                    </Link>
                </div>
            </div>
            <div className="form-title">
                <h5>THÔNG TIN CHUNG</h5>
            </div>
            <div className="form-body">
                <div className="form-body__row">
                    <div className="form-body__row__wrapper">
                        <Input
                            label="Môi trường"
                            placeholder="Nhập tên môi trường"
                            type="text"
                            id="Title"
                            name="Title"
                            value={formik.values.Title}
                            onChange={formik.handleChange}
                            error={formik.touched.Title && formik.errors.Title}
                        />
                    </div>
                    <div className="form-body__row__wrapper">
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
