import { createAction, props } from '@ngrx/store';
import { Concept } from './concept.model';

export const loadConcepts = createAction('[Concept] Load Concepts');

export const loadConceptsSuccess = createAction(
  '[Concept] Load Concepts Success',
  props<{ concepts: Concept[] }>()
);

export const loadConceptsFailure = createAction(
  '[Concept] Load Concepts Failure',
  props<{ error: string }>()
);
