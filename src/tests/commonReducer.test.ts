import { IStateCommon, VARIANT_NOTIFICATION } from "../interfaces/common";
import { commonReducer } from "../store/reducer/commonReducer";
import { closeNotification, setIsLoading, setNotification } from "../store/action/commonActions";


let startState: IStateCommon = {} as IStateCommon;

beforeEach(() => {
	startState = {
		isLoading: false,
		notification: {
			isShow: false,
			variant: VARIANT_NOTIFICATION.ERROR,
			title: '',
			message: ''
		}
	} as IStateCommon
});


test('set loading', () => {
	const stateFirst = commonReducer({isLoading: true} as IStateCommon, setIsLoading(false));
	const stateSecond = commonReducer({isLoading: false} as IStateCommon, setIsLoading(true));
	expect(stateFirst.isLoading).toBe(false);
	expect(stateSecond.isLoading).toBe(true);
});

test('set notification', () => {
	const endState = commonReducer(startState, setNotification({
		isShow: true,
		message: 'test',
		title: 'test title',
		variant: VARIANT_NOTIFICATION.SUCCESS}));

	expect(endState.notification.isShow).toBe(true);
	expect(endState.notification.message).toBe('test');
	expect(endState.notification.title).toBe('test title');
	expect(endState.notification.variant).toBe(VARIANT_NOTIFICATION.SUCCESS);
});

test('close notification', () => {
	const endState = commonReducer({notification: {isShow: true}} as IStateCommon, closeNotification());
	expect(endState.notification.isShow).toBe(false);
});