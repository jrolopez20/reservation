import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class TokenStorageService {
  private readonly accessTokenKey = 'accessToken';

  constructor(private localStorageService: LocalStorageService) {}

  getAccessToken(): string {
    return this.localStorageService.getItem(this.accessTokenKey) as string;
  }

  saveAccessToken(token: string) {
    this.localStorageService.setItem(this.accessTokenKey, token);
  }

  removeTokens() {
    this.localStorageService.removeItem(this.accessTokenKey);
  }
}
