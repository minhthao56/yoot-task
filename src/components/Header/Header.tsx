import React from 'react';
import './Header.scss';
import  {Search,}  from '../Search/Search';
import { Avatar } from '../Avatar/Avatar';
import { Beadcrumb } from '../Beadcrumb/Beadcrumb';
export const Header = () => {
    return (
        <div className="header">
            <div className="header-nav">
                <Search placeholder="Tìm kiếm" type="search"/>
                <Avatar />
            </div>
            <div className="header-beadcrumb">
                <Beadcrumb title="Task"/>
            </div>
        </div>
    );
}


