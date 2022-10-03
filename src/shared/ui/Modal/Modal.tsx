import React from "react";
import imgClose from "../assets/icons/crossClose.svg";
import styles from "./styles.module.scss";

interface IProps {
    children: React.ReactNode;
    open: boolean;
    setOpen: (isOpen: boolean) => void;
}

export const Modal = (props: IProps) => {
    const { children, setOpen, open } = props;

    if (!open) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.close} onClick={() => setOpen(false)}>
                    <img src={imgClose} alt={""} />
                </div>
                {children}
            </div>
        </div>
    );
};
