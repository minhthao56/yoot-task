import { Fragment, useState } from 'react';
import { ImScissors } from "react-icons/im";
import {  Button, SelectBox, Table } from '../../../../components';
import './PersonJoin.scss';


const numberTr =[1,2,3,4];

export const PersonJoin: React.FC<IPropsTab> = ({tab}) => {
    const optionUser = [
        [0,""],
        [16,"Duy Thanh"],
        [5,"Gia Huy"],
        [14,"Hữu"],
        [15,"Hữu Ý"],
        [17,"Huỳnh Trọng Nghĩa"],
        [10,"Kiên Phạm"],
        [7,"Minh Thảo"],
        [4,"Nam Quốc"],
        [18,"Nguyễn Hoài Nam"],
        [13,"Nguyễn Tấn Đạt"],
        [9,"San Nguyễn"],
        [6,"Sơn Lê"],
        [12,"Trần Anh Kiệt"],
        [8,"Vũ Lê"],
    ]
    const optionTypeTask = [
        [0,""],
        [10,"Requirer"],
        [50,"Assigner"],
        [90,"Assignee"],
        
    ]
    const [listRow,setListRow] = useState(numberTr);
    const [statusTypeTask,setStatusTypeTask] = useState(10);
    const [statusUser, setStatusUser] = useState(7);
   
    const handleChangeStatus = (valueSelect: number) => {
        setStatusUser(valueSelect);
        setStatusTypeTask(valueSelect);
    }   
    // handler add row
    const handleAddRow = () => {
        setListRow((listRow) => [...listRow,listRow[listRow.length - 1] + 1]);
    }
    const handleDeleteRow = (number:any)=>{
        const row = Number(number);
        setListRow(listRow.filter(item => item !== row));
    }
    
    return (
        <div className="person-join show">
            <h4 className="person-join__title">Các thành viên</h4>
            <div className="person-join__wrapper">
                <div className="person-join__wrapper-header">
                    <Button className="btn-addRow" handleOnClick={()=> {handleAddRow()}}>Thêm hàng</Button>
                </div>  
                <form className="person-join__wrapper-body">
                    <Table 
                    thead={["Người tham gia","Loại người tham gia","Tác vụ"]}
                    tbody={
                        <Fragment>
                        {
                            listRow.map((number)=> (
                                <tr key={number}>
                                    <td>
                                        <SelectBox id ="" name="" value=""
                                        options={optionUser} handleOnChange={handleChangeStatus}/>
                                    </td>
                                    <td>
                                        <SelectBox id ="" name="" value="" 
                                        options={optionTypeTask} handleOnChange={handleChangeStatus}/>
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
                    
                </form>
            </div>
        </div>
    )
}
