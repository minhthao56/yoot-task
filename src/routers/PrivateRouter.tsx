import React from "react";
import { Route } from "react-router-dom";

export const PrivateRouter: React.FC<IPrivateRouter> = ({
  component: Component,
  layout: Layout,
  exact,
  path,
  header: Header,
  footer: Footer,
}) => {
  const token = localStorage.getItem("token");

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        if (!token) {
          localStorage.clear();
          window.location.replace("/login");
        }
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};
