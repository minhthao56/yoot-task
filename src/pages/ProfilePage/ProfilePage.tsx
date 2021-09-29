import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Button, Input, SelectBox } from "../../components";
import { apiEnvironment, apiProflie, apiStatusTask } from "../../services";
import "./ProfilePage.scss";

export const ProfilePage = () => {
    const formik = useFormik({
        initialValues: {
            Name: "",
            Email: "",
            Phone: "",
            Password: "",
            RePassword: "",
        },
        validationSchema: yup.object({
            Name: yup.string().required("Vui lòng điền tên cho rủi ro."),
            Phone: yup.string().required("Vui lòng điền điện thoại cho rủi ro."),
            Email: yup.string().required("Vui lòng điền email cho rủi ro."),
            Password: yup.string().required("Vui lòng điền mật khẩu cho rủi ro."),
            RePassword: yup.string().required("Vui lòng điền xác nhận mật khẩu cho rủi ro.").oneOf([yup.ref('Password'), null], 'Xác nhận mật khẩu không chính xác'),
        }),
        onSubmit: ({ Email, Name, Password, Phone, RePassword }) => {
            try {
                apiProflie
                    .updateProfile({
                        Email,
                        Name,
                        RePassword,
                        Phone,
                        Password
                    })
                    .then((status) => {
                        alert("Cập nhật thành công ");
                        window.location.replace("/dashboard");
                    });
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <form className="profilePage" onSubmit={formik.handleSubmit}>
            <div className="form-header">
                <h3>Cập nhật thông tin</h3>
                <div className="form-header__control">
                    <Button isSave type="submit" />
                    <Link to="/">
                        <Button isCancel type="button" />
                    </Link>
                </div>
            </div>
            <div className="form-title">
                <h5>THÔNG TIN CÁ NHÂN</h5>
            </div>
            <div className="form-body">
                <div className="form-body__row">
                    <div className="form-body__row__wrapper">
                        <Input
                            label="Họ tên"
                            placeholder="Nhập họ tên"
                            type="text"
                            id="Name"
                            name="Name"
                            value={formik.values.Name}
                            onChange={formik.handleChange}
                            error={formik.touched.Name && formik.errors.Name}
                        />
                    </div>
                    <div className="form-body__row__wrapper">
                        <Input
                            label="Email"
                            placeholder="Nhập email"
                            type="email"
                            id="Email"
                            name="Email"
                            value={formik.values.Email}
                            onChange={formik.handleChange}
                            error={formik.touched.Email && formik.errors.Email}
                        />
                    </div>
                </div>
                <div className="form-body__row ">
                    <div className="form-body__row__wrapper ">
                        <Input
                            label="Điện thoại"
                            placeholder="Nhập điện thoại"
                            type="text"
                            id="Phone"
                            name="Phone"
                            value={formik.values.Phone}
                            onChange={formik.handleChange}
                            error={formik.touched.Phone && formik.errors.Phone}
                        />
                    </div>
                    <div className="form-body__row__wrapper " />
                </div>
                <div className="form-body__row">
                    <div className="form-body__row__wrapper">
                        <Input
                            label="Mật khẩu"
                            placeholder="Nhập mật khẩu"
                            type="password"
                            id="Password"
                            name="Password"
                            value={formik.values.Password}
                            onChange={formik.handleChange}
                            error={formik.touched.Password && formik.errors.Password}
                        />
                    </div>
                    <div className="form-body__row__wrapper">
                        <Input
                            label="Xác nhận mật khẩu"
                            placeholder="Nhập xác nhận mật khẩu"
                            type="password"
                            id="RePassword"
                            name="RePassword"
                            value={formik.values.RePassword}
                            onChange={formik.handleChange}
                            error={formik.touched.RePassword && formik.errors.RePassword}
                        />
                    </div>
                </div>
            </div>
        </form>

    );
};
