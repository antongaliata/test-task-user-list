import { IUser } from "../../interfaces/users";
import { USERS_ACTION_TYPE } from "../../interfaces/usersAction";
import { ApiUsersService } from "../../shared/api/users.service";
import { IAction } from "../../interfaces/action";
import { setIsLoading, setNotification } from "./commonActions";
import { VARIANT_NOTIFICATION } from "../../interfaces/common";
import { Dispatch } from "redux";

export const setUsers = (users: IUser[]): IAction<USERS_ACTION_TYPE.SET_USERS, IUser[]> => {
	return {type: USERS_ACTION_TYPE.SET_USERS, payload: users}
};

export const setUser = (user: IUser): IAction<USERS_ACTION_TYPE.SET_USER, IUser> => {
	return {type: USERS_ACTION_TYPE.SET_USER, payload: user}
};

export const resetUser = (): IAction<USERS_ACTION_TYPE.RESET_USER, null> => {
	return {type: USERS_ACTION_TYPE.RESET_USER, payload: null}
};

export const deleteUser = (userId: number): IAction<USERS_ACTION_TYPE.DELETE_USER, number> => {
	return {type: USERS_ACTION_TYPE.DELETE_USER, payload: userId}
};

export const setSearchText = (text: string): IAction<USERS_ACTION_TYPE.SEARCH, string> => {
	return {type: USERS_ACTION_TYPE.SEARCH, payload: text}
};

export const resetFilter = (): IAction<USERS_ACTION_TYPE.RESET_FILTER, null> => {
	return {type: USERS_ACTION_TYPE.RESET_FILTER, payload: null}
};

export const getUsers = () => {
	return (dispatch: Dispatch) => {
		dispatch(setIsLoading(true));
		ApiUsersService.getUsers()
			.then(response => {
				dispatch(setUsers(response));
			})
			.catch(error => {
				dispatch(setNotification({
					isShow: true,
					variant: VARIANT_NOTIFICATION.ERROR,
					title: 'Ошибка!',
					message: error.message || 'Пользователи не загружены'
				}));
			})
			.finally(()=>{
				dispatch(setIsLoading(false));
			})
	};
};