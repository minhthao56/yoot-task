import React, { Fragment, useEffect, useState } from "react";
import { Actions, Button, Input, SelectBox, Table } from "../../components";
import { apiVersion } from "../../services/api/apiVersion";
import { TableVersion } from "./components";

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
  const handleSubimit = () => {
    //distch
  };

  return (
    <div className="version-page">
      <form className="form-version" >
          
      </form>
      <div className="list-version">
        <div className="list-version__header">
          <h3>Danh Sách Version</h3>
          <Button type="submit" isCreate/>
        </div>
        <TableVersion dataVersions={dataVersions}/>
      </div>
    </div>
  );
};
