import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../../core/services';
import { AuthFacade } from '../../store/auth/auth.facade';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private authFacade: AuthFacade,
    private tokenStorageService: TokenStorageService
  ) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = this.tokenStorageService.getAccessToken();
    if (accessToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
          'ngrok-skip-browser-warning': 'YES', // This is just for demo purpose
        },
      });
    }

    return next.handle(req);
  }
}
