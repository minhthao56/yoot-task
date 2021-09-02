import { FC } from "react";
import './BlankLayout.scss';

export const BlankLayout: FC = ({ children }) => {
	return( 
		<div className="blank-layout">
			<div className="second-bg">
				{children}
			</div>
		</div>
	)
};
