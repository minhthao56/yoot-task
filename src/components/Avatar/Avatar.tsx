import "./Avatar.scss";
import { Menu } from "../Menu/Menu";
import { useState } from "react";

export const Avatar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="avatar">
      <div className="avatar-box" onClick={() => setShowMenu(!showMenu)}>
        <span>
          <img
            src="https://task.yoot.vn/img/theme/team-4.jpg"
            alt=""
            className="avatar__img"
          />
        </span>
        <span className="avatar__name">Minh thao</span>
      </div>
      <Menu showMenu={showMenu} />
    </div>
  );
};
