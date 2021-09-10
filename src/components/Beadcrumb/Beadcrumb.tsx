import { FC } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import "./Beadcrumb.scss";
const routesList = {
  "/":"Trang chủ",
  "/tasks":"Task",
  "/plan":"kế hoạch",
  "/projects":"Dự án",
  "/status":"Trạng thái",
  "/criteria":"Tiêu chí",
  "/version":"Version",
  "/priority":"Mức độ",
  "/env":"Môi trường",
  "/devices":"Thiết bị",
}

export const Beadcrumb: FC<IBeadcrumb> = ({ title }) => {
  return (
    <div className="beadcrumb">
      <h3 className="beadcrumb__title">{title}</h3>
      {/* <Breadcrumbs mappedRoutes={routesList}
           WrapperComponent={(props: any) =>
             <ol className="breadcrumb">{props.children}</ol>}
           ActiveLinkComponent={(props: any) =>
             <li className="breadcrumb-item active" >{props.children}</li>}
           LinkComponent={(props: any) =>
             <li className="breadcrumb-item">{props.children}</li>
          } /> */}
      <ul className="links">
        <li className="links__home">
          <NavLink className="links__home--icon" to="/">
            <FaHome />
          </NavLink>
        </li>
        <li className="links__item">{title}</li>
      </ul>
    </div>
  );
};
