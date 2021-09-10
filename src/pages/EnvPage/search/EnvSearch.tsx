import React, { useState } from 'react'
import { Button, Input, SelectBox } from '../../../components'
import './EnvSearch.scss'
const EnvSearch: React.FC<IEnvSearch> = ({ handleSearch }) => {
    const options = [[0, "Tất cả"], [1, "Hoạt Động"],
    [2, "Ngưng Hoạt Động"]];
    const [keyword, setKeyword] = useState('');
    const [status, setStatus] = useState(0);
    const handleChangeKeyword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setKeyword(e.target.value)
    }
    const handleClick = () => {
        handleSearch(keyword, status)
    }
    const handleChangeStatus = (valueSelect: number) => {
        setStatus(valueSelect);
    }
    const handleReset = () => {
        setKeyword('');
        setStatus(0);
        handleSearch('', 0);
    }
    return (
        <div className="envSearch">
            <div className="envSearch__wrapper">
                <div className="envSearch__title">
                    <h4>Tìm kiếm</h4>
                    <div className="envSearch__title__services">
                        <Button handleOnClick={handleClick} isSearch={true} />
                        <Button handleOnClick={handleReset} isReset={true} />
                    </div>
                </div>
                <div className="envSearch__content">
                    <div className="envSearch__content__name">
                        <Input value={keyword} onChange={handleChangeKeyword} label="Môi trường" placeholder="Nhập tên môi trường" />
                    </div>
                    <div className="envSearch__content__status">
                        {/* <div>
                            <label>
                                Trạng thái
                            </label>
                            <Select className="envSearch-select" />
                        </div> */}
                        <SelectBox label="Trạng thái" handleOnChange={handleChangeStatus} options={options} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnvSearch
