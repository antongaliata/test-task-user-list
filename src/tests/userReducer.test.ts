import { IStateUsers, IUser } from "../interfaces/users";
import { usersReducer } from "../store/reducer/userReducer";
import { deleteUser, resetFilter, resetUser, setSearchText, setUser, setUsers } from "../store/action/usersActions";


let startState: IStateUsers = {} as IStateUsers;

beforeEach(() => {
	startState = {
		users: [
			{
				id: 1,
				name: 'test 1'
			} as IUser,
			{
				id: 2,
				name: 'test 2'
			} as IUser,
		]
	} as IStateUsers
});


test('set users', () => {
	const endState = usersReducer({} as IStateUsers, setUsers(startState.users));
	expect(endState.users.length).toBe(2);
	expect(endState.users[0].id).toBe(1);
	expect(endState.copyUsers[0].id).toBe(1);
	expect(endState.copyUsers.length).toBe(2);
});

test('delete user', () => {
	const endState = usersReducer(startState, deleteUser(1));
	expect(endState.users.length).toBe(1);
	expect(endState.users[0].id).toBe(2);
});

test('select user', () => {
	const endState = usersReducer(startState, setUser(startState.users[0]));
	expect(endState.currentUser?.id).toBe(1);
});

test('reset user', () => {
	const endState = usersReducer({...startState, currentUser: {id: 1} as IUser}, resetUser());
	expect(endState.currentUser).toBe(null);
});

test('set search text', () => {
	const endState = usersReducer(startState, setSearchText('test text'));
	expect(endState.searchText).toBe('test text');
});

test('reset user state', () => {
	const stateFirst = usersReducer({} as IStateUsers, setUsers(startState.users));
	const stateSecond =  usersReducer(startState, setSearchText('test text'));
	const stateThird = usersReducer(stateFirst, deleteUser(1));
	const endState = usersReducer({...stateFirst, ...stateSecond, ...stateThird}, resetFilter());
	expect(endState.searchText).toBe('');
	expect(endState.users.length).toBe(startState.users.length);
	expect(endState.users[0].id).toBe(1);
});
