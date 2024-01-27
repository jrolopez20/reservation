import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppMaterialModule } from '../../../../app-material.module';
import { TranslocoModule } from '@ngneat/transloco';
import { ConfirmComponent } from '../../../../shared/components/confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { Reservation } from '../../../../store/reservation/reservation.model';
import { Observable, map } from 'rxjs';
import { reservationSelector } from '../../../../store/reservation/selectors';
import { AppState } from '../../../../store/store';
import { Store } from '@ngrx/store';
import { Concept, Position } from '../../../../store/concept/concept.model';

export type SelectedConcept = {
  date: Date;
  concept: Concept;
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
  @Input() concepts: Concept[] = [];
  @Output() selectedConcept = new EventEmitter<SelectedConcept>();
  @Output() deselectConcept = new EventEmitter<SelectedConcept>();
  reservations$: Observable<Reservation[]>;

  constructor(public dialog: MatDialog, private store: Store<AppState>) {
    this.reservations$ = this.store.select(reservationSelector);
  }

  unselectConcept(date: Date, concept: Concept) {
    const dialogRef = this.dialog.open(ConfirmComponent);
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.deselectConcept.emit({ date, concept });
      }
    });
  }

  selectConcept(date: Date, concept: Concept): void {
    this.selectedConcept.emit({ date, concept });
  }

  isReserved(date: Date, concept: Concept): Observable<boolean> {
    return this.reservations$.pipe(
      map((array) => {
        return !!array.find(
          (reservation) =>
            reservation.concept._id === concept._id &&
            reservation.startAt.toDateString() === date.toDateString()
        );
      })
    );
  }

  getPositionReserved(
    date: Date,
    concept: Concept
  ): Observable<Position | undefined> {
    return this.reservations$.pipe(
      map((array) => {
        const reservation = array.find(
          (reservation) =>
            reservation.concept._id === concept._id &&
            reservation.startAt.toDateString() === date.toDateString()
        );
        return reservation ? reservation?.concept?.positions[0] : undefined;
      })
    );
  }
}
