import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AppMaterialModule } from '../../../../app-material.module';
import { TranslocoModule } from '@ngneat/transloco';
import { MatSelectionList } from '@angular/material/list';
import { CONCEPTS } from '../../../../features/models';

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
  concepts = [...CONCEPTS];

  constructor(private router: Router) {}

  onSchedule(): void {
    if (!this.conceptsSelector.selectedOptions.isEmpty()) {
      const selected = this.conceptsSelector.selectedOptions.selected;
      const idx = selected.map((item) => item.value);
      this.router.navigate(['/schedule'], {
        queryParams: {
          concepts: idx,
        },
      });
    }
  }
}
