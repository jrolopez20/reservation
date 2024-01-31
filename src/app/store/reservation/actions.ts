import { createAction, props } from '@ngrx/store';
import { CreateReservationDto, Reservation } from './reservation.model';

// GET Reservation
export const loadReservations = createAction(
  '[Reservation] Load Reservations',
  props<{ concept: string, startDate: Date }>()
);

export const loadReservationsSuccess = createAction(
  '[Reservation] Load Reservations Success',
  props<{ reservations: Reservation[] }>()
);

export const loadReservationsFailure = createAction(
  '[Reservation] Load Reservations Failure',
  props<{ error: string }>()
);

// ADD Reservation
export const addReservation = createAction(
  '[Reservation] Add Reservation',
  props<{ reservation: CreateReservationDto }>()
);

export const addReservationSuccess = createAction(
  '[Reservation] Add Reservation Success',
  props<{ reservation: Reservation }>()
);

export const addReservationFailure = createAction(
  '[Reservation] Add Reservation Failure',
  props<{ error: string }>()
);

// DELETE Reservation
export const deleteReservation = createAction(
  '[Reservation] Delete Reservation',
  props<{ id: string }>()
);

export const deleteReservationSuccess = createAction(
  '[Reservation] Delete Reservation Success',
  props<{ id: string }>()
);

export const deleteReservationFailure = createAction(
  '[Reservation] Delete Reservation Failure',
  props<{ error: string }>()
);
