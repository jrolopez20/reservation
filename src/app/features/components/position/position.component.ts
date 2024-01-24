import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConceptInterface, PositionInterface } from '../../models';

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
    this.positionSelected.emit(this.position);
  }
}
