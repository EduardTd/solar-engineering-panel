import reducer, { initialState } from '../reducer';
import { ActionTypes } from '../actions';

describe('App Reducer', () => {
    it('sets the token', () => {
        expect(
            reducer(initialState, { type: ActionTypes.SET_USER_TOKEN, payload: 'token string' }),
        ).toEqual({
            token: 'token string',
        });
    });
});
