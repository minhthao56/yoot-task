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
    option?:ISelectOption[]
}
interface ISelectOption{    
    value: string,
    label: string,
}
export const SelectBox: FC<ISelectBox> = ({option, label, placeholder, value, id, name,onChange, error }) => {
    return (
        <>
            <label className="Label" htmlFor={id}>{label}</label><br></br>
            <select
            className="SelectBox"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            id={id}
            name={name}
            >
                {
                    option?.map(({value,label},index) => (
                        <option key={index} value={value}>{label}</option>
                    ))
                }
                {/* <option value="">all</option>
                <option value="">Lime</option>
                <option value="">Coconut</option>
                <option value="mngo">Mango</option> */}
            </select>
            <div className="Err" style={{ opacity: error ? 1 : 0 }}>
                {error}
            </div>
        </>
    )
}

