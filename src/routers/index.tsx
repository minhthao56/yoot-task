import { Switch } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";




import { MainLayout, BlankLayout } from "../layouts";



import {  DevicePage ,ProjectPage,StatusTaskPage,CreateStatusPage,CreateProjectPage,  CreateTaskPage, HomePage, LoginPage, TasksPage, UpdateTaskPage } from "../pages";


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
      <PrivateRouter exact component={CreateProjectPage} layout={MainLayout} path="/projects/create" />

      <PublicRouter
        exact
        component={LoginPage}
        layout={BlankLayout}
        path="/login"
      />
    </Switch>
  );
};
