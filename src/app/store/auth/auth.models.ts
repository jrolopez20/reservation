import AccountRole from '../../core/enums/account-role';
import AccountState from '../../core/enums/account-state';

export interface AuthUser {
  id: string;
  account: string;
  state: AccountState;
  role: AccountRole;
  lastPasswordChangeAt?: Date;
  lastLoginAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
