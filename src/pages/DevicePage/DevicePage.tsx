import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { apiDevice } from "../../services/api/apiDevice";
import { FilterDevices, TableDevices } from "./components";
import "./DevicePage.scss";

export const DevicePage = () => {
  const [dataDevices, setDataDevices] = useState<Array<IResDevice>>([]);
  useEffect(() => {
    try {
        apiDevice
        .getListDevices({})
        .then((res) => res.data)
        .then((data: IResGetListDevices) => {
          const listDevice = data.Content.Devices;
          setDataDevices(listDevice);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleSearch = (Title: string, Status: number) => {
    try {
        apiDevice
        .getListDevices({
          Title,
          Status,
        })
        .then((res) => res.data)
        .then((data: IResGetListDevices) => {
          //const listDevice = data.Content.Devices;
          setDataDevices(data.Content.Devices);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCreate = () => {};
  return (
    <div className="device-page">
      <div className="filter-device">
        <FilterDevices handleSubmit={handleSearch} />
      </div>
      <div className="list-device">
        <div className="list-device__header">
          <h3>Danh sách loại thiết bị</h3>
          <Link to={"/device/create"}>
            <Button isCreate type="submit" handleOnClick={handleCreate} />
          </Link>
        </div>
        <TableDevices dataDevices={dataDevices} />
      </div>
    </div>
  );
};