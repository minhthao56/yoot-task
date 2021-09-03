import { FC } from "react"
import "./Textarea.scss"

interface ITextarea {
    label?: string,
    placeholder?: string,
    value?: string,
    //onChange?: React.ChangeEventHandler<HTMLInputElement>
    id?: string,
    name?: string,
    error?: string
}
export const Textarea: FC<ITextarea> = ({ label, placeholder, value, id, name, error }) => {
    return (
        <div>
            <label className="Label" htmlFor={id}>{label}</label><br></br>
            <textarea className="Text"
                placeholder={placeholder}
                value={value}
                //onChange={onChange}
                id={id}
                name={name}

            />
            <div className="Err" style={{ opacity: error ? 1 : 0 }}>
                {error}
            </div>
        </div>
    )
}