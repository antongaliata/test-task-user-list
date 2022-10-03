import { IStateUsers } from "../../interfaces/users";


const initialState: IStateUsers = {} as IStateUsers;


export const usersReducer = (state: IStateUsers = initialState, action: ActionType): IStateUsers => {
    switch (action.type) {

        case 'REMOVE-TASK': {


            return copyState
        }

        default:
            return state
    }
}