import { Component } from '@angular/core';
import { AppMaterialModule } from '../../../../app-material.module';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppMaterialModule, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  constructor(private router: Router) {}

  public logout(): void {
    this.router.navigate(['/login']);
  }
}
