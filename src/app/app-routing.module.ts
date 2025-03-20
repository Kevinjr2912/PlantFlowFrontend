import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcelPageComponent } from './presentation/parcel/parcel-page/parcel-page.component';
import { CropPageComponent } from './presentation/crop/crop-page/crop-page.component';

const routes: Routes = [

  {path:"parcel",component:ParcelPageComponent},
  {path:"crop",component:CropPageComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
