import { IStateUsers } from "../../interfaces/usersType";
import { ActionsType, USERS_ACTION_TYPE } from "../../interfaces/usersActionType";


const initialState: IStateUsers = {} as IStateUsers;


export const notificationsReducer = (state: IStateUsers = initialState, action: ActionsType): IStateUsers => {
    switch (action.type) {

        case USERS_ACTION_TYPE.SET_USERS: {
            return {...state, users: [...action.payload]}
        }

        case USERS_ACTION_TYPE.SET_USER: {
            return {...state, currentUser: action.payload}
        }

        case USERS_ACTION_TYPE.DELETE_USER: {
            return {...state, users: state.users.filter(user => user.id !== action.payload)}
        }

        case USERS_ACTION_TYPE.SEARCH: {
            return {...state, searchText: action.payload}
        }

        default:
            return state
    }
}