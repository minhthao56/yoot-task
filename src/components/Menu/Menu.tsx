import "./Menu.scss";
import { BiRun } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Menu = (props: any) => {
	const { showMenu } = props;
	console.log(showMenu);
	return (
		<div className={showMenu ? "avatar-menu show" : "avatar-menu"}>
		<h6 className="avatar-menu__header">
			<span>Welcome !</span>
		</h6>
		<ul className="avatar-menu__body">
			<li className="avatar-menu__item">
				<Link to="/profile">
					<span className="icon">
					<FaUserAlt />
					</span>
					<span>Cập nhật thông tin</span>
				</Link>
			</li>
			<li className="avatar-menu__item">
				<Link to="/login">
					<span className="icon">
					<BiRun />
					</span>
					<span>Đăng xuất</span>
				</Link>
			</li>
		</ul>
		</div>
	);
};
