import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAntibioticPage } from './edit-antibiotic.page';

const routes: Routes = [
  {
    path: '',
    component: EditAntibioticPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAntibioticPageRoutingModule {}
