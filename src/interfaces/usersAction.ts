import { deleteUser, resetFilter, resetUser, setSearchText, setUser, setUsers } from "../store/action/usersActions";

export enum USERS_ACTION_TYPE {
	SET_USERS = 'SET_USERS',
	SET_USER = 'SET_USER',
	RESET_USER = 'RESET_USER',
	DELETE_USER = 'DELETE_USER',
	RESET_FILTER= 'RESET_FILTER',
	SEARCH = 'SEARCH'
}

export type ActionsType =
	ReturnType<typeof deleteUser>
	| ReturnType<typeof setUser>
	| ReturnType<typeof setUsers>
	| ReturnType<typeof resetUser>
	| ReturnType<typeof setSearchText>
	| ReturnType<typeof resetFilter>


