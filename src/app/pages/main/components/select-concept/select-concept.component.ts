import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AppMaterialModule } from '../../../../app-material.module';
import { TranslocoModule } from '@ngneat/transloco';
import { MatSelectionList } from '@angular/material/list';
import { Observable } from 'rxjs';
import { Concept } from '../../../../store/concept/concept.model';
import { AppState } from '../../../../store/store';
import { conceptSelector } from '../../../../store/concept/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-select-concept',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AppMaterialModule,
    RouterModule,
    TranslocoModule,
  ],
  templateUrl: './select-concept.component.html',
  styleUrl: './select-concept.component.scss',
})
export class SelectConceptComponent {
  @ViewChild('conceptsSelector')
  conceptsSelector!: MatSelectionList;
  concepts$: Observable<Concept[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.concepts$ = this.store.select(conceptSelector);
    this.isLoading$ = this.store.select((state) => state.concept.loading);
  }



  onSchedule(): void {
    if (!this.conceptsSelector.selectedOptions.isEmpty()) {
      const selected = this.conceptsSelector.selectedOptions.selected;
      const selectedConcepts = selected.map((item) => item.value);
      this.router.navigateByUrl('/schedule', { state: { selectedConcepts } });
    }
  }
}
