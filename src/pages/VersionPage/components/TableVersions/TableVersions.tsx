import React, { FC, Fragment } from "react";
import { Actions, Table } from "../../../../components";

export const TableVersions: FC<ITableVersion> = ({ dataVersions }) => {
  return (
    <Table
      thead={["Tiêu đề", "Trạng thái", "Thông tin tạo", "Thông tin sửa"]}
      tbody={
        <Fragment>
          {dataVersions.map((info, idx) => (
            <tr key={idx}>
              <td>
                <b>{info.Title}</b>
              </td>
              <td>
                <b>{info.StatusText}</b>
              </td>
              <td>
                {info.CreateUserName}
                <br />
                {info.CreateDate}
              </td>
              <td>
                {info.UpdateUserName}
                <br />
                {info.UpdateDate}
              </td>
              <td>
                <Actions />
              </td>
            </tr>
          ))}
        </Fragment>
      }
    ></Table>
  );
};