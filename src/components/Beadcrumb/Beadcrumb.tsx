import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Beadcrumb.scss";

export const Beadcrumb: FC<IBeadcrumb> = ({ children, title }) => {
  return (
    <div className="beadcrumb">
      <h3 className="beadcrumb__title">{title}</h3>
      <ul className="links">
        <li className="links__home">
          <NavLink className="links__home--icon" to="/">
            <i className="fas fa-home"></i>
          </NavLink>
        </li>
        <li className="links__item">{title}</li>
      </ul>
    </div>
  );
};
