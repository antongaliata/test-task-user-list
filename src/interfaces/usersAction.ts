import { deleteUser, setSearchText, setUser, setUsers } from "../store/action/usersActions";

export enum USERS_ACTION_TYPE {
	SET_USERS = 'SET_USERS',
	SET_USER = 'SET_USER',
	DELETE_USER = 'DELETE_USER',
	SEARCH = 'SEARCH'
}

export interface IAction<T, P> {
	type: T
	payload: P
}

export type ActionsType =
	ReturnType<typeof deleteUser>
	| ReturnType<typeof setUser>
	| ReturnType<typeof setUsers>
	| ReturnType<typeof setSearchText>

