import { createSelector } from '@ngrx/store';
import { ConceptState } from './reducers';
import { AppState } from '../store';

const feature = (state: AppState) => state.concept;

export const conceptSelector = createSelector(
  feature,
  (state: ConceptState) => state.concepts
);
