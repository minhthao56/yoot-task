import React, { useEffect, useState } from "react";
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
          setDataVersions(data.Content.Versions);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleSubmit = (searchVersion: string, searchStatus: number) => {
    try {
      apiVersion
        .getListVersions({
          Title: searchVersion,
          Status: searchStatus,
        })
        .then((res) => res.data)
        .then((data: IResGetListVersions) => {
          setDataVersions(data.Content.Versions);
        });
    } catch (error) {
      console.log(error);
    }
  }
  const handleCreate = () => {
    
  }

  return (
    <div className="version-page">
      <div className="form-version">
        <FilterVersions handleSubmit={handleSubmit} />
      </div>
      <div className="list-version">
        <div className="list-version__header">
          <h3>Danh Sách Version</h3>
          <Button isCreate type="submit"  handleOnClick = {handleCreate}  />
        </div>
        <TableVersions dataVersions={dataVersions} />
      </div>
    </div>
  );
};
