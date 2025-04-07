import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcelPageComponent } from './presentation/parcel/parcel-page/parcel-page.component';
import { CropPageComponent } from './presentation/crop/crop-page/crop-page.component';
import { FormParcelComponent } from './presentation/parcel/form-parcel/form-parcel.component';
import { SettingsPageComponent } from './presentation/user/settings-page/settings-page.component';
import { LoginComponent } from './presentation/auth/pages/login/login.component';
import { RegisterComponent } from './presentation/auth/pages/register/register.component';
import { FormParametersComponent } from './presentation/parcel/form-parameters/form-parameters.component';
import { FormCropComponent } from './presentation/parcel/form-crop/form-crop.component';
import { FormParcelFComponent } from './presentation/parcel/form-parcel-f/form-parcel-f.component';

const routes: Routes = [

  {path:"parcel",component:ParcelPageComponent},
  {path:"parcel/add",component:FormParcelComponent},
  {path:"crop/:id",component:CropPageComponent},
  {path:"settings",component:SettingsPageComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:'', redirectTo:'parcel', pathMatch: 'full'},
  {path:"parcel/add/1",component:FormParametersComponent},
  {path:"parcel/add/2",component:FormCropComponent},
  {path:"parcel/add/3",component:FormParcelFComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
