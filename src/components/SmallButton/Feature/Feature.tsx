import { FC } from "react";
import "./Feature.scss";

export const Feature: FC<IButton> = () => {
  return (
    <div className="bt">
      <div className="bt_feature">
        <button className="bt_feature-search">Tìm kiếm</button>
      </div>
      <div className="bt_feature">
        <button className="bt_feature-retype">Nhập lại</button>
      </div>
    </div>
  );
};
