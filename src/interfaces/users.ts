export interface IUser {
    id: 1,
    name: string
    username: string
    email: string
    address: IAddress
    phone: string
    website: string
    company: ICompany
}

export interface IAddress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
        lat: string
        lng: string
    }
}

export interface ICompany {
    name: string
    catchPhrase: string
    bs: string
}

export interface IStateUsers {
    users: IUser[]
    currentUser: IUser
    searchText: string
}