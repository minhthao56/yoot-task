import { Switch } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";


import { CreateTaskPage, HomePage, LoginPage, TasksPage } from "../pages";

import { MainLayout, BlankLayout } from "../layouts";



export const Routers = () => {
  return (
    <Switch>
      <PrivateRouter exact component={HomePage} layout={MainLayout} path="/" />
      <PrivateRouter component={TasksPage} layout={MainLayout} path="/tasks" />
      <PrivateRouter component={CreateTaskPage} layout={MainLayout} path="/task/create" />

      <PublicRouter
        exact
        component={LoginPage}
        layout={BlankLayout}
        path="/login"
      />
    </Switch>
  );
};
