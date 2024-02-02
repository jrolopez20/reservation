import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../../core/services';
import { AuthUser } from './auth.models';

export interface AccessData {
  token_type: 'Bearer';
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly hostUrl: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.hostUrl = this.configService.getAPIUrl();
  }

  login(account: string, password: string): Observable<AccessData> {
    return this.http.post<AccessData>(`${this.hostUrl}/login`, {
      account,
      password,
    });
  }

  /**
   * Performs a request for logout authenticated user
   *
   * @param {('all' | 'allButCurrent' | 'current')} [clients='current']
   * @returns Observable<void>
   */
  // Not implemented
  // logout(): Observable<void> {
  //   return this.http.get<void>(`${this.hostUrl}/logout`);
  // }

  getAuthUser(): Observable<AuthUser> {
    return this.http.get<AuthUser>(`${this.hostUrl}/me`);
  }

  changePassword(currentPassword: string, newPassword: string): Observable<any> {
    return this.http.patch<any>(`${this.hostUrl}/me/password`, {currentPassword, newPassword});
  }
}
