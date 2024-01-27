import { createAction, props } from '@ngrx/store';
import { Reservation } from './reservation.model';
import { Concept } from '../concept/concept.model';

export const loadReservations = createAction(
  '[Reservation] Load Reservations',
  props<{ userId: string }>()
);

export const loadReservationsSuccess = createAction(
  '[Reservation] Load Reservations Success',
  props<{ reservations: Reservation[] }>()
);

export const loadReservationsFailure = createAction(
  '[Reservation] Load Reservations Failure',
  props<{ error: string }>()
);

export const addReservation = createAction(
  '[Reservation] Add Reservation',
  props<{ reservation: Reservation }>()
);

export const deleteReservation = createAction(
  '[Reservation] Delete Reservation',
  props<{ date: Date, concept: Concept }>()
);
