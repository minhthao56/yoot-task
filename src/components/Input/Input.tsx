import { FC } from "react"
import "./Input.scss"

interface IInput {
    label?: string,
    placeholder?: string,
    value?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    id?: string,
    name?: string,
    error?: string
}
export const Input: FC<IInput> = ({ label, placeholder, value, onChange, id, name, error }) => {
    return (
        <div>
            <label className="Label" htmlFor={id}>{label}</label><br></br>
            <input className="Input"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                id={id}
                name={name}

            />
            <div className="Err" style={{ opacity: error ? 1 : 0 }}>
                {error}
            </div>
        </div>
    )
}