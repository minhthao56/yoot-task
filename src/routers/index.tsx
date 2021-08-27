import { Switch } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { HomePage } from "../pages";
import { BlankLayout } from "../layouts";

export const Routers = () => {
  return (
    <Switch>
      <PrivateRouter exact component={HomePage} layout={BlankLayout} path="/" />
    </Switch>
  );
};
