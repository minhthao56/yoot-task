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
}
export const SelectBox: FC<ISelectBox> = ({ label, placeholder, value, id, name, error }) => {
    return (
        <div>
            <label className="Label" htmlFor={id}>{label}</label><br></br>
            <select
            className="SelectBox"
            placeholder={placeholder}
            value={value}
            //onChange={onChange}
            id={id}
            name={name}
            >
                <option value="">Grapefruit</option>
                <option value="">Lime</option>
                <option value="">Coconut</option>
                <option value="mngo">Mango</option>
            </select>
            <div className="Err" style={{ opacity: error ? 1 : 0 }}>
                {error}
            </div>
        </div>
    )
}