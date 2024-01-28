import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AppState } from '../../store/store';
import { selectIsLoggedIn } from '../../store/auth/selectors';

@Injectable({ providedIn: 'root' })
export class NoAuthGuardService implements CanActivate {
  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsLoggedIn).pipe(
      take(1),
      map((isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigateByUrl('/');
        }

        return !isLoggedIn;
      })
    );
  }
}
