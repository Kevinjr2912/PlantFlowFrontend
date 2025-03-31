import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcelPageComponent } from './parcel-page/parcel-page.component';
import { ActionsParcelsComponent } from './actions-parcels/actions-parcels.component';
import { CardParcelComponent } from './card-parcel/card-parcel.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormParcelComponent } from './form-parcel/form-parcel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParcelDataModule } from '../../data/parcel-data/parcel-data.module';


@NgModule({
  declarations: [
    ParcelPageComponent,
    ActionsParcelsComponent,
    CardParcelComponent,
    FormParcelComponent,

  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    FormsModule,
    ParcelDataModule
  ],
  exports: [
    ParcelPageComponent
  ]
})
export class ParcelModule { }
