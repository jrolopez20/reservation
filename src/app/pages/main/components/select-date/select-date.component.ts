import { Component } from '@angular/core';
import {
  DateItemComponent,
  SelectedConcept,
} from '../date-item/date-item.component';
import { Router } from '@angular/router';
import { AppMaterialModule } from '../../../../app-material.module';
import { FeaturesModule } from '../../../../features/features.module';
import { Reservation } from '../../../../store/reservation/reservation.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/store';
import { reservationSelector } from '../../../../store/reservation/selectors';
import * as ReservationActions from '../../../../store/reservation/actions';
import { CommonModule } from '@angular/common';
import { Concept, Position } from '../../../../store/concept/concept.model';

@Component({
  selector: 'app-select-date',
  standalone: true,
  imports: [CommonModule, DateItemComponent, AppMaterialModule, FeaturesModule],
  templateUrl: './select-date.component.html',
  styleUrl: './select-date.component.scss',
})
export class SelectDateComponent {
  dateRange: Date[] = [];
  concepts: Concept[] = [];
  reservations$: Observable<Reservation[]>;
  activeTab: number = 0;
  selectedConcept: SelectedConcept | null = null;

  constructor(private router: Router, private store: Store<AppState>) {
    this.reservations$ = this.store.select(reservationSelector);
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state && state['selectedConcepts']) {
      this.concepts = state['selectedConcepts'];
      const start = new Date();
      const end = new Date();
      end.setDate(end.getDate() + 15);
      this.dateRange = this.createDateRange(start, end);
    } else {
      this.goHome()
    }
  }

  private createDateRange(start: Date, end: Date) {
    const arr = [];
    for (
      const dt = new Date(start);
      dt < new Date(end);
      dt.setDate(dt.getDate() + 1)
    ) {
      // Avoid weekend days
      if (dt.getDay() != 6 && dt.getDay() != 0) {
        arr.push(new Date(dt));
      }
    }
    return arr;
  }

  onSelectedConcept(selectedConcept: SelectedConcept) {
    this.selectedConcept = selectedConcept;
    this.activeTab = 1;
  }

  onPositionSelected(position: Position | null) {
    this.activeTab = 0;
    if (position && this.selectedConcept) {
      const reservation: Reservation = {
        _id: 'x' + Math.floor(Math.random() * 10000000000),
        startAt: this.selectedConcept.date,
        endAt: this.selectedConcept.date,
        concept: { ...this.selectedConcept.concept, positions: [position] },
        user: 'xavi',
      };

      this.store.dispatch(ReservationActions.addReservation({ reservation }));
    }
  }

  onDeselectConcept(selectedConcept: SelectedConcept): void {
    this.store.dispatch(
      ReservationActions.deleteReservation({
        date: selectedConcept.date,
        concept: selectedConcept.concept,
      })
    );
  }

  goHome() {
    this.router.navigateByUrl('');
  }
}
