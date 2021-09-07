import React, { useState } from "react";
import { Input, SelectBox, Table } from "../../components";
import { FilterVersion } from "./components";

import "./VersionPage.scss";

export const VersionPage = () => {
  const handleSubimit = () => {
    //distch
  };

  return (
    <div className="version-page">
      <div className="list-version">
        <Table
          thead={["Tiêu đề", "Trạng thái", "Thông tin tạo", "Thông tin sửa"]}
          tbody={undefined}
        ></Table>
      </div>
    </div>
  );
};
