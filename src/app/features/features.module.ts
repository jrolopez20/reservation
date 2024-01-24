import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionListComponent } from './components/position-list/position-list.component';
import { AppMaterialModule } from '../app-material.module';
import { PositionComponent } from './components/position/position.component';

@NgModule({
  declarations: [PositionListComponent, PositionComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [PositionListComponent, PositionComponent],
})
export class FeaturesModule {}
