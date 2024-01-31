import { Concept } from './../concept/concept.model';
import { createReducer, on } from '@ngrx/store';
import { Reservation } from './reservation.model';
import * as ReservationActions from './actions';
import { addReservationSuccess, addReservationFailure } from './actions';
export const reservationFeatureKey = 'reservation';

export interface ReservationState {
  reservations: Reservation[];
  loading: boolean;
  error: string;
}

export const initialState: ReservationState = {
  reservations: [],
  loading: false,
  error: '',
};

export const reservationReducer = createReducer(
  initialState,

  on(ReservationActions.loadReservations, (state) => ({
    ...state,
    loading: true,
  })),

  on(ReservationActions.loadReservationsSuccess, (state, { reservations }) => ({
    ...state,
    reservations,
    loading: false,
  })),

  on(ReservationActions.loadReservationsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(ReservationActions.addReservation, (state) => ({
    ...state,
    loading: true,
  })),

  on(ReservationActions.addReservationSuccess, (state, { reservation }) => ({
    ...state,
    reservations: [...state.reservations, reservation],
    loading: false,
  })),

  on(ReservationActions.addReservationFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(ReservationActions.deleteReservation, (state) => ({
    ...state,
    loading: true,
  })),

  on(ReservationActions.deleteReservationSuccess, (state, { id }) => ({
    ...state,
    reservations: state.reservations.filter((item) => {
      return !(item.id === id);
    }),
    loading: false,
  })),

  on(ReservationActions.deleteReservationFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
