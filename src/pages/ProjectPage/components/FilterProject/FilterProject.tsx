import { useFormik } from "formik";
import React, { FC } from "react";
import { Feature, Input, SelectBox } from "../../../../components";
import "./FilterProject.scss";

export const FilterProjects: FC<IFilterProject> = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Status: 0,
      Options: [
        //[value-option, content-option]
        [0, "Tất cả"],
        [10, "Hoạt Động"],
        [90, "Ngưng Hoạt Động"],
      ],
      TypeDevice:0,
      Devices: [
        //[value-option, content-option]
        [0, "Tất cả"],
        [1, "Tất cả thiết bị (Laptop, Mobile)"],
        [2, "Tất cả Mobile"],
        [3, "Web Safari"],
        [4, "Web Mobile"],
        [5, "Web Laptop"],
        [6, "Web"],
        [7, "Tất cả Laptop"],
        [8, "Android APP"],
      ],
    },
    onSubmit: (values) => {
      const searchName = values.Name;
      const searchStatus = values.Status;
      const searchDevice = values.TypeDevice;
      handleSubmit(searchName, searchStatus, searchDevice);
    },
  });
  const handleOnChange = (valueSelect: number) => {
    formik.values.Status = valueSelect;
  };
  
  const handleOnChangee = (valueSelect: number) => {
    formik.values.TypeDevice=valueSelect;
  };
  const handleRetype = () => {
    window.location.replace("/projects");
  };

  return (
    <form className="form-project" onSubmit={formik.handleSubmit}>
      <div className="form-header">
        <h3>Tìm kiếm</h3>
        <Feature handleOnClick={handleRetype} />
      </div>
      <div className="form-body">
        <div>
          <Input
            label="Tên dự án"
            placeholder="Nhập tên dự án"
            type="text"
            id="Name"
            name="Name"
            value={formik.values.Name}
            onChange={formik.handleChange}
          />
        </div>
        <div>
        <SelectBox
            label="Thiết bị"
            id="Title"
            name="Title"
            options={formik.values.Devices}
            handleOnChange={handleOnChangee}
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
    </form>
  );
};
