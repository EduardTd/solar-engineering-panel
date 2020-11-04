import { createSelector } from 'reselect';
import { AppState, Locale } from '../../types/store';

export const app = (state: { app: AppState }): AppState => state.app;

export const getLocale = createSelector([app], (app): Locale => app.locale);

export const getToken = createSelector([app], (app) => app.token);
