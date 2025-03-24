import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcelPageComponent } from './presentation/parcel/parcel-page/parcel-page.component';
import { CropPageComponent } from './presentation/crop/crop-page/crop-page.component';
import { AddParcelFormComponent } from './presentation/parcel/add-parcel-form/add-parcel-form.component';
import { AddCropFormComponent } from './presentation/crop/add-crop-form/add-crop-form.component';

const routes: Routes = [

  {path:"parcel",component:ParcelPageComponent},
  {path:"parcel/add",component:AddParcelFormComponent},
  {path:"crop",component:CropPageComponent}, 
  {path:"crop/add",component:AddCropFormComponent},
  {path:'', redirectTo:'crop  ', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
