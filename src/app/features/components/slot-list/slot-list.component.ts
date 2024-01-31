import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Concept, Slot } from '../../../store/concept/concept.model';

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

  onSlotSelected(slot: Slot) {
    this.slotSelected.emit(slot);
  }

  goBack() {
    this.slotSelected.emit();
  }
}
