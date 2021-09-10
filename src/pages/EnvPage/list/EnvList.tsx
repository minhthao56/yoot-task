import React from 'react'
import { Button, Table } from '../../../components'
import './EnvList.scss'
const EnvList: React.FC<IEnvList> = ({ tableProps }) => {

    return (
        <div className="envList">
            <div className="envList__wrapper">
                <div className="envList__title">
                    <h4>
                        Danh sách Environment
                    </h4>
                    <div className="envList__title__services">
                        <Button isCreate={true} />
                    </div>
                </div>
                <div className="envList__table">
                    <Table {...tableProps} />
                </div>
            </div>
        </div>
    )
}

export default EnvList
