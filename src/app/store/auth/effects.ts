import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, finalize, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AuthActions from './actions';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenStorageService } from '../../core/services';

@Injectable()
export class AuthEffects {

  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private tokenStorageService: TokenStorageService
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      exhaustMap((credentials) =>
        this.authService.login(credentials.email, credentials.password).pipe(
          map((data) => {
            // save tokens
            this.tokenStorageService.saveAccessToken(data.access_token);
            // trigger login success action
            return AuthActions.loginSuccess();
          }),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });

  onLoginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      map(() => {
        // redirect to return url or home
        this.router.navigateByUrl(
          this.activatedRoute.snapshot.queryParams['returnUrl'] || '/'
        );
        return AuthActions.getAuthUserRequest();
      })
    );
  });

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.logout),
        exhaustMap(() => {
          this.router.navigateByUrl('/');
          return this.authService
            .logout()
            .pipe(finalize(() => this.tokenStorageService.removeTokens()));
        })
      );
    },
    { dispatch: false }
  );

  getUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.getAuthUserRequest),
      exhaustMap(() =>
        this.authService.getAuthUser().pipe(
          map((user) => AuthActions.getAuthUserSuccess({ user })),
          catchError(() => of(AuthActions.getAuthUserFailure()))
        )
      )
    );
  });

  onLoginFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginFailure),
        tap(() => {
          this.tokenStorageService.removeTokens();
        })
      );
    },
    { dispatch: false }
  );
}
