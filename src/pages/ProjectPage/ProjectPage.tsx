import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { apiDevice, apiProject } from "../../services";
import { FilterProjects, TableProject } from "./components";
import "./ProjectPage.scss";

export const ProjectPage = () => {
  const [dataProjects, setDataProject] = useState<Array<IResProject>>([]);
  useEffect(() => {
    try {
      apiProject
        .getListProjects({})
        .then((res) => res.data)
        .then((data: IResGetListProjects) => {
          const listProject = data.Content.Projects;
          setDataProject(listProject);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleSearch = (Name: string, Status: number,TypeDevice:number) => {
    try {
      apiProject
        .getListProjects({
          Name,
          Status,
          TypeDevice
        })
        .then((res) => res.data)
        .then((data: IResGetListProjects) => {
          const listProjects = data.Content.Projects;
          setDataProject(listProjects);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCreate = () => {};
  return (
    <div className="project-page">
      <div className="filter_project">
        <FilterProjects handleSubmit={handleSearch} />
      </div>
      <div className="list_project">
        <div className="list_project-header">
          <h3>Danh sách dự án</h3>
          <Link to={"/projects/create"}>
            <Button isCreate type="submit" handleOnClick={handleCreate} />
          </Link>
        </div>
        <TableProject dataProject={dataProjects} />
      </div>
    </div>
  );
};
