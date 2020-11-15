import { produce } from 'immer';
import { Action, AppState } from '../../types/storeTypes';
import { ActionTypes } from './actions';

export const initialState = Object.freeze<AppState>({
    locale: 'en_US',
});

export default (state: AppState = initialState, action: Action): AppState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.SET_LOCALE: {
                draft.locale = action.payload;

                return;
            }
        }
    });
