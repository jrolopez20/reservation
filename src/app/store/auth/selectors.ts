import { createSelector } from '@ngrx/store';
import { AppState } from '../store';

const feature = (state: AppState) => state.auth;

export const selectIsLoggedIn = createSelector(
  feature,
  (state) => state.isLoggedIn
);

export const selectLoginError = createSelector(feature, (state) => state.error);

export const selectIsLoadingLogin = createSelector(
  feature,
  (state) => state.loading
);

export const selectAuthUser = createSelector(feature, (state) => state.user);
