import reducer, { initialState } from '../reducer';
import { ActionTypes } from '../actions';

describe('App Reducer', () => {
    it('sets the locale', () => {
        expect(reducer(initialState, { type: ActionTypes.SET_LOCALE, payload: 'de_DE' })).toEqual({
            locale: 'de_DE',
            token: '',
        });
    });
    it('sets the token', () => {
        expect(
            reducer(initialState, { type: ActionTypes.SET_USER_TOKEN, payload: 'token string' }),
        ).toEqual({
            locale: 'en_US',
            token: 'token string',
        });
    });
});
