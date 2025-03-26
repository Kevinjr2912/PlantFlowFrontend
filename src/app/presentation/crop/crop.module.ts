import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropPageComponent } from './crop-page/crop-page.component';
import { CardMyCropComponent } from './card-my-crop/card-my-crop.component';
import { CardStatisticsComponent } from './card-statistics/card-statistics.component';
import { CardParametersComponent } from './card-parameters/card-parameters.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CropPageComponent,
    CardMyCropComponent,
    CardStatisticsComponent,
    CardParametersComponent,
  
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ]
})
export class CropModule { }
