import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthFacade } from '../../store/auth/auth.facade';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authFacade: AuthFacade, private snackBar: MatSnackBar) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => {
        switch (response.status) {
          case 400:
            break;
          case 401:
            this.handle401(request.url);
            break;
          default:
            break;
        }

        this.snackBar.open(response.error.errors[0]?.reason, 'X', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });

        return throwError(() => response);
      })
    );
  }

  private handle401(urlPath: string) {
    if (!urlPath.includes('/login')) {
      this.authFacade.logout();
    }
  }
}
