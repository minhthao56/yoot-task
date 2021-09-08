import { FC } from "react";
import "./Input.scss";

interface IInput {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
  name?: string;
  error?: string | boolean;
  type?: string;
}
export const Input: FC<IInput> = ({
  label,
  placeholder,
  value,
  onChange,
  id,
  name,
  error,
  type,
}) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>
        {label}
      </label>

      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        type={type}
      />
      <div className="Err" style={{ opacity: error ? 1 : 0 }}>
        {error}
      </div>
    </div>
  );
};
