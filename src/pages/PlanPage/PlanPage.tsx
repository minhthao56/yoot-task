import React, { useEffect, useState } from 'react'
import { apiPlan } from '../../services';
import { FilterPlan, TablePlan } from './components'

export const PlanPage = () => {
	const [plans,setPlans] = useState([]);
	useEffect(() => {
		apiPlan
				.getListPlans({})
				.then((res)=>res.data)
				.then((data) => {
					const listPlan = data.Content.Plans;
					setPlans(listPlan);
				});

	},[]);
	console.log(plans);
    return (
        <div className="task-page">
			<div className="task-page__header">
				<FilterPlan />
			</div>
			<div className="task-page__body">
				<TablePlan dataPlans={plans}/>
			</div>
        </div>
    )
}
