import { Action, ActionReducer } from '@ngrx/store';
import { ReservationEffects } from './reservation/effects';
import { reservationReducer, ReservationState } from './reservation/reducers';
import { ConceptState, conceptReducer } from './concept/reducers';
import { ConceptEffects } from './concept/effects';

export interface AppState {
  reservation: ReservationState;
  concept: ConceptState;
}

export interface AppStore {
  reservation: ActionReducer<ReservationState, Action>;
  concept: ActionReducer<ConceptState, Action>;
}

export const appStore: AppStore = {
  reservation: reservationReducer,
  concept: conceptReducer,
};

export const appEffects = [ReservationEffects, ConceptEffects];
