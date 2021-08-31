import { FC } from "react";
import "./Button.scss";

export const Button: FC<IButton> = ({ children, color }) => {
  return <button className="btn">{children}</button>;
};
