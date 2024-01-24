import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppMaterialModule } from '../../../../app-material.module';
import { TranslocoModule } from '@ngneat/transloco';
import {
  ConceptInterface,
  ReservationInterface,
} from '../../../../features/models';
import { MatChipSelectionChange } from '@angular/material/chips';

export type SelectedConcept = {
  date: Date;
  concept: ConceptInterface;
};

@Component({
  selector: 'app-date-item',
  standalone: true,
  imports: [CommonModule, AppMaterialModule, TranslocoModule],
  templateUrl: './date-item.component.html',
  styleUrl: './date-item.component.scss',
})
export class DateItemComponent {
  @Input() date = new Date();
  @Input() concepts: ConceptInterface[] = [];
  @Output() selectedConcept = new EventEmitter<SelectedConcept>();

  constructor() {
  }

  onSelectionChange(selection: MatChipSelectionChange, date: Date) {
    if (selection.selected) {
      this.selectedConcept.emit({ date, concept: selection.source.value });
    } else {
      // TODO prom before change
    }
  }
}
