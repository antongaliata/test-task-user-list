import React, { useEffect } from "react";
import { IUser } from "../../../interfaces/users";
import { isShowComponent } from "../../../shared/hoc/isShowComponent";
import { Modal } from "../../../shared/ui/Modal/Modal";
import { Loader } from "../../../shared/ui/Loader/Loader";
import { useDispatch } from "react-redux";
import { resetUser } from "../../../store/action/usersActions";
import './style.css';

interface IProps {
	setIsShow: (isShow: boolean) => void
	user: IUser | null
}


const ModalInfoUserContainer = ({setIsShow, user}: IProps) => {
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(resetUser());
		}
	}, []);


	return (
		<Modal closeModal={setIsShow}>
			<div className={'user-modal-container'}>
				{!user
					? <Loader isLoading={!user}/>
					: <>
						<h1>{user.name} {user.username}</h1>
						<div className={'user-modal-company'}>
							<h2>Информация о компании</h2>
							<div className={'user-modal-company-row'}>
								<h6>Название:</h6>
								<span>{user.company.name}</span>
							</div>
							<div className={'user-modal-company-row'}>
								<h6>Адрес:</h6>
								<span>{user.address.city}, {user.address.street}, {user.address.suite}</span>
							</div>
						</div>
					</>}
			</div>
		</Modal>
	)
}

export const ModalInfoUser = isShowComponent(ModalInfoUserContainer);