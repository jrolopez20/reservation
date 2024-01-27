import { createSelector } from '@ngrx/store';
import { ReservationState } from './reducers';
import { AppState } from '../store';

const feature = (state: AppState) => state.reservation;

export const reservationSelector = createSelector(
  feature,
  (state: ReservationState) => state.reservations
);
