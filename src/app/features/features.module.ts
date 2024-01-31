import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlotListComponent } from './components/slot-list/slot-list.component';
import { AppMaterialModule } from '../app-material.module';
import { SlotComponent } from './components/slot/slot.component';

@NgModule({
  declarations: [SlotListComponent, SlotComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [SlotListComponent, SlotComponent],
})
export class FeaturesModule {}
