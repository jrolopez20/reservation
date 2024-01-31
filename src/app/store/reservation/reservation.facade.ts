import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ReservationActions from './actions';
import * as ReservationSelectors from './selectors';
import { AppState } from '../store';
import { CreateReservationDto } from './reservation.model';

@Injectable({ providedIn: 'root' })
export class ReservationFacade {
  reservations$ = this.store.select(ReservationSelectors.reservationsSelector);
  loading$ = this.store.select(ReservationSelectors.selectLoading);
  error$ = this.store.select(ReservationSelectors.selectError);

  constructor(private store: Store<AppState>) {}

  getAll(concept: string, startDate: Date) {
    this.store.dispatch(
      ReservationActions.loadReservations({ concept, startDate })
    );
  }

  add(reservation: CreateReservationDto) {
    this.store.dispatch(ReservationActions.addReservation({ reservation }));
  }
}
