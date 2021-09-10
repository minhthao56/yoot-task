import { FC } from "react";
import "./Table.scss";

export const Table: FC<ITable> = ({ thead, tbody }) => {
  return (
    <table className="table">
      <thead className="table-head">
        <tr>
          {thead.map((th, idx) => (
            <th key={idx}>{th}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody className="table-body">{tbody}</tbody>
    </table>
  );
};
