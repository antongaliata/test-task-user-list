import React, { useEffect, useRef } from "react";
import iconClose from '../assets/icons/close.svg';
import { isShowComponent } from "../../hoc/isShowComponent";
import { VARIANT_NOTIFICATION } from "../../../interfaces/common";
import { closeNotification } from "../../../store/action/commonActions";
import { useDispatch } from "react-redux";
import './style.css';


interface IProps {
	variant?: VARIANT_NOTIFICATION
	message?: string
	title?: string
}

const AlertContainer = ({ title, message, variant }: IProps) => {
	const dispatch = useDispatch();
	const timeOut = useRef<NodeJS.Timeout>();
	const classNameVariant = variant === VARIANT_NOTIFICATION.SUCCESS ? 'alert-success' : 'alert-error';

	useEffect(() => {
		timeOut.current = setTimeout(() => {
			close();
		}, 3000);

		return () =>{
			clearTimeout(timeOut.current);
		}
	});

	const close = () => {
		dispatch(closeNotification());
	};

	return (
		<div className={`alert-container ${classNameVariant}`}>
			<img
				className={'alert-button-close'}
				src={iconClose}
				alt={""}
				onClick={close} />
			<span className={'alert-title'}>{title}</span>
			<span className={'alert-description'}>{message}</span>
		</div>
	);
};

export const Alert = isShowComponent(AlertContainer);