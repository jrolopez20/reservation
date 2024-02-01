import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ReservationActions from './actions';
import * as ReservationSelectors from './selectors';
import { AppState } from '../store';
import { CreateReservationDto, Reservation } from './reservation.model';
import { Concept, Slot } from '../concept/concept.model';
import { Observable, combineLatest, map } from 'rxjs';
import moment from 'moment';

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

  isSlotReserved(
    date: Date,
    concept: Concept,
    slot: Slot
  ): Observable<Reservation | undefined> {
    return this.reservations$.pipe(
      map((array) => {
        return array.find((reservation) => {
          console.log(
            reservation.date.toString(),
            moment(date).format('YYYY-MM-DD')
          );

          return (
            reservation.concept === concept.code &&
            reservation.date.toString() === moment(date).format('YYYY-MM-DD') &&
            reservation.slot === slot.code
          );
        });
      })
    );
  }

  add(reservation: CreateReservationDto) {
    this.store.dispatch(ReservationActions.addReservation({ reservation }));
  }

  remove(id: string) {
    this.store.dispatch(ReservationActions.deleteReservation({ id }));
  }
}
