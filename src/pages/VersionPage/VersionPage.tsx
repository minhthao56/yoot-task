import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { apiVersion } from "../../services/api/apiVersion";
import { FilterVersions, TableVersions } from "./components";
import "./VersionPage.scss";

export const VersionPage = () => {
  const [dataVersions, setDataVersions] = useState<Array<IResVersion>>([]);
  useEffect(() => {
    try {
      apiVersion
        .getListVersions({})
        .then((res) => res.data)
        .then((data: IResGetListVersions) => {
          const listVersions = data.Content.Versions;
          setDataVersions(listVersions);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleSearch = (Title: string, Status: number) => {
    try {
      apiVersion
        .getListVersions({
          Title,
          Status,
        })
        .then((res) => res.data)
        .then((data: IResGetListVersions) => {
          setDataVersions(data.Content.Versions);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCreate = () => {};
  const handleUpdate = () => {};
  const handleDelete = (id: number) => {
      alert("Id"+id);
      apiVersion.updateVersion({
          Id: id,
          Title: "Delete",
          Status: 100,
      }).then(() => {alert("Success")})
  };


  return (
    <div className="version-page">
      <div className="filter-version">
        <FilterVersions handleSubmit={handleSearch} />
      </div>
      <div className="list-version">
        <div className="list-version__header">
          <h3>Danh Sách Version</h3>
          <Link to={"/version/create"}>
            <Button isCreate type="submit" handleOnClick={handleCreate} />
          </Link>
        </div>
        <TableVersions dataVersions={dataVersions} handleDelete = {handleDelete} handleUpdate = {handleUpdate} />
      </div>
    </div>
  );
};