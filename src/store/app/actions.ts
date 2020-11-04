export const ActionTypes = {
    SET_USER_TOKEN: 'app/set-user-token',
};

export const setUserToken = (payload: string) => ({
    type: ActionTypes.SET_USER_TOKEN,
    payload,
});
