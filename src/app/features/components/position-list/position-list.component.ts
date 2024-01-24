import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConceptInterface, PositionInterface } from '../../models';

@Component({
  selector: 'app-position-list',
  standalone: false,
  templateUrl: './position-list.component.html',
  styleUrl: './position-list.component.scss',
})
export class PositionListComponent {
  @Input({ required: true }) date!: Date;
  @Input({ required: true }) concept!: ConceptInterface;
  @Output() positionSelected = new EventEmitter<PositionInterface | null>();

  onPositionSelected(position: PositionInterface) {
    this.positionSelected.emit(position);
  }

  goBack() {
    this.positionSelected.emit();
  }
}
