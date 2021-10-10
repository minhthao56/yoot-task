import React from 'react'
import { FilterCriteria, TableCriteria } from './components'

export const CriteriaPage = () => {
    return (
        <div className="task-page">
			<div className="task-page__header">
				<FilterCriteria />
			</div>
			<div className="task-page__body">
				<TableCriteria/>
			</div>
        </div>
    )
}
