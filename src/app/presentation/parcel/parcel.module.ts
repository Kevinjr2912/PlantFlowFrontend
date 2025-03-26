import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcelPageComponent } from './parcel-page/parcel-page.component';
import { ActionsParcelsComponent } from './actions-parcels/actions-parcels.component';
import { CardParcelComponent } from './card-parcel/card-parcel.component';
import { AddParcelFormComponent } from './add-parcel-form/add-parcel-form.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormParcelComponent } from './form-parcel/form-parcel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParcelPageComponent,
    ActionsParcelsComponent,
    CardParcelComponent,
    AddParcelFormComponent,
    FormParcelComponent,

  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ParcelPageComponent
  ]
})
export class ParcelModule { }
