import { ActionsType, COMMON_ACTION_TYPE } from "../../interfaces/commonAction";
import { IStateCommon } from "../../interfaces/common";


const initialState: IStateCommon = {} as IStateCommon;

export const commonReducer = (state: IStateCommon = initialState, action: ActionsType): IStateCommon => {
    switch (action.type) {

        case COMMON_ACTION_TYPE.SET_IS_LOADING : {
            return {...state, isLoading: action.payload}
        }

        case COMMON_ACTION_TYPE.SET_NOTIFICATION : {
            return {...state, notification: {...action.payload, isShow: true}}
        }

        case COMMON_ACTION_TYPE.CLOSE_NOTIFICATION: {
            return {...state, notification: {isShow: false}}
        }

        default:
            return state;
    }
};