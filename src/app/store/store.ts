import { Action, ActionReducer } from '@ngrx/store';
import { ReservationEffects } from './reservation/effects';
import { reservationReducer, ReservationState } from './reservation/reducers';
import { ConceptState, conceptReducer } from './concept/reducers';
import { ConceptEffects } from './concept/effects';
import { AuthState, authReducer } from './auth/reducers';
import { AuthEffects } from './auth/effects';

export interface AppState {
  auth: AuthState;
  reservation: ReservationState;
  concept: ConceptState;
}

export interface AppStore {
  auth: ActionReducer<AuthState, Action>;
  reservation: ActionReducer<ReservationState, Action>;
  concept: ActionReducer<ConceptState, Action>;
}

export const appStore: AppStore = {
  auth: authReducer,
  reservation: reservationReducer,
  concept: conceptReducer,
};

export const appEffects = [AuthEffects, ReservationEffects, ConceptEffects];
