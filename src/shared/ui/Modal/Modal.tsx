import React from "react";
import imgClose from "../assets/icons/closeBlack.svg";
import './style.css';


interface IProps {
    children: React.ReactNode;
    closeModal: (isShow: boolean) => void;
}

export const Modal = (props: IProps) => {
    const { children, closeModal } = props;

    const close = () => closeModal(false);

    const handleMouseClick = (event: React.MouseEvent<HTMLElement>) => {
        if(event.currentTarget === event.target) close();
    };

    return (
        <div className={'modal-overlay'} onClick={handleMouseClick}>
            <div className={'modal-container'}>
                    <img
                        className={'modal-close'}
                        src={imgClose}
                        alt={""}
                        onClick={close}/>
                {children}
            </div>
        </div>
    );
};