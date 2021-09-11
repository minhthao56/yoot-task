import { FC } from "react";
import "./SelectBox.scss";

interface ISelectBox {
  label?: string;
  placeholder?: string;
  value?: number;
  id?: string;
  name?: string;
  error?: string;
  options: Array<Array<number | string>>;
  handleOnChange: (valueSelect: number) => void;
}
export const SelectBox: FC<ISelectBox> = ({
  label,
  placeholder,
  value,
  id,
  name,
  error,
  options,
  handleOnChange,
}) => {
  return (
    <div className="select-box">
      <label htmlFor={id}>{label}</label>
      <select
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          const valueSelect = +e.target.value;
          handleOnChange(valueSelect);
        }}
        id={id}
        name={name}
      >
        {/*[[value, content], [value, content]] */}
        {options.map((option, idx) => (
          <option key={idx} value={option[0]}>
            {option[1]}
          </option>
        ))}
      </select>
      <div className="Err" style={{ opacity: error ? 1 : 0 }}>
        {error}
      </div>
    </div>
  );
};
