import { createReducer, on } from '@ngrx/store';
import { Concept } from './concept.model';
import * as ConceptActions from './actions';
export const conceptFeatureKey = 'concept';

export interface ConceptState {
  concepts: Concept[];
  loading: boolean;
  error: string;
}

export const initialState: ConceptState = {
  concepts: [],
  loading: false,
  error: '',
};

export const conceptReducer = createReducer(
  initialState,

  on(ConceptActions.loadConcepts, (state) => ({
    ...state,
    loading: true,
  })),

  on(ConceptActions.loadConceptsSuccess, (state, { concepts }) => ({
    ...state,
    concepts,
    loading: false,
  })),

  on(ConceptActions.loadConceptsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
