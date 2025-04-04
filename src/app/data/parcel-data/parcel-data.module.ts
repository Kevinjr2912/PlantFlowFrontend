import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ParcelRepository } from '../../domain/repositories/Parcel/parcel.repository';
import { ParcelImplementationRepository } from './repositories/parcel-implementation.repository';
import { getParcelUseCase } from '../../domain/useCases/Parcel/get-parcel.useCase';
import { RegisterPacelUseCase } from '../../domain/useCases/Parcel/register-parcel.useCase';
import { GetParcelByIdUseCase } from '../../domain/useCases/Parcel/getById-parcel.useCase';


const registerParcelCaseFactory = (parcelRepo : ParcelRepository) => new RegisterPacelUseCase(parcelRepo)

export const registerParcelUseCaseProvider = {
  provide: RegisterPacelUseCase,
  useFactory: registerParcelCaseFactory,
  deps: [ParcelRepository]
}

const getParcelsUseCaseFactory = (parcelRepo: ParcelRepository) => new getParcelUseCase(parcelRepo)

export const getParcelUseCaseProvider = {
  provide: getParcelUseCase,
  useFactory: getParcelsUseCaseFactory,
  deps: [ParcelRepository]
}

const getParcelByIdCaseFactory = (parcelRepo : ParcelRepository) => new GetParcelByIdUseCase(parcelRepo)

export const getParcelByIdUseCaseProvider={
  provide: GetParcelByIdUseCase,
  useFactory : getParcelByIdCaseFactory,
  deps: [ParcelRepository]
}



@NgModule({
  providers: [
      registerParcelUseCaseProvider, getParcelUseCaseProvider, getParcelByIdUseCaseProvider,
      { provide: ParcelRepository, useClass: ParcelImplementationRepository}
    ],
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ParcelDataModule { }
