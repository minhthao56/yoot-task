import React from 'react';
import './Header.scss';
import  {Search,}  from '../Search/Search';
import { Avatar } from '../Avatar/Avatar';
import { Beadcrumb } from '../Beadcrumb/Beadcrumb';
import { Route } from 'react-router';
import { FiAlignLeft } from 'react-icons/fi';
const routesList = [
    {
        path:'/',
        exact:true,
        title:"Trang chủ",
    },
    {
        path:'/tasks',
        title:"Task",
    },
    {
        path:'/plans',
        title:"kế hoạch",
    },
    {
        path:'/projects',
        title:"Dự án",
    },
    {
        path:'/status',
        title:"Quy trình",
    },
    {
        path:'/criteria',
        title:"Tiêu chí",
    },
    {
        path:'/version',
        title:"Version",
    },
    {
        path:'/priority',
        title:"Mức độ",
    },
    {
        path:'/env',
        title:"Môi trường",
    },
    {
        path:'/device',
        title:"Thiết bị",
    },
];
export const Header = () => {
    
    return (
        <div className="header">
            <div className="header-nav">
                <FiAlignLeft className="icon-toggle"/>
                <Search placeholder="Tìm kiếm" type="search"/>
                <Avatar />
            </div>
            <div className="header-beadcrumb">
                {
                    routesList.map((title:any)=>(
                        <Route
                            key={title.path}
                            path={title.path}
                            exact={title.exact}
                        >
                            <Beadcrumb title={title.title}/>
                        </Route>
                    ))
                }
            </div>
        </div>
    );
}


