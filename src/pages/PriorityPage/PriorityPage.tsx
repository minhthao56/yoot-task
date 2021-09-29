import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button} from "../../components";
import { apiPriority } from "../../services";
import { FilterPriority, TablePriority } from "./components";
import "./PriorityPage.scss";

export const PriorityPage = () => {
  const [dataPriorities, setDataPriorities] = useState<Array<IResPriority>>([]);
  useEffect(() => {
    try {
      apiPriority
        .getListPriorities({})
        .then((res) => res.data)
        .then((data: IResGetListPriorities) => {
          const listPriority = data.Content.Priorities;
          setDataPriorities(listPriority);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleSearch = (Title: string, Status: number) => {
    try {
      apiPriority
        .getListPriorities({
          Title,
          Status,
        })
        .then((res) => res.data)
        .then((data: IResGetListPriorities) => {
          const listPriority = data.Content.Priorities;
          setDataPriorities(listPriority);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCreate = () => {};
  return (
    <div className="priority-page">
      <div className="filter-priority">
        <FilterPriority handleSubmit={handleSearch} />
      </div>
      <div className="list-priority">
        <div className="list-priority__header">
          <h3>Danh sách mức độ</h3>
          <Link to={"/priority/create"}>
            <Button isCreate type="submit" handleOnClick={handleCreate} />
          </Link>
        </div>
        <TablePriority dataPriorities={dataPriorities} />
      </div>
    </div>
  );
};