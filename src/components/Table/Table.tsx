import { FC } from "react";
import "./Table.scss";

export const Table: FC<ITable> = ({ children, thead, tbody }) => {
  console.log(tbody);
  return (
    <>
      <table className="table">
        <thead className="table-head">
          <tr>
            {thead.map((th) => (
              <th>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {tbody.map((info) => (
            <tr>
              <td>{info.name}</td>
              <td>{info.device}</td>
              <td>{info.state}</td>
              <td>
                {info.infoCreated.username}
                <br />
                {info.infoCreated.dateCreated}
              </td>
              <td>
                {info.infoEdit.username}
                <br />
                {info.infoEdit.dateEdit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
