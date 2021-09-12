import { FC } from "react";
import "./SelectBox.scss";

interface ISelectBox {

    label?: string,
    placeholder?: string,
    value?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>
    id?: string,
    name?: string,
    error?: string,
    options?: Array<Array<number | string> | any>;
    handleOnChange: (valueSelect: number) => void;
}
export const SelectBox: FC<ISelectBox> = ({options, label, placeholder, value, id, name,handleOnChange, error }) => {
    return (
        <>
            <label className="Label" htmlFor={id}>{label}</label><br></br>
            <select
            className="SelectBox"
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
                const valueSelect = +e.target.value;
                handleOnChange(valueSelect);
              }}
            id={id}
            name={name}
            >
                {options?.map((option, idx) => (
                    <option key={idx} value={option[0]}>
                        {option[1]}
                    </option>
                ))}
                
            </select>
            <div className="Err" style={{ opacity: error ? 1 : 0 }}>
                {error}
            </div>
        </>
    )
}

