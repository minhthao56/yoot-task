import { Switch } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";


import { CreateTaskPage, HomePage, LoginPage, TasksPage, UpdateTaskPage } from "../pages";

import { MainLayout, BlankLayout } from "../layouts";



export const Routers = () => {
  return (
    <Switch>
      <PrivateRouter exact component={HomePage} layout={MainLayout} path="/" />
      <PrivateRouter exact component={TasksPage} layout={MainLayout} path="/tasks" />
      <PrivateRouter exact component={CreateTaskPage} layout={MainLayout} path="/tasks/create" />
      <PrivateRouter exact component={UpdateTaskPage} layout={MainLayout} path="/tasks/update/:Id" />

      <PublicRouter
        exact
        component={LoginPage}
        layout={BlankLayout}
        path="/login"
      />
    </Switch>
  );
};
