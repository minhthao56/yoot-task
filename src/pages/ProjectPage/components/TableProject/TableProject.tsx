import { FC, Fragment } from "react";
import { Actions, Table } from "../../../../components";

export const TableProject: FC<ITableProject> = ({ dataProject }) => {
  return (
    <Table
      thead={[
        "TÊN DỰ ÁN",
        "THIẾT BỊ",
        "TRẠNG THÁI",
        "THÔNG TIN TẠO",
        "THÔNG TIN SỬA",
      ]}
      tbody={
        <Fragment>
          {dataProject.map((info, idx) => (
            <tr key={idx}>
              <td>
                <b>{info.Name}</b>
              </td>
              <td>{info.TypeDevice}</td>
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
