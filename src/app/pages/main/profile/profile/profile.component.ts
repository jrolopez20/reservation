import { Component } from '@angular/core';
import { AppMaterialModule } from '../../../../app-material.module';
import { CommonModule } from '@angular/common';
import { AuthFacade } from '../../../../store/auth/auth.facade';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, AppMaterialModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  user$ = this.authFacade.user$;
  loading$ = this.authFacade.isLoading$;
  hide = true;

  readonly passwordForm = new FormGroup({
    currentPassword: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    newPassword: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    rePassword: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  constructor(private authFacade: AuthFacade) {}

  onChangePassword() {
    if (this.passwordForm.valid) {
      const { currentPassword, newPassword } = this.passwordForm.getRawValue();
      this.authFacade.changePassword(currentPassword, newPassword)
    }
  }
}
