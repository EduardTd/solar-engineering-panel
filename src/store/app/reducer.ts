import { produce } from 'immer';
import { ActionTypes } from './actions';
import { Action, AppState } from '../../types/store';

export const initialState = Object.freeze<AppState>({
    locale: 'en_US',
    token: '',
});

export default (state: AppState = initialState, action: Action): AppState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.SET_LOCALE: {
                draft.locale = action.payload;

                return;
            }
            case ActionTypes.SET_USER_TOKEN: {
                draft.token = action.payload;

                return;
            }
        }
    });
