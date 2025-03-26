import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcelPageComponent } from './presentation/parcel/parcel-page/parcel-page.component';
import { CropPageComponent } from './presentation/crop/crop-page/crop-page.component';
import { FormParcelComponent } from './presentation/parcel/form-parcel/form-parcel.component';

const routes: Routes = [

  {path:"parcel",component:ParcelPageComponent},
  {path:"parcel/add",component:FormParcelComponent},
  {path:"crop",component:CropPageComponent},
  {path:'', redirectTo:'crop  ', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
