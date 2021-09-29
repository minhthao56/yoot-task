import { Switch } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";




import { MainLayout } from "../layouts";



import {DevicePage ,ProjectPage,StatusTaskPage,CreateStatusPage,CreateProjectPage,  
CreateTaskPage, HomePage, LoginPage, TasksPage, UpdateTaskPage, CreatePriorityPage, 
PriorityPage, VersionPage, CreateVersionPage,NewProjectPage,UpdateProjectPage, 
NewStatusPage, UpdateStatusPage, PlanPage, CriteriaPage, ProfilePage, EnvPage, CreateEnvPage } from "../pages";
import {BlankLayout } from "../layouts";

import { CreateDevicePage } from "../pages/CreateDevicePage/CreateDevicePage";


export const Routers = () => {
  return (
    <Switch>
      <PrivateRouter exact component={HomePage} layout={MainLayout} path="/" />
      <PrivateRouter exact component={TasksPage} layout={MainLayout} path="/tasks" />
      <PrivateRouter exact component={CreateTaskPage} layout={MainLayout} path="/tasks/create" />
      <PrivateRouter exact component={UpdateTaskPage} layout={MainLayout} path="/tasks/update/:Id" />
      <PrivateRouter exact component={DevicePage} layout={MainLayout} path="/device" />
      <PrivateRouter exact component={CreateDevicePage} layout={MainLayout} path="/device/create" />
      <PrivateRouter exact component={ProjectPage} layout={MainLayout} path="/projects" />
      <PrivateRouter exact component={StatusTaskPage} layout={MainLayout} path="/status" />
      <PrivateRouter exact component={CreateStatusPage} layout={MainLayout} path="/status/create" />
      <PrivateRouter exact component={NewStatusPage} layout={MainLayout} path="/status/new/:Id" />
      <PrivateRouter exact component={UpdateStatusPage} layout={MainLayout} path="/status/update/:Id" />
      <PrivateRouter exact component={CreateProjectPage} layout={MainLayout} path="/projects/create" />
      <PrivateRouter exact component={NewProjectPage} layout={MainLayout} path="/projects/new/:Id" />
      <PrivateRouter exact component={UpdateProjectPage} layout={MainLayout} path="/projects/update/:Id" />
      <PrivateRouter exact component={CreatePriorityPage} layout={MainLayout} path="/priority/create" />
      <PrivateRouter exact component={PriorityPage} layout={MainLayout} path="/priority" />
      <PrivateRouter exact component={VersionPage} layout={MainLayout} path="/version" />
      <PrivateRouter exact component={CreateVersionPage} layout={MainLayout} path="/version/create" />
      <PrivateRouter exact component={PlanPage} layout={MainLayout} path="/plans" />
      <PrivateRouter exact component={CriteriaPage} layout={MainLayout} path="/criteria" />
      <PrivateRouter exact component={EnvPage} layout={MainLayout} path="/env" />
      <PrivateRouter exact component={CreateEnvPage} layout={MainLayout} path="/env/create" />
      <PrivateRouter exact component={ProfilePage} layout={MainLayout} path="/profile" />


      <PublicRouter
        exact
        component={LoginPage}
        layout={BlankLayout}
        path="/login"
      />
    </Switch>
  );
};
