import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AppMaterialModule } from '../../../../app-material.module';
import { TranslocoModule } from '@ngneat/transloco';
import { ConceptInterface } from '../../../../core/interfaces';

@Component({
  selector: 'app-date-item',
  standalone: true,
  imports: [CommonModule, AppMaterialModule, TranslocoModule],
  templateUrl: './date-item.component.html',
  styleUrl: './date-item.component.scss',
})
export class DateItemComponent {
  @Input() date = new Date();
  @Input() concepts: ConceptInterface[] = [];

  constructor() {
    console.log(this.concepts);
  }
}
