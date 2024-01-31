import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from './actions';
import * as AuthSelectors from './selectors';
import { selectAuthUser } from './selectors';
import { AppState } from '../store';

@Injectable({providedIn: 'root'})
export class AuthFacade {
  user$ = this.store.select(selectAuthUser);
  isLoggedIn$ = this.store.select(AuthSelectors.selectIsLoggedIn);
  isLoadingLogin$ = this.store.select(AuthSelectors.selectIsLoadingLogin);
  hasLoginError$ = this.store.select(AuthSelectors.selectLoginError);

  constructor(private store: Store<AppState>) {}

  login(account: string, password: string) {
    this.store.dispatch(AuthActions.loginRequest({ account, password }));
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }

  getAuthUser() {
    this.store.dispatch(AuthActions.getAuthUserRequest());
  }
}
