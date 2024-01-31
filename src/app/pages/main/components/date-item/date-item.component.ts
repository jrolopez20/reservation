import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppMaterialModule } from '../../../../app-material.module';
import { TranslocoModule } from '@ngneat/transloco';
import { ConfirmComponent } from '../../../../shared/components/confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { Reservation } from '../../../../store/reservation/reservation.model';
import { Observable, map, combineLatestWith, combineLatest } from 'rxjs';
import { Concept } from '../../../../store/concept/concept.model';
import moment from 'moment';
import { ReservationFacade } from '../../../../store/reservation/reservation.facade';
import { AuthFacade } from '../../../../store/auth/auth.facade';

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
  @Output() removeReservation = new EventEmitter<string>();
  reservations$: Observable<Reservation[]>;

  constructor(
    public dialog: MatDialog,
    private reservationFacade: ReservationFacade,
    private authFacade: AuthFacade
  ) {
    this.reservations$ = this.reservationFacade.reservations$;
  }

  onRemoveReservation(id: string) {
    const dialogRef = this.dialog.open(ConfirmComponent);
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.removeReservation.emit(id);
      }
    });
  }

  selectConcept(date: Date, concept: Concept): void {
    this.selectedConcept.emit({ date, concept });
  }

  isReserved(
    date: Date,
    concept: Concept
  ): Observable<Reservation | undefined> {
    // Combine the source$ and filter$ observables
    const combined$ = combineLatest([
      this.reservations$,
      this.authFacade.user$,
    ]);

    // Map the combined$ observable to a filtered array observable
    return combined$.pipe(
      map(([reservations, user]) =>
        reservations.find(
          (reservation) =>
            reservation.account === user?.account &&
            reservation.concept === concept.code &&
            reservation.date.toString() === moment(date).format('YYYY-MM-DD')
        )
      )
    );
  }
}
