import { FilterTasks, TableTasks } from "./components";
import "./TasksPage.scss";

export const TasksPage = () => {

  const handleSubimit = () => {
    //distch 
  };

    return(
        <div className="task-page">
			<div className="task-page__header">
				<FilterTasks />
			</div>
			<div className="task-page__body">
				<TableTasks />
			</div>
        </div>
    ) 
};
