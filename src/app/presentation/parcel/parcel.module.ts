import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcelPageComponent } from './parcel-page/parcel-page.component';
import { ActionsParcelsComponent } from './actions-parcels/actions-parcels.component';
import { CardParcelComponent } from './card-parcel/card-parcel.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormParcelComponent } from './form-parcel/form-parcel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParcelDataModule } from '../../data/parcel-data/parcel-data.module';
import { CropDataModule } from '../../data/crop-data/crop-data.module';
import { DeviceDataModule } from '../../data/device-data/device-data.module';
import { FormParametersComponent } from './form-parameters/form-parameters.component';


@NgModule({
  declarations: [
    ParcelPageComponent,
    ActionsParcelsComponent,
    CardParcelComponent,
    FormParcelComponent,
    FormParametersComponent,

  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    FormsModule,
    ParcelDataModule,
    ParcelDataModule,
    CropDataModule,
    DeviceDataModule
  ],
  exports: [
    ParcelPageComponent
  ]
})
export class ParcelModule { }
