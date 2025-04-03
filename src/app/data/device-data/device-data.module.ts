import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceRepository } from '../../domain/repositories/Device/device.repository';
import { getDeviceByIdUseCase } from '../../domain/useCases/Device/get-device.useCase';
import { DeviceImplementationRepository } from './repositories/device-implementation.repository';


const getDeviceCaseFactory = (deviceRepo : DeviceRepository) => new getDeviceByIdUseCase(deviceRepo)

export const getDeviceByIdUseCaseProvider = {
  
  provide: getDeviceByIdUseCase,
  useFactory: getDeviceCaseFactory,
  deps: [DeviceRepository]
}

@NgModule({
  providers:[
    getDeviceByIdUseCaseProvider,
    {provide: DeviceRepository, useClass: DeviceImplementationRepository}
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DeviceDataModule { }
