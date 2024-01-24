import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PositionInterface } from '../../models';

@Component({
  selector: 'app-position',
  standalone: false,
  templateUrl: './position.component.html',
  styleUrl: './position.component.scss',
})
export class PositionComponent {
  @Input({ required: true }) position!: PositionInterface;
  @Output() positionSelected = new EventEmitter<PositionInterface>();

  onClick() {
    if (this.position.enabled) {
      this.positionSelected.emit(this.position);
    }
  }
}
