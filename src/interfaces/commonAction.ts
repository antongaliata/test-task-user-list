import { closeNotification, setIsLoading, setNotification } from "../store/action/commonActions";

export enum COMMON_ACTION_TYPE {
	SET_IS_LOADING = 'SET_IS_LOADING',
	SET_NOTIFICATION = 'SET_NOTIFICATION',
	CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION'
}


export type ActionsType =
	ReturnType<typeof setIsLoading>
	| ReturnType<typeof setNotification>
	| ReturnType<typeof closeNotification>