import { createSelector } from '@ngrx/store';
import { ReservationState } from './reducers';
import { AppState } from '../store';

const feature = (state: AppState) => state.reservation;

export const reservationsSelector = createSelector(
  feature,
  (state: ReservationState) => state.reservations
);

export const selectError = createSelector(
  feature,
  (state: ReservationState) => state.error
);

export const selectLoading = createSelector(
  feature,
  (state: ReservationState) => state.loading
);
