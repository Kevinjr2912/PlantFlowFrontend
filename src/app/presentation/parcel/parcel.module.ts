import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcelPageComponent } from './parcel-page/parcel-page.component';
import { ActionsParcelsComponent } from './actions-parcels/actions-parcels.component';
import { CardParcelComponent } from './card-parcel/card-parcel.component';

@NgModule({
  declarations: [
    ParcelPageComponent,
    ActionsParcelsComponent,
    CardParcelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParcelPageComponent
  ]
})
export class ParcelModule { }
