import {Link} from 'react-router-dom';
import './Sidebar.scss';
import Logo from '../../assets/images/logoYoot.png';
const sidebarItem = [
    {
        "display_name": "Trang chủ",
        "route": "/",
        "icon": "bx bx-tv"
    },
    {
        "display_name": "task",
        "route": "/task",
        "icon": "bx bxs-book-bookmark"
    },
    {
        "display_name": "kế hoạch",
        "route": "/plan",
        "icon": "fas fa-pencil-ruler"
    },
];
const sidebarItemNav = [
    {
        "display_name": "dự án",
        "route": "/projects",
        "icon": "bx bx-building-house"
    },
    {
        "display_name": "quy trình",
        "route": "/status",
        "icon": "fas fa-shipping-fast"
    },
    {
        "display_name": "tiêu chí",
        "route": "/plan",
        "icon": "bx bx-paper-plane"
    },
    {
        "display_name": "version",
        "route": "/version",
        "icon": "fas fa-dice-d6"
    },
    {
        "display_name": "mức độ",
        "route": "/plan",
        "icon": "bx bx-pulse"
    },
    {
        "display_name": "môi trường",
        "route": "/env",
        "icon": "bx bx-globe"
    },
    {
        "display_name": "thiết bị",
        "route": "/devices",
        "icon": "bx bx-briefcase"
    },
];
export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar__logo">
                    <img src={Logo} alt="logo yoot task" className="logo-img"/>
                </div>
            </div>
            <div className="sidebar-body">
                <ul className="sidebar-nav">
                    {
                        sidebarItem.map((item,index) => (
                            <Link to={item.route} key={index}>
                                <li className="sidebar__item">
                                    <div className="sidebar__item-inner">
                                        <i className={item.icon}></i>
                                        <span>{item.display_name}</span>
                                    </div>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
                <hr className="lines" />
                <h6 className="sidebar-heading">Dự án</h6>
                <ul className="sidebar-nav">
                    {
                        sidebarItemNav.map((item,index) => (
                            <Link to={item.route} key={index}>
                                <li className="sidebar__item">
                                    <div className="sidebar__item-inner">
                                        <i className={item.icon } id="icon-purple"></i>
                                        <span>{item.display_name}</span>
                                    </div>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
                <hr className="lines"/>
                <h6 className="sidebar-heading">Tài khoản</h6>
            </div>
        </div>
    )
}
