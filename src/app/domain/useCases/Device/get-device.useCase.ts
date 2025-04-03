import { Observable } from "rxjs";
import { UseCase } from "../../../base/use-case";
import { DeviceModel } from "../../models/Device/device.model";
import { DeviceRepository } from "../../repositories/Device/device.repository";

export class getDeviceByIdUseCase implements UseCase<string, DeviceModel>{
    constructor (private deviceRepository: DeviceRepository){}
    execute(id: string): Observable<DeviceModel> {
        return this.deviceRepository.getDeviceByID(id)
    }
}

