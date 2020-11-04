import { createSelector } from 'reselect';
import { AppState } from '../../types/store';

export const app = (state: { app: AppState }): AppState => state.app;

export const getToken = createSelector([app], (app) => app.token);
