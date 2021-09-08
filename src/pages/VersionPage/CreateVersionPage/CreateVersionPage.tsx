import { useFormik } from "formik";
import React, { FC } from "react";
import { Button, Input, SelectBox } from "../../../components";
import { apiVersion } from "../../../services/api/apiVersion";
import "./CreateVersionPage.scss";

export const CreateVersionPage = () => {
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
    onSubmit: (values) => {
      const titleVersion = values.Title;
      const statusVersion = values.Status;
     try {
        apiVersion.createVersion({
            Title: titleVersion,
            Status: statusVersion,
          }).then((version) => {
              alert("Thêm Thành Công ")
            window.location.replace("/version")
          })
     } catch (error) {
         console.log(error);
     }
    },
  });
  const handleOnChange = (valueSelect: number) => {
    formik.values.Status = valueSelect;
    alert(formik.values.Status + ":" + formik.values.Title);
  };
  const handleCancel = () => {
    window.location.replace("/version");
  };

  return (
    <form className="form-create" onSubmit={formik.handleSubmit}>
      <div className="form-header">
        <h3>Tạo mới version</h3>
       <div className="form-header__control">
       <Button isSave type="submit"/>
        <Button isCancel handleOnClick = {handleCancel}/>
        </div>
      </div>
      <div className="form-body">
        <Input
          label="Tiêu đề"
          placeholder="Nhập tiêu đề"
          type="text"
          id="Title"
          name="Title"
          value={formik.values.Title}
          onChange={formik.handleChange}
        />
        <SelectBox
          label="Trạng thái"
          id="status"
          name="status"
          options={formik.values.Options}
          handleOnChange={handleOnChange}
        />
      </div>
    </form>
  );
};
