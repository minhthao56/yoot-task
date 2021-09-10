import { Link } from "react-router-dom";
import { FiMonitor, FiActivity } from "react-icons/fi";
import { FaShippingFast, FaTelegramPlane } from "react-icons/fa";
import {
  RiBookMarkFill,
  RiPencilRulerFill,
  RiCommunityFill,
  RiBriefcase4Fill,
} from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoCube } from "react-icons/io5";
import "./Sidebar.scss";
import Logo from "../../assets/images/logoYoot.png";
const sidebarItem = [
  {
    display_name: "Trang chủ",
    route: "/",
    icon: FiMonitor,
  },
  {
    display_name: "task",
    route: "/tasks",
    icon: RiBookMarkFill,
  },
  {
    display_name: "kế hoạch",
    route: "/plans",
    icon: RiPencilRulerFill,
  },
];
const sidebarItemNav = [
  {
    display_name: "dự án",
    route: "/projects",
    icon: RiCommunityFill,
  },
  {
    display_name: "quy trình",
    route: "/status",
    icon: FaShippingFast,
  },
  {
    display_name: "tiêu chí",
    route: "/criteria",
    icon: FaTelegramPlane,
  },
  {
    display_name: "version",
    route: "/version",
    icon: IoCube,
  },
  {
    display_name: "mức độ",
    route: "/priority",
    icon: FiActivity,
  },
  {
    display_name: "môi trường",
    route: "/env",
    icon: AiOutlineGlobal,
  },
  {
    display_name: "thiết bị",
    route: "/devices",
    icon: RiBriefcase4Fill,
  },
];
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar__logo">
          <img src={Logo} alt="logo yoot task" className="logo-img" />
        </div>
      </div>
      <div className="sidebar-body">
        <ul className="sidebar-nav">
          {sidebarItem.map((item, index) => {
            const { icon: Icon, display_name, route } = item;
            return (
              <Link to={route} key={index}>
                <li className="sidebar__item">
                  <div className="sidebar__item-inner">
                    <Icon className="sidebar__item-inner-icon" />
                    <span>{display_name}</span>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
        <hr className="lines" />
        <h6 className="sidebar-heading">Dự án</h6>
        <ul className="sidebar-nav">
          {sidebarItemNav.map((item, index) => {
            const { icon: Icon, display_name, route } = item;
            return (
              <Link to={route} key={index}>
                <li className="sidebar__item">
                  <div className="sidebar__item-inner">
                    <Icon
                      className="sidebar__item-inner-icon"
                      id="icon-purple"
                    />
                    <span>{display_name}</span>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
        <hr className="lines" />
        <h6 className="sidebar-heading">Tài khoản</h6>
      </div>
    </div>
  );
};
