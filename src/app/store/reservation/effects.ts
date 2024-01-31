import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ReservationService } from './reservation.service';
import * as ReservationActions from './actions';

@Injectable()
export class ReservationEffects {
  constructor(
    private actions$: Actions,
    private reservationService: ReservationService
  ) {}

  loadReservations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReservationActions.loadReservations),
      mergeMap((action: any) =>
        this.reservationService.getAll(action.concept, action.startDate).pipe(
          map((reservations) =>
            ReservationActions.loadReservationsSuccess({ reservations })
          ),
          catchError((error) => {
            return of(
              ReservationActions.loadReservationsFailure({
                error: error.message,
              })
            );
          })
        )
      )
    )
  );

  addReservations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReservationActions.addReservation),
      mergeMap((action: any) =>
        this.reservationService.add(action.reservation).pipe(
          map((reservation) =>
            ReservationActions.addReservationSuccess({ reservation })
          ),
          catchError((error) => {
            return of(
              ReservationActions.addReservationFailure({
                error: error.message,
              })
            );
          })
        )
      )
    )
  );

  deleteReservations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReservationActions.deleteReservation),
      mergeMap((action: any) =>
        this.reservationService.remove(action.id).pipe(
          map(() =>
            ReservationActions.deleteReservationSuccess({ id: action.id })
          ),
          catchError((error) => {
            return of(
              ReservationActions.deleteReservationFailure({
                error: error.message,
              })
            );
          })
        )
      )
    )
  );
}
