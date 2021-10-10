import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Button, Input, SelectBox } from "../../components";
import { apiDevice } from "../../services/api/apiDevice";
import "./CreateDevicePage.scss";

export const CreateDevicePage = () => {
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
      const Title = values.Title;
      const Status = values.Status;
      try {
        apiDevice
          .createDevice({
            Title,
            Status,
          })
          .then((device) => {
            alert("Thêm Thành Công ");
            window.location.replace("/device");
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
    <form className="create-device" onSubmit={formik.handleSubmit}>
      <div className="form-header">
        <h3>Tạo loại thiết bị mới</h3>
        <div className="form-header__control">
          <Button isSave type="submit" />
          <Link to="/device">
            <Button isCancel type="button" />
          </Link>
        </div>
      </div>
      <div className="form-body">
        <h3>THÔNG TIN CHUNG</h3>
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
