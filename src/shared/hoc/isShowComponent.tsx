import React from "react";

interface IsShowComponentProps {
	isShow: boolean
}

export const isShowComponent = <P extends object>(Component: React.ComponentType<P>): React.FC<P & IsShowComponentProps> => {
	return ({isShow, ...props}: IsShowComponentProps) =>{
		return isShow ? <Component {...props as P} /> : null;
	}
}