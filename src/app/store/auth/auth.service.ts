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

  /**
   * Performs a request with user credentials
   * in order to get auth tokens
   *
   * @param {string} account
   * @param {string} password
   * @returns Observable<AccessData>
   */
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
  logout(): Observable<void> {
    return this.http.get<void>(`${this.hostUrl}/logout`);
  }

  /**
   * Returns authenticated user
   * based on saved access token
   *
   * @returns {Observable<AuthUser>}
   */
  getAuthUser(): Observable<AuthUser> {
    return this.http.get<AuthUser>(`${this.hostUrl}/me`);
  }
}
