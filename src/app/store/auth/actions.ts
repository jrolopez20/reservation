import { createAction, props } from '@ngrx/store';

import { AuthUser } from './auth.models';

// Login
export const loginRequest = createAction(
  '[Auth] Login Request',
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction('[Auth] Login Success');
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: Error }>()
);

// Logout
export const logout = createAction('[Auth] Logout');

// Auth User: me
export const getAuthUserRequest = createAction('[Auth] Auth User Request');
export const getAuthUserSuccess = createAction(
  '[Auth] Auth User Success',
  props<{ user: AuthUser }>()
);
export const getAuthUserFailure = createAction('[Auth] Auth User Failure');
