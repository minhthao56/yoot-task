import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Button, Input, SelectBox, Loader } from "../../components";
import { apiVersion } from "../../services/api/apiVersion";
import "./CreateVersionPage.scss";

export const CreateVersionPage = () => {
    const [loadding, setLoadding] = useState(false)
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
      Title: yup.string().required("Vui lòng điền tên phiên bản."),
    }),
    onSubmit: (values) => {
        setLoadding(true)
      const Title = values.Title;
      const Status = values.Status;
      try {
        apiVersion
          .createVersion({
            Title,
            Status,
          })
          .then((version) => {
            setLoadding(true)
            window.location.replace("/version");
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
      <>
      <Loader loadding = {loadding}/>
    <form className="create-version" onSubmit={formik.handleSubmit}>
      <div className="form-header">
        <h3>Tạo mới version</h3>
        <div className="form-header__control">
          <Button isSave type="submit" />
          <Link to="/version">
            <Button isCancel type="button" />
          </Link>
        </div>
      </div>
      <div className="form-body">
        <div className="form-body__row">
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
    </>
  );
};