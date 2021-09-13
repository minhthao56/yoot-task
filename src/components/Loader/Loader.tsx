import { FC } from "react";
import "./Loader.scss";
export const Loader: FC<ILoader> = ({ loadding }) => {
  if (!loadding) return null;
  return (
    <div className="loader">
      <svg>
        <circle cx="40" cy="40" r="40"></circle>
      </svg>
    </div>
  );
};