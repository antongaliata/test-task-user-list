import { createStore, applyMiddleware, combineReducers } from 'redux';
import { usersReducer } from "./reducer/userReducer";
import { commonReducer } from "./reducer/commonReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
	users: usersReducer,
	common: commonReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

