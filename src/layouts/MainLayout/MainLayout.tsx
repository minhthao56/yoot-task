import { FC } from "react";
import { Sidebar } from "../../components";
import "./MainLayout.scss";

export const MainLayout: FC = ({ children }) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-layout__bg" />
      <div className="main-layout__content">{children}</div>
    </div>
  );
};
