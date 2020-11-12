export interface ILoginResponse {
    success: boolean;
    message: string;
    data: IDataResponse | null;
}

export interface IDataResponse {
    __typename: 'LoginResponse';
    id: string;
    token: string;
}

export interface ILogin {
    login: ILoginResponse;
}

export interface ILoginVariables {
    email: string;
    password: string;
}

export interface IIsLoggedIn {
    isLoggedIn: boolean;
}

export type TUseIsLoggedIn = () => {
    isLoaded: boolean | undefined;
    isLoggedIn: boolean | undefined;
};

export type TUseLogin = () => {
    onSubmit: (arg: ILoginVariables) => void;
    loading: boolean | undefined;
};
