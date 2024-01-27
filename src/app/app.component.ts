import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from './store/store';
import * as ConceptActions from './store/concept/actions';
import * as ReservationActions from './store/reservation/actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private store: Store<AppState>) {
    this.loadConcepts();
    this.loadReservations();
  }
  private loadConcepts(): void {
    this.store.dispatch(ConceptActions.loadConcepts());
  }
  private loadReservations(): void {
    this.store.dispatch(ReservationActions.loadReservations({ userId: 'xXx' }));
  }
}
