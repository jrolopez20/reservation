import { Component } from '@angular/core';
import { AppMaterialModule } from '../../../../app-material.module';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthFacade } from '../../../../store/auth/auth.facade';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, AppMaterialModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  readonly loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  isLoading$ = this.authFacade.isLoadingLogin$;
  showLoginError$ = this.authFacade.hasLoginError$;

  constructor(private authFacade: AuthFacade) {}

  onSubmit() {
    const { email, password } = this.loginForm.value;
    if (email && password) {
      this.authFacade.login(email, password);
    }
  }
}
