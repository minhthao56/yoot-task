// import { Sidebar } from "../../components";

import { Input, Search, SelectBox, Textarea } from "../../components";

import "./HomePage.scss";
export const HomePage = () => {
    return (
        <div className="home-page">
            <Input placeholder = "TEST" label = "TEST" error = "Erorr"/>
            <Search placeholder="Tìm kiếm"/>
            <SelectBox label="Test"/>
            <Textarea placeholder="Nhập gì đó..." label="Test" />
        </div>
    );
};
