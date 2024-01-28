import { Routes } from '@angular/router';
import { AuthGuardService, NoAuthGuardService } from './core/guards';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
    canActivate: [NoAuthGuardService],
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
    canActivate: [AuthGuardService],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
