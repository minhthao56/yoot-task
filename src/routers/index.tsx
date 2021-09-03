import { Switch } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { HomePage } from "../pages";
import { BlankLayout, MainLayout } from "../layouts";

export const Routers = () => {
  return (
    <Switch>
      <PrivateRouter exact component={HomePage} layout={MainLayout} path="/" />
    </Switch>
  );
};
