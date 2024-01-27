import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Concept, Position } from '../../../store/concept/concept.model';

@Component({
  selector: 'app-position-list',
  standalone: false,
  templateUrl: './position-list.component.html',
  styleUrl: './position-list.component.scss',
})
export class PositionListComponent {
  @Input({ required: true }) date!: Date;
  @Input({ required: true }) concept!: Concept;
  @Output() positionSelected = new EventEmitter<Position | null>();

  onPositionSelected(position: Position) {
    this.positionSelected.emit(position);
  }

  goBack() {
    this.positionSelected.emit();
  }
}
