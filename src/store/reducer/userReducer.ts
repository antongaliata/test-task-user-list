import { IStateUsers } from "../../interfaces/users";
import { ActionsType, USERS_ACTION_TYPE } from "../../interfaces/usersAction";


const initialState: IStateUsers = {} as IStateUsers;

export const usersReducer = (state: IStateUsers = initialState, action: ActionsType): IStateUsers => {
    switch (action.type) {

        case USERS_ACTION_TYPE.SET_USERS: {
            return {...state, users: [...action.payload], copyUsers: [...action.payload]}
        }

        case USERS_ACTION_TYPE.SET_USER: {
            return {...state, currentUser: action.payload}
        }

        case USERS_ACTION_TYPE.RESET_USER: {
            return {...state, currentUser: null}
        }

        case USERS_ACTION_TYPE.DELETE_USER: {
            return {...state, users: state.users.filter(user => user.id !== action.payload)}
        }

        case USERS_ACTION_TYPE.SEARCH: {
            return {...state, searchText: action.payload}
        }

        case USERS_ACTION_TYPE.RESET_FILTER: {
            return {...state, users: [...state.copyUsers], searchText: ''}
        }

        default:
            return state
    }
};