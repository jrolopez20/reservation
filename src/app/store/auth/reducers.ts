import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './actions';
import { AuthUser } from './auth.models';

export interface AuthState {
  isLoggedIn: boolean;
  user?: AuthUser;
  loading: boolean;
  error: boolean;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  user: undefined,
  loading: false,
  error: false,
};

export const authReducer = createReducer(
  initialState,

  // Login
  on(
    AuthActions.loginRequest,
    (state): AuthState => ({
      ...state,
      loading: true,
      error: false,
    })
  ),

  // Login
  on(
    AuthActions.loginSuccess,
    (state): AuthState => ({
      ...state,
      isLoggedIn: true,
      loading: false,
    })
  ),

  on(
    AuthActions.loginFailure,
    (state, action): AuthState => ({
      ...state,
      loading: false,
      error: action.type === '[Auth] Login Failure' && !!action.error,
    })
  ),

  // Logout
  on(
    AuthActions.logout,
    (): AuthState => ({
      ...initialState,
    })
  ),

  // Auth user
  on(
    AuthActions.getAuthUserSuccess,
    (state, action): AuthState => ({
      ...state,
      isLoggedIn: true,
      error: false,
      user: action.user,
    })
  ),

  on(
    AuthActions.getAuthUserFailure,
    (): AuthState => ({
      ...initialState,
    })
  )
);
