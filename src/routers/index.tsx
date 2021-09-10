import { Switch } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

import { EnvPage, HomePage, LoginPage, PriorityPage, VersionPage } from "../pages";
import { MainLayout, BlankLayout } from "../layouts";
import { CreatePriorityPage } from "../pages/CreatePriorityPage/CreatePriorityPage";
import { CreateVersionPage } from "../pages/CreateVersionPage/CreateVersionPage";

export const Routers = () => {
  return (
    <Switch>
      <PrivateRouter exact component={HomePage} layout={MainLayout} path="/" />
      <PrivateRouter exact component={VersionPage} layout={MainLayout} path="/version" />
      <PrivateRouter exact component={PriorityPage} layout={MainLayout} path="/priority" />
      <PrivateRouter exact component={CreateVersionPage} layout={MainLayout} path="/version/create" />
      <PrivateRouter exact component={CreatePriorityPage} layout={MainLayout} path="/priority/create" />
      <PrivateRouter exact component={EnvPage} layout={MainLayout} path="/env" />


      <PublicRouter
        exact
        component={LoginPage}
        layout={BlankLayout}
        path="/login"
      />
    </Switch>
  );
};
