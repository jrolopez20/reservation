import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { AuthUser } from '../../store/auth/auth.models';

@Injectable({ providedIn: 'root' })
export class AccountStorageService {
  private readonly accountKey = 'me';

  constructor(private localStorageService: LocalStorageService) {}

  getAuthUser(): AuthUser {
    return this.localStorageService.getItem(this.accountKey) as AuthUser;
  }

  saveAuthUser(user: AuthUser) {
    this.localStorageService.setItem(this.accountKey, user);
  }

  removeAuthUser() {
    this.localStorageService.removeItem(this.accountKey);
  }
}
