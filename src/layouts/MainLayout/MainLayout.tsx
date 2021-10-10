import { FC } from "react";
import {Header,  Sidebar } from "../../components";
import "./MainLayout.scss";

export const MainLayout: FC = ({ children }) => {
	return (
	<div className="main-layout">
		<Sidebar />
		<div className="main-layout__bg" />
		<div className="main-layout__content">
			<Header />
			{children}
		</div>
	</div>
	);
};
