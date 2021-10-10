import { FC } from "react";
import "./Actions.scss";
import { GiLaptop } from "react-icons/gi";
import { RiPencilRulerFill } from "react-icons/ri";
import { ImScissors } from "react-icons/im";

export const Actions: FC<IButton> = ({onDelete}) => {
  return (
    <div className="bt">
      <div className="bt_style">
        <button className="bt_style-info">
          <GiLaptop />
        </button>
      </div>
      <div className="bt_style">
        <button className="bt_style-edit">
          <RiPencilRulerFill />
        </button>
      </div>
      <div className="bt_style">
        <button className="bt_style-delete" onClick={onDelete}>
          <ImScissors />
        </button>
      </div>
    </div>
  );
};
