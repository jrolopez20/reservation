import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Position } from '../../../store/concept/concept.model';

@Component({
  selector: 'app-position',
  standalone: false,
  templateUrl: './position.component.html',
  styleUrl: './position.component.scss',
})
export class PositionComponent {
  @Input({ required: true }) position!: Position;
  @Output() positionSelected = new EventEmitter<Position>();

  onClick() {
    if (this.position.enabled) {
      this.positionSelected.emit(this.position);
    }
  }
}
