import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Concept, Slot } from '../../../store/concept/concept.model';
import { ReservationFacade } from '../../../store/reservation/reservation.facade';

@Component({
  selector: 'app-slot-list',
  standalone: false,
  templateUrl: './slot-list.component.html',
  styleUrl: './slot-list.component.scss',
})
export class SlotListComponent {
  @Input({ required: true }) date!: Date;
  @Input({ required: true }) concept!: Concept;
  @Output() slotSelected = new EventEmitter<Slot | null>();

  constructor(public reservationFacade: ReservationFacade) {}

  onSlotSelected(slot: Slot) {
    this.slotSelected.emit(slot);
  }

  goBack() {
    this.slotSelected.emit();
  }
}
