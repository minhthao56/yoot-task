import { Fragment, useState } from 'react';
import { useFormik } from "formik";
import { ImScissors } from "react-icons/im";
import {  Button, SelectBox, Table } from '../../../../components';
import './PersonJoin.scss';


const numberTr =[1,2,3,4];

export const PersonJoin: React.FC<IPropsTab & IProps> = ({tab,listAccounts}) => {
    const all = [{Id:0,Name:""}]

	
	// get api for select option
	const concatUser =  [...all,...listAccounts];
    const optionUser = concatUser.map((item:any)=>{
		return [item.Id, item.Name]
	})
    const optionTypeTask = [
        [0,""],
        [10,"Requirer"],
        [50,"Assigner"],
        [90,"Assignee"],
        
    ]
    const [listRow,setListRow] = useState(numberTr);

    // handler add row
    const handleAddRow = (e:any) => {
        e.preventDefault();
        setListRow((listRow) => [...listRow,listRow[listRow.length - 1] + 1]);
    }
    const handleDeleteRow = (number:any)=>{
        const row = Number(number);
        setListRow(listRow.filter(item => item !== row));
    }
    // use for with select option
    const formik = useFormik({
		initialValues: {
			Status: 0,
			OptionTypeTask: optionTypeTask,
		},
		onSubmit: (values) => {
		},
	});
	const handleOnChange = (valueSelect: number) => {
		formik.values.Status = valueSelect;
	};
    return (
        <div className={tab ? "person-join show":"person-join"}>
            <h4 className="person-join__title">Các thành viên</h4>
            <div className="person-join__wrapper">
                <div className="person-join__wrapper-header">
                    <Button type="button" className="btn-addRow" handleOnClick={() => handleAddRow}>Thêm hàng</Button>
                </div>  
                <div className="person-join__wrapper-body">
                    <Table 
                    thead={["Người tham gia","Loại người tham gia","Tác vụ"]}
                    tbody={
                        <Fragment>
                        {
                            listRow.map((number)=> (
                                <tr key={number}>
                                    <td>
                                        <SelectBox id ="userJoin" name="userJoin"
                                        options={optionUser} handleOnChange={handleOnChange}/>
                                    </td>
                                    <td>
                                        <SelectBox id ="typeTaskUser" name="typeTaskuser" 
                                        options={optionTypeTask} handleOnChange={handleOnChange}/>
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
