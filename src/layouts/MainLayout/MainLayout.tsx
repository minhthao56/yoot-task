import {FC} from "react";
import { Sidebar } from "../../components";
import './MainLayout.scss';

export const MainLayout:FC = ({children}) => {
    return (
        <div className="main-layout">
            <Sidebar />
            <div className="main-content">
            {children}
            </div>
        </div>
    )
}
