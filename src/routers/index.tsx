import { Switch } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

import { HomePage, LoginPage, VersionPage } from "../pages";
import { MainLayout, BlankLayout } from "../layouts";
import { CreateVersionPage } from "../pages/VersionPage/CreateVersionPage/CreateVersionPage";

export const Routers = () => {
  return (
    <Switch>
      <PrivateRouter exact component={HomePage} layout={MainLayout} path="/" />
      <PrivateRouter exact component={VersionPage} layout={MainLayout} path="/version" />
      <PrivateRouter exact component={CreateVersionPage} layout={MainLayout} path="/version/create" />


      <PublicRouter
        exact
        component={LoginPage}
        layout={BlankLayout}
        path="/login"
      />
    </Switch>
  );
};
