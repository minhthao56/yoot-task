import { useFormik } from "formik";
import React, { FC } from "react";
import { Feature, Input, SelectBox } from "../../../../components";
import "./Filter.scss";

interface IFilterDevice {
  handleSubmit: (searchDevice: string, searchStatus: number)=> void;
}

export const FilterDevices: FC<IFilterDevice> = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      Device: "",
      Status: 0,
      Options: [
        //[value-option, content-option]
        [0, "Tất cả"],
        [10, "Hoạt Động"],
        [90, "Ngưng Hoạt Động"],
      ],
    },
    onSubmit: (values) => {
      const searchDevice = values.Device;
      const searchStatus = values.Status;
      handleSubmit(searchDevice, searchStatus);
    },
  });
  const handleOnChange = (valueSelect: number) => {
    formik.values.Status = valueSelect;
  };
  const handleRetype = () => {
    window.location.replace("/device");
  };

  return (
    <form className="form-device" onSubmit={formik.handleSubmit}>
      <div className="form-header">
        <h3>Tìm kiếm</h3>
        <Feature handleOnClick={handleRetype} />
      </div>
      <div className="form-body">
        <Input
          label="Tiêu đề"
          placeholder="Nhập tiêu đề"
          type="text"
          id="Device"
          name="Device"
          value={formik.values.Device}
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
