import "./Avatar.scss";
import { Menu } from "../Menu/Menu";
import { useCallback, useEffect, useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { useRef } from "react";

export const Avatar = () => {
  const modalRef = useRef()
  const [showMenu, setShowMenu] = useState(false);
  const keyPress = useCallback((e)=>{
    if(e.key === 'Escape' && showMenu){
      setShowMenu(true);
    }
  },[setShowMenu,showMenu]);
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return ()=> document.removeEventListener('keydown', keyPress);
  });
  const closeModal = (e:any)=>{
    if(modalRef.current === e.target){
      setShowMenu(false)
    }
  }
  return (
    <div className="avatar">
      <IoNotifications className="avatar-icon__notify"/>
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
