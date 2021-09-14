import { useFormik } from "formik";
import React, { FC } from "react";
import { Feature, Input, SelectBox } from "../../../../components";
import "./FilterVersions.scss";

export const FilterVersions: FC<IFilterVersion> = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      Version: "",
      Status: 0,
      Options: [
        //[value-option, content-option]
        [0, "Tất cả"],
        [10, "Hoạt Động"],
        [90, "Ngưng Hoạt Động"],
      ],
    },
    onSubmit: (values) => {
      const searchVersion = values.Version;
      const searchStatus = values.Status;
      handleSubmit(searchVersion, searchStatus);
    },
  });
  const handleOnChange = (valueSelect: number) => {
    formik.values.Status = valueSelect;
  };
  const handleRetype = () => {
    window.location.replace("/version");
  };

  return (
    <form className="form-version" onSubmit={formik.handleSubmit}>
      <div className="form-header">
        <h3>Tìm kiếm</h3>
        <Feature handleOnClick={handleRetype} />
      </div>
      <div className="form-body">
        <Input
          label="Phiên bản"
          placeholder="Nhập tên phiên bản"
          type="text"
          id="Version"
          name="Version"
          value={formik.values.Version}
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