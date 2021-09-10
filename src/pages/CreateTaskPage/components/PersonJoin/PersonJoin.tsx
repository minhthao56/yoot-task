import { Fragment } from 'react';
import { ImScissors } from "react-icons/im";
import {  Button, SelectBox, Table } from '../../../../components';
import './PersonJoin.scss';


const numberTr =['1','2','3','4'];

export const PersonJoin: React.FC<IPropsTab> = ({tab}) => {
    const handleDeleteRow = (number:any)=>{
        console.log('hihi',number);
    }
    
    return (
        <div className={tab ? "person-join show":"person-join"}>
            <h4 className="person-join__title">Các thành viên</h4>
            <div className="person-join__wrapper">
                <div className="person-join__wrapper-header">
                    <Button className="btn-addRow">Thêm hàng</Button>
                </div>  
                <div className="person-join__wrapper-body">
                    <Table 
                    thead={["Người tham gia","Loại người tham gia","Tác vụ"]}
                    tbody={
                        <Fragment>
                        {
                            numberTr.map((number)=> (
                                <tr key={number}>
                                    <td>
                                        <SelectBox />
                                    </td>
                                    <td>
                                        <SelectBox />
                                    </td>
                                    <td>
                                        <div className="bt_style">
                                            <button className="bt_style-delete" onClick={()=>{handleDeleteRow(number)}}>
                                            <ImScissors />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                            
                        </Fragment>   
                    }
                    />
                    
                </div>
            </div>
        </div>
    )
}
