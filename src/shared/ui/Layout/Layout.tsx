import React from "react";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../../store/store";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Loader } from "../Loader/Loader";
import { Alert } from "../Alert/Alert";
import './style.css';

interface IProps {
	children: JSX.Element
}

export const Layout = ({children}: IProps) => {
	const {notification, isLoading} = useSelector((state: AppRootStateType) => state.common);

	return (
		<div className={'layout-container'}>
			<Header/>
			<Alert {...notification}/>
			<div className={'layout-content'}>
				<Loader isLoading={isLoading}/>
				{children}
			</div>
			<Footer/>
		</div>
	)
}