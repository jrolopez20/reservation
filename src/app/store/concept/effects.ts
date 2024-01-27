import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConceptService } from './concept.service';
import * as ConceptActions from './actions';

@Injectable()
export class ConceptEffects {
  constructor(
    private actions$: Actions,
    private conceptService: ConceptService
  ) {}

  loadConcepts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConceptActions.loadConcepts),
      mergeMap(() =>
        this.conceptService.getAll().pipe(
          map((concepts) =>
            ConceptActions.loadConceptsSuccess({ concepts })
          ),
          catchError((error) =>
            of(
              ConceptActions.loadConceptsFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
}
