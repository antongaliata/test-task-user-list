import React from "react";
import { IUser } from "../../../../interfaces/users";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../../../store/store";
import { highlightFoundText } from "./helper";
import { deleteUser, setUser } from "../../../../store/action/usersActions";
import { setNotification } from "../../../../store/action/commonActions";
import { VARIANT_NOTIFICATION } from "../../../../interfaces/common";
import iconDelete from '../../../../shared/ui/assets/icons/delete.svg';
import './style.css';


interface IProps {
	user: IUser
	setOpenUserModal: () => void
}

export const UserRow = ({user, setOpenUserModal}: IProps) => {
	const {searchText} = useSelector((state: AppRootStateType) => state.users);
	const {name, username, email} = user;
	const dispatch = useDispatch();

	const handlerDeleteUser = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		dispatch(deleteUser(user.id));
		dispatch(setNotification({
			isShow: true,
			title: 'Успешно!',
			message: `Пользователь ${name} удален`,
			variant: VARIANT_NOTIFICATION.SUCCESS
		}));
	};

	const showInfoUser = () => {
		setOpenUserModal();
		dispatch(setUser(user));
	};

	return (
		<div className={'user-row'} onClick={showInfoUser}>
			<span>{highlightFoundText(name, searchText)}</span>
			<span>{highlightFoundText(username, searchText)}</span>
			<span>{highlightFoundText(email, searchText)}</span>
			<span className={'user-row-delete'}>
				<img onClick={handlerDeleteUser} src={iconDelete} alt={''}/>
			</span>
		</div>
	)
}
