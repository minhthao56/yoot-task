import React from 'react'
import { FilterPlan, TablePlan } from './components'

export const PlanPage = () => {
    return (
        <div className="task-page">
			<div className="task-page__header">
				<FilterPlan />
			</div>
			<div className="task-page__body">
				<TablePlan />
			</div>
        </div>
    )
}
