export enum VARIANT_NOTIFICATION {
	ERROR = 'ERROR',
	SUCCESS = 'SUCCESS'
}

export interface INotification {
	isShow: boolean
	variant?: VARIANT_NOTIFICATION
	message?: string
	title?: string
}

export interface IStateCommon {
	isLoading: boolean
	notification: INotification
}


