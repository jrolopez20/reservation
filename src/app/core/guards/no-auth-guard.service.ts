import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AppState } from '../../store/store';
import { selectIsLoggedIn } from '../../store/auth/selectors';
import { TokenStorageService } from '../services';
import { AuthFacade } from '../../store/auth/auth.facade';

@Injectable({ providedIn: 'root' })
export class NoAuthGuardService implements CanActivate {
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
        if (isLoggedIn) {
          this.router.navigateByUrl('/');
        } else {
          if (accessToken) {
            this.authFacade.getAuthUser();
            this.store.select(selectIsLoggedIn).subscribe((isLoggedIn2) => {
              if (isLoggedIn2) {
                this.router.navigateByUrl('/');
              }
            });
          }
        }

        return !isLoggedIn;
      })
    );
  }
}
