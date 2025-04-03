import { Observable } from "rxjs";
import { DeviceModel } from "../../models/Device/device.model";


export abstract class DeviceRepository {
    abstract getDeviceByID (id: string ) : Observable<DeviceModel>
    // abstract createDevice (device : DeviceModel) : Observable <DeviceModel>
}
