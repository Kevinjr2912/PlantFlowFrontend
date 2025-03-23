import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcelPageComponent } from './parcel-page/parcel-page.component';
import { ActionsParcelsComponent } from './actions-parcels/actions-parcels.component';
import { CardParcelComponent } from './card-parcel/card-parcel.component';
import { AddParcelFormComponent } from './add-parcel-form/add-parcel-form.component';
import { RouterLink, RouterLinkActive } from '@angular/router';


@NgModule({
  declarations: [
    ParcelPageComponent,
    ActionsParcelsComponent,
    CardParcelComponent,
    AddParcelFormComponent,

  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    ParcelPageComponent
  ]
})
export class ParcelModule { }
