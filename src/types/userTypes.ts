export interface IUserData {
    id: string;
    name: string;
    lastName: string;
    email: string;
}

export interface IGetUser {
    getUser: IUserData;
}
