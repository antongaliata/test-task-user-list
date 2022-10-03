import { IAction } from "../../interfaces/action";
import { COMMON_ACTION_TYPE } from "../../interfaces/commonAction";
import { INotification } from "../../interfaces/common";


export const setIsLoading = (isLoading: boolean): IAction<COMMON_ACTION_TYPE.SET_IS_LOADING, boolean> => {
	return {type: COMMON_ACTION_TYPE.SET_IS_LOADING, payload: isLoading}
};

export const setNotification = (notification: INotification): IAction<COMMON_ACTION_TYPE.SET_NOTIFICATION, INotification> => {
	return {type: COMMON_ACTION_TYPE.SET_NOTIFICATION, payload: notification}
};

export const closeNotification = (): IAction<COMMON_ACTION_TYPE.CLOSE_NOTIFICATION, null> => {
	return {type: COMMON_ACTION_TYPE.CLOSE_NOTIFICATION, payload: null}
};
