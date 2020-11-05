import { Locale } from '../../types/storeTypes';
export const ActionTypes = {
    SET_LOCALE: 'app/set-locale',
    SET_USER_TOKEN: 'app/set-user-token',
};

export const setLocale = (locale: Locale) => ({
    type: ActionTypes.SET_LOCALE,
    payload: locale,
});

export const setUserToken = (payload: string) => ({
    type: ActionTypes.SET_USER_TOKEN,
    payload,
});
