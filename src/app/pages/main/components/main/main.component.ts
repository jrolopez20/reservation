import { Component } from '@angular/core';
import { AppMaterialModule } from '../../../../app-material.module';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/store';
import * as ConceptActions from '../../../../store/concept/actions';
import * as ReservationActions from '../../../../store/reservation/actions';
import { AuthFacade } from '../../../../store/auth/auth.facade';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppMaterialModule, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  user$ = this.authFacade.user$;

  constructor(private store: Store<AppState>, private authFacade: AuthFacade) {
    this.loadConcepts();
  }

  private loadConcepts(): void {
    this.store.dispatch(ConceptActions.loadConcepts());
  }

  public logout(): void {
    this.authFacade.logout();
  }
}
