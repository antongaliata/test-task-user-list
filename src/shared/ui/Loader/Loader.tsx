import React from "react";
import './style.css';

interface IProps {
	isLoading: boolean
}

export const Loader = ({isLoading}: IProps) => {

	if (!isLoading) return null;

	return (
		<div className={"lds-ring"}>
			<div className={'lds-container'}>
			<div/><div/><div/><div/>
			</div>
		</div>
	)
}