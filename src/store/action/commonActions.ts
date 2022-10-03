import { IUser } from "../../interfaces/usersType";
import { IAction, USERS_ACTION_TYPE } from "../../interfaces/usersActionType";



export const setUsers = (users: IUser[]): IAction<USERS_ACTION_TYPE.SET_USERS, IUser[]> => {
    return {type: USERS_ACTION_TYPE.SET_USERS, payload: users}
};

export const setUser = (user: IUser): IAction<USERS_ACTION_TYPE.SET_USER, IUser> => {
    return {type: USERS_ACTION_TYPE.SET_USER, payload: user}
};



