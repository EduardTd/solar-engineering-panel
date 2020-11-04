export type AppState = Readonly<{
    token: string | null;
}>;

export type Action = {
    type: string;
    payload: any;
};
