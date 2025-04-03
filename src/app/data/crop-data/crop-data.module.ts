import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropTypeRepository } from '../../domain/repositories/Crop/crop_type.repository';
import { getCropTypeUseCase } from '../../domain/useCases/Crop/get-crop_type.useCase';
import { CropTypeImplementationRepository } from './repositories/cropType-implmentation.repository';
import { CropRepository } from '../../domain/repositories/Crop/crop.repository';
import { getCropByIdUseCase } from '../../domain/useCases/Crop/get-cropById.useCase';
import { CropImplementationRepository } from './repositories/crop-implementation.repository';

const getCropTypeCaseFactory = (cropTypeRepo : CropTypeRepository) => new getCropTypeUseCase(cropTypeRepo)

export const getCropTypeUseCaseProvider = {
  
  provide: getCropTypeUseCase,
  useFactory: getCropTypeCaseFactory,
  deps: [CropTypeRepository]
}


const getCropByIdCaseFactory = (cropRepo : CropRepository) => new getCropByIdUseCase ( cropRepo)

export const getCropByIdUseCaseProvider ={
  provide: getCropByIdUseCase,
  useFactory: getCropByIdCaseFactory,
  deps: [CropRepository]
}

@NgModule({
   providers:[
    getCropTypeUseCaseProvider,
    getCropByIdUseCaseProvider,
      {provide: CropTypeRepository, useClass: CropTypeImplementationRepository},
      { provide: CropRepository, useClass: CropImplementationRepository }
    ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CropDataModule { }
