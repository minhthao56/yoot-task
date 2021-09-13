import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { apiStatusTask } from "../../services";
import { FilterStatusTasks, TableStatusTask } from "./components";
import "./StatusTaskPage.scss";

export const StatusTaskPage = () => {
  const [dataStatusTask, setDataStatusTask] = useState<Array<IReStatusTask>>([]);
  useEffect(() => {
    try {
      apiStatusTask
        .getListStatusTasks({})
        .then((res) => res.data)
        .then((data: IResGetListStatusTasks) => {
          const listStatusTask = data.Content.StatusTasks;
          setDataStatusTask(listStatusTask);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleSearch = (Title: string, Status: number) => {
    try {
      apiStatusTask
        .getListStatusTasks({
        Title,
        Status
        })
        .then((res) => res.data)
        .then((data: IResGetListStatusTasks) => {
          const listStatusTask = data.Content.StatusTasks;
          setDataStatusTask(listStatusTask);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCreate = () => {};
  return (
    <div className="priority-page">
      <div className="filter-priority">
        <FilterStatusTasks handleSubmit={handleSearch} />
      </div>
      <div className="list-priority">
        <div className="list-priority__header">
          <h3>Danh sách trạng thái task</h3>
          <Link to={"/status/create"}>
            <Button isCreate type="submit" handleOnClick={handleCreate} />
          </Link>
        </div>
        <TableStatusTask dataStatusTask={dataStatusTask} />
      </div>
    </div>
  );
};
