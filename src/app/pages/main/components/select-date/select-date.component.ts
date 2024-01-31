import { Component } from '@angular/core';
import {
  DateItemComponent,
  SelectedConcept,
} from '../date-item/date-item.component';
import { Router } from '@angular/router';
import { AppMaterialModule } from '../../../../app-material.module';
import { FeaturesModule } from '../../../../features/features.module';
import {
  CreateReservationDto,
  Reservation,
} from '../../../../store/reservation/reservation.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/store';
import { reservationsSelector } from '../../../../store/reservation/selectors';
import * as ReservationActions from '../../../../store/reservation/actions';
import { CommonModule } from '@angular/common';
import { Concept, Slot } from '../../../../store/concept/concept.model';
import { ReservationFacade } from '../../../../store/reservation/reservation.facade';
import moment from 'moment';

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

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private reservationFacade: ReservationFacade
  ) {
    this.reservations$ = this.store.select(reservationsSelector);
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state && state['selectedConcepts']) {
      this.concepts = state['selectedConcepts'];
      const start = new Date();
      const end = new Date();
      end.setDate(end.getDate() + 15);
      this.dateRange = this.createDateRange(start, end);
      this.loadReservations(this.concepts.map((item) => item.code));
    } else {
      this.goHome();
    }
  }

  private loadReservations(conceptsCode: string[]): void {
    const concept = conceptsCode[0]; // TODOuse concat to verify each concept
    this.reservationFacade.getAll(concept, new Date());
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

  onSlotSelected(slot: Slot | null) {
    this.activeTab = 0;
    if (slot && this.selectedConcept) {
      const reservation: CreateReservationDto = {
        date: moment(this.selectedConcept.date).format('YYYY-MM-DD'),
        concept: this.selectedConcept.concept.code,
        slot: slot.code,
      };

      this.reservationFacade.add(reservation);
    }
  }

  onRemoveReservation(id: string): void {
    this.reservationFacade.remove(id);
  }

  goHome() {
    this.router.navigateByUrl('');
  }
}
