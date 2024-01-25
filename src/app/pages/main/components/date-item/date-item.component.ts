import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppMaterialModule } from '../../../../app-material.module';
import { TranslocoModule } from '@ngneat/transloco';
import {
  ConceptInterface,
  ReservationInterface,
} from '../../../../features/models';
import { ConfirmComponent } from '../../../../shared/components/confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';

export type SelectedConcept = {
  date: Date;
  concept: ConceptInterface;
};

@Component({
  selector: 'app-date-item',
  standalone: true,
  imports: [CommonModule, AppMaterialModule, TranslocoModule, ConfirmComponent],
  templateUrl: './date-item.component.html',
  styleUrl: './date-item.component.scss',
})
export class DateItemComponent {
  @Input() date = new Date();
  @Input() concepts: ConceptInterface[] = [];
  @Input() reservations: ReservationInterface[] = [];
  @Output() selectedConcept = new EventEmitter<SelectedConcept>();
  @Output() deselectConcept = new EventEmitter<SelectedConcept>();

  constructor(public dialog: MatDialog) {}

  onSelectionChange(date: Date, concept: ConceptInterface) {
    if (this.isReserved(date, concept)) {
      const dialogRef = this.dialog.open(ConfirmComponent);
      dialogRef.afterClosed().subscribe((result: boolean) => {
        if (result) {
          this.deselectConcept.emit({ date, concept });
        }
      });
    } else {
      this.selectedConcept.emit({ date, concept });
    }
  }

  renderConcept(date: Date, concept: ConceptInterface): string {
    const reservation = this.isReserved(date, concept);
    let text = `Select ${concept.name.toLowerCase()}`;
    if (reservation) {
      text = reservation.concept.positions[0].name;
    }
    return text;
  }

  isReserved(
    date: Date,
    concept: ConceptInterface
  ): ReservationInterface | undefined {
    return this.reservations.find(
      (reservation) =>
        reservation.concept._id === concept._id &&
        reservation.startAt.toDateString() === date.toDateString()
    );
  }
}
