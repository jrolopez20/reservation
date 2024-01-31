import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { selectIsLoggedIn } from '../../store/auth/selectors';
import { AppState } from '../../store/store';
import { TokenStorageService } from '../services';
import { AuthFacade } from '../../store/auth/auth.facade';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private tokenStorageService: TokenStorageService,
    private authFacade: AuthFacade
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const accessToken = this.tokenStorageService.getAccessToken();
    return this.store.select(selectIsLoggedIn).pipe(
      take(1),
      map((isLoggedIn) => {
        if (!isLoggedIn) {
          if (accessToken) {
            this.authFacade.getAuthUser();
          } else {
            this.router.navigate(['/login'], {
              queryParams: { returnUrl: state.url },
            });
            return false;
          }
        }
        return true;
      })
    );
  }
}
