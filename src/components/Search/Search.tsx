import { FC } from "react";
import "./Search.scss";
import { BiSearch } from "react-icons/bi";
// import search from "../../assets/images/search.png";


interface ISearch {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    id?: string;
    name?: string;
    error?: string;
    type?: string;
}

export const Search: FC<ISearch> = ({ label, placeholder, value, onChange, id, name, error,type }) => {
    return (
        <div>
            <label className="Label" htmlFor={id}>{label}</label>
            <div className="Search">
                {/* <img src={search} alt="" className="Search-icon"/> */}
                <span><BiSearch className="Search-icon"/></span>
                <input className="Search-input"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    id={id}
                    name={name}
                    type={type}

                />
            </div>
            <div className="Err" style={{ opacity: error ? 1 : 0 }}>
                {error}
            </div>
        </div>
    )
}