import React, { useEffect, useState } from "react";
import { getUsers } from "../../store/action/usersActions";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../store/store";
import { UsersList } from "../../features/users/UsersList/UsersList";
import { Filter } from "../../features/users/Filter/Filter";
import { ModalInfoUser } from "../../features/users/ModalInfoUser/ModalInfoUser";
import './styles.css';


export const Users = () => {
	const {users, currentUser} = useSelector((state: AppRootStateType) => state.users);
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, []);


	return (
		<>
			<ModalInfoUser user={currentUser} isShow={isOpenModal} setIsShow={setIsOpenModal}/>
			<div className={'users-container'}>
				<Filter/>
				<UsersList users={users} setOpenUserModal={()=>setIsOpenModal(true)}/>
			</div>
		</>
	)
}