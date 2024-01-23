import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SelectConceptComponent } from './components/select-concept/select-concept.component';
import { SelectDateComponent } from './components/select-date/select-date.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: SelectConceptComponent,
      },
      {
        path: 'schedule',
        component: SelectDateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
