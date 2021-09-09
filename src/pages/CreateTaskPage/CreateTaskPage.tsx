import { useState } from 'react';
import { Button } from '../../components';
import { CommonInfo, PersonJoin } from './components';
import './CreateTaskPage.scss';

export const CreateTaskPage = () => {
	const [showPersonJoin,setShowPersonJoin] = useState(true);
	const [showCommonInfo,setShowCommonInfo] = useState(false);
	// function handler tab
	const handleShowTabPerson = ()=>{
		if(showPersonJoin === false){
			setShowCommonInfo(false);
			setShowPersonJoin(true);
		}
		if(showCommonInfo === true){
			setShowCommonInfo(false);
		}
	}
	const handleShowTabJoin = ()=>{
		if(showPersonJoin === true){
			setShowPersonJoin(false);
			setShowCommonInfo(true);
		}
	}
    return (
        <div className="create-task">
			<div className="create-task__header">
				<h3 className="create-task__header-title">Tạo công việc mới</h3>
				<div className="create-task__header-right">
					<Button type="submit" isUpdate className="">Cập nhập</Button>
					<Button type="submit" isSave className="">Lưu</Button>
					<Button type="submit" isCancel className="">Hủy</Button>
				</div>
			</div>
			<div className="create-task__body">
				<div className="nav-tab">
					<div className="nav-tab__header">
						<span  className={showPersonJoin === true ? 'active':''} onClick={() =>{handleShowTabPerson()}}>Thông tin chung</span>
						<span  className={showCommonInfo === true ? 'active':''} onClick={() =>{handleShowTabJoin()}}>Người tham gia</span>
					</div>
					<div className="nav-tab__content">
						<CommonInfo tab={showPersonJoin}/>
						<PersonJoin tab={showCommonInfo}/>

					</div>
				</div>
			</div>
            
        </div>
    )
}
