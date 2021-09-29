import { useFormik } from "formik";
import React, { FC } from "react";
import { Feature, Input, SelectBox } from "../../../../components";
import "./FilterStatusTask.scss";

export const FilterStatusTasks: FC<IFilterStatusTask> = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      Title: "",
      Status: 0,
      Options: [
        //[value-option, content-option]
        [0, "Tất cả"],
        [10, "Hoạt Động"],
        [90, "Ngưng Hoạt Động"],
      ],
    },
    onSubmit: (values) => {
      const searchTitle = values.Title;
      const searchStatusTask = values.Status;
      handleSubmit(searchTitle, searchStatusTask);
    },
  });
  const handleOnChange = (valueSelect: number) => {
    formik.values.Status = valueSelect;
  };
  const handleRetype = () => {
    window.location.replace("/status");
  };

  return (
    <form className="form-priority" onSubmit={formik.handleSubmit}>
      <div className="form-header">
        <h3>Tìm kiếm</h3>
        <Feature handleOnClick={handleRetype} />
      </div>
      <div className="form-body">
        <div>
          <Input
            label="Tên trạng thái"
            placeholder="Nhập tên trạng thái"
            type="text"
            id="Title"
            name="Title"
            value={formik.values.Title}
            onChange={formik.handleChange}
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
