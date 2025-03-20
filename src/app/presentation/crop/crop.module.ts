import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropPageComponent } from './crop-page/crop-page.component';
import { CardMyCropComponent } from './card-my-crop/card-my-crop.component';
import { CardStatisticsComponent } from './card-statistics/card-statistics.component';
import { CardParametersComponent } from './card-parameters/card-parameters.component';




@NgModule({
  declarations: [
    CropPageComponent,
    CardMyCropComponent,
    CardStatisticsComponent,
    CardParametersComponent,
  
  ],
  imports: [
    CommonModule
  ]
})
export class CropModule { }
