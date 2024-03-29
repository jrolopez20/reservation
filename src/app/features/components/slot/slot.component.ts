import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Slot } from '../../../store/concept/concept.model';

@Component({
  selector: 'app-slot',
  standalone: false,
  templateUrl: './slot.component.html',
  styleUrl: './slot.component.scss',
})
export class SlotComponent {
  @Input({ required: true }) slot!: Slot;
  @Input() reserved: boolean = false;
  @Output() slotSelected = new EventEmitter<Slot>();

  onClick() {
    if (this.slot.enabled && !this.reserved) {
      this.slotSelected.emit(this.slot);
    }
  }
}
