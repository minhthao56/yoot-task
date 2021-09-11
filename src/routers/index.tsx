import { Switch } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

import { HomePage, LoginPage, DevicePage } from "../pages";
import { MainLayout, BlankLayout } from "../layouts";

//import { CreateVersionPage } from "../pages/CreateVersionPage/CreateVersionPage";

export const Routers = () => {
  return (
    <Switch>
      <PrivateRouter exact component={HomePage} layout={MainLayout} path="/" />
      <PrivateRouter exact component={DevicePage} layout={MainLayout} path="/device" />
      {/*<PrivateRouter exact component={CreateVersionPage} layout={MainLayout} path="/version/create" />*/}


      <PublicRouter
        exact
        component={LoginPage}
        layout={BlankLayout}
        path="/login"
      />
    </Switch>
  );
};
