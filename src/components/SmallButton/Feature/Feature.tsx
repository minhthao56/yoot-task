import { FC } from "react";
import "./Feature.scss";

interface IFeature{
    handleOnClick: () => void
}
export const Feature: FC<IFeature> = ({handleOnClick}) => {
  return (
    <div className="bt">
      <div className="bt_feature">
        <button type="submit" className="bt_feature-search">Tìm kiếm</button>
      </div>
      <div className="bt_feature">
        <button onClick={handleOnClick} className="bt_feature-retype">Nhập lại</button>
      </div>
    </div>
  );
};
