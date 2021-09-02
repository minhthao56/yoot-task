import { FC } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

import "./Beadcrumb.scss";
import { FaHome } from 'react-icons/fa';

export const Beadcrumb: FC<IBeadcrumb> = ({ title }) => {
  return (
    <div className="beadcrumb">
      <h3 className="beadcrumb__title">{title}</h3>
      <ul className="links">
        <li className="links__home">
          <NavLink className="links__home--icon" to="/">
            <AiFillHome />
          </NavLink>
        </li>
        <li className="links__item">{title}</li>
      </ul>
    </div>
  );
};
