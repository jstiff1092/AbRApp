import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAntibioticPageRoutingModule } from './edit-antibiotic-routing.module';

import { EditAntibioticPage } from './edit-antibiotic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAntibioticPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [EditAntibioticPage]
})
export class EditAntibioticPageModule {}
