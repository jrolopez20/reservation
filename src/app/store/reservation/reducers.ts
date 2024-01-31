import { Concept } from './../concept/concept.model';
import { createReducer, on } from '@ngrx/store';
import { Reservation } from './reservation.model';
import * as ReservationActions from './actions';
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

  on(ReservationActions.addReservation, (state, { reservation }) => ({
    ...state,
    reservations: [...state.reservations, reservation],
  })),

  on(ReservationActions.deleteReservation, (state, { date, concept }) => ({
    ...state,
    reservations: state.reservations.filter((item) => {
      return !(
        item.concept.id === concept.id &&
        item.startAt.toDateString() === date.toDateString()
      );
    }),
  }))
);
