import { FC } from "react";
import "./Search.scss";
import search from "../../assets/images/search.png";

interface ISearch {
    label?: string,
    placeholder?: string,
    value?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    id?: string,
    name?: string,
    error?: string
}

export const Search: FC<ISearch> = ({ label, placeholder, value, onChange, id, name, error }) => {
    return (
        <div>
            <label className="Label" htmlFor={id}>{label}</label>
            <div className="Search">
                <img src={search} alt="" />
                <input className=""
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    id={id}
                    name={name}

                />
            </div>
            <div className="Err" style={{ opacity: error ? 1 : 0 }}>
                {error}
            </div>
        </div>
    )
}