import React from "react";
import { IUser } from "../../../interfaces/users";
import { UserRow } from "./UserRow/UserRow";
import './style.css';


interface IProps {
	users: IUser[]
	setOpenUserModal: () => void
}

export const UsersList = ({users, setOpenUserModal}: IProps) => {

	return (
		<div className={'user-list'}>
			<div className={'user-list-title'}>
				<span>Имя</span>
				<span>Фамилия</span>
				<span>Почта</span>
				<span>Удалить</span>
			</div>
			{users?.map(user => <UserRow key={user.id} user={user} setOpenUserModal={setOpenUserModal}/>)}
		</div>
	)
}