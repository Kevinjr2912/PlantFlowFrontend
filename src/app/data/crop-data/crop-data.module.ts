import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropTypeRepository } from '../../domain/repositories/Crop/crop_type.repository';
import { getCropTypeUseCase } from '../../domain/useCases/Crop/get-crop_type.useCase';
import { CropTypeImplementationRepository } from './repositories/cropType-implmentation.repository';

const getCropTypeCaseFactory = (cropTypeRepo : CropTypeRepository) => new getCropTypeUseCase(cropTypeRepo)

export const getCropTypeUseCaseProvider = {
  
  provide: getCropTypeUseCase,
  useFactory: getCropTypeCaseFactory,
  deps: [CropTypeRepository]
}


@NgModule({
   providers:[
    getCropTypeUseCaseProvider,
      {provide: CropTypeRepository, useClass: CropTypeImplementationRepository}
    ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CropDataModule { }
