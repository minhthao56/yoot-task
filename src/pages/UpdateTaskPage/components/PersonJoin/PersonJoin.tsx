import { Fragment, useState } from 'react';
import { ImScissors } from "react-icons/im";
import {  Button, SelectBox, Table } from '../../../../components';
import './PersonJoin.scss';


const numberTr =[1,2,3,4];

export const PersonJoin: React.FC<IPropDataDetailTask & IPropUserTask> = ({dataDetailTask,listAccounts}) => {
    
    const optionTypeTask = [
        [0,""],
        [10,"Requirer"],
        [50,"Assigner"],
        [90,"Assignee"],
        
    ]
    const [listRow,setListRow] = useState<any>(dataDetailTask.TaskUsers);
    
	console.log('so hang',listRow);
	// get api for select option
    const all = [{Id:0,Name:""}]
	const concatUser =  [...all,...listAccounts];
    const optionUser = concatUser.map((item:any)=>{
		return [item.Id, item.Name]
	})
    
   
    const handleChangeStatus = (valueSelect: number) => {

    }   
    // handler add row
    const handleAddRow = () => {
        setListRow((listRow:any) => [...listRow,listRow[listRow.length - 1] + 1]);
    }
    const handleDeleteRow = (number:any)=>{
        const row = Number(number);
        // // const rowNew = listRow.slice(row, listRow.length - 1) 
        // listRow.forEach(function(index:any, number:any){
        //     if(listRow[index] === number){
        //         listRow.splice(index, 1);
        //     }
        //  });
        setListRow(listRow.filter((item:any) => item !== row));
        // setListRow(listRow);
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
                            listRow.map((user:any,index:number)=>(
                                // listRow.map((number)=> (

                                    <tr key={index}>
                                        <td>
                                            <SelectBox id ="userTask" name="userTask" value={user.UserId}
                                            options={optionUser} handleOnChange={handleChangeStatus}/>
                                        </td>
                                        <td>
                                            <SelectBox id ="typeUserTask" name="typeUserTask" value={user.TypeTaskUserId}
                                            options={optionTypeTask} handleOnChange={handleChangeStatus}/>
                                        </td>
                                        <td>
                                            <div className="bt_style">
                                                <button className="bt_style-delete" onClick={()=>{handleDeleteRow(index)}}>
                                                <ImScissors />  
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                // ))
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
