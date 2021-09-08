import { FC } from "react"
import "./SelectBox.scss"

interface ISelectBox {
    label?: string,
    placeholder?: string,
    value?: string,
    //onChange?: React.ChangeEventHandler<HTMLInputElement>
    id?: string,
    name?: string,
    error?: string
    options: Array<string>
}
export const SelectBox: FC<ISelectBox> = ({ label, placeholder, value, id, name, error, options }) => {
    return (
        <div className="select-box">
            <label htmlFor={id}>{label}</label>
            <select
            placeholder={placeholder}
            value={value}
            //onChange={onChange}
            id={id}
            name={name}
            >
                {options.map((option)=>(
                <option value={option}>{option}</option>
                ))}
                {/* <option value="">Lime</option>
                <option value="">Coconut</option>
                <option value="mngo">Mango</option> */}
            </select>
            <div className="Err" style={{ opacity: error ? 1 : 0 }}>
                {error}
            </div>
        </div>
    )
}