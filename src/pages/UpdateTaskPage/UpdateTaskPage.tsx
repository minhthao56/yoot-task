import { useState } from 'react';
import { Button } from '../../components';
import { Comment, CommonInfo, HistoryStatus, ImageVideo, PersonJoin, Tab, TabNav } from './components';
import './UpdateTaskPage.scss';

export const UpdateTaskPage = () => {
	const [selected,setShowSelected] = useState('Thông tin chung');
	// function handler tab
	
	const setSelected = (tab:any) =>{
		setShowSelected(tab);
	}
    return (
        <div className="update-task">
			<div className="update-task__header">
				<h3 className="update-task__header-title">Chỉnh sửa công việc</h3>
				<div className="update-task__header-right">
					<Button type="submit" isSave className="">Lưu</Button>
					<Button type="submit" isCancel className="">Hủy</Button>
				</div>
			</div>
			<div className="update-task__body">
				<div className="nav-tab">
					<TabNav tabs={['Thông tin chung','Hình ảnh/Video','Người tham gia','Bình luận','Lịch sử chuyển trạng thái']}
						selected={selected} setSelected={setSelected }
					>
						<div className="nav-tab__content">
							<Tab isSelected={selected === 'Thông tin chung' }>
								<CommonInfo/>
							</Tab>
							<Tab isSelected={selected === 'Người tham gia' }>
								<PersonJoin/>
							</Tab>
							<Tab isSelected={selected === 'Hình ảnh/Video' }>
								<ImageVideo/>
							</Tab>
							<Tab isSelected={selected === 'Bình luận' }>
								<Comment/>
							</Tab>
							<Tab isSelected={selected === 'Lịch sử chuyển trạng thái' }>
								<HistoryStatus/>
							</Tab>
						</div>
					</TabNav>
				</div>
			</div>
            
        </div>
    )
}
