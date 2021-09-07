import { Switch } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

import { HomePage, LoginPage } from "../pages";
import { MainLayout, BlankLayout } from "../layouts";

export const Routers = () => {
  return (
    <Switch>
      <PrivateRouter exact component={HomePage} layout={MainLayout} path="/" />
      <PublicRouter
        exact
        component={LoginPage}
        layout={BlankLayout}
        path="/login"
      />
    </Switch>
  );
};
