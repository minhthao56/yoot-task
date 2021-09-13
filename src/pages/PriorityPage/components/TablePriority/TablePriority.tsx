import { FC, Fragment } from "react";
import { Actions, Table } from "../../../../components";

export const TablePriority: FC<ITablePriority> = ({ dataPriorities }) => {
  return (
    <Table
      thead={[
        "Tiêu đề",
        "Thứ tự ưu tiên",
        "Trạng thái",
        "Thông tin tạo",
        "Thông tin sửa",
      ]}
      tbody={
        <Fragment>
          {dataPriorities.map((info, idx) => (
            <tr key={idx}>
              <td>
                <b>{info.Title}</b>
              </td>
              <td>{info.OrderView}</td>
              <td>{info.StatusText}</td>
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
    />
  );
};