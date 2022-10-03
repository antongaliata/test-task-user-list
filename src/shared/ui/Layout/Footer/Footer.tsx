import React from "react";
import iconLinkedin from '../../assets/icons/linkedin.png';
import './style.css';


export const Footer = () => {

	const redirectLinkedin = () => {
		window.open('https://www.linkedin.com/in/anton-galiata-711234207/');
	};

	return (
		<div className={'footer-container'}>
			<div className={'footer-content'}>
				<h1 className={'footer-title'}>Исполнитель</h1>
			<span className={'footer-link'} onClick={redirectLinkedin}>
				Антон Г.В.
				<img className={'footer-icon'} src={iconLinkedin} alt={''}/>
			</span>
			</div>
		</div>
	)
}