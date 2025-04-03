import { Mapper } from "../../../../base/mapper";
import { DeviceModel } from "../../../../domain/models/Device/device.model";
import { ResponseDevice } from "../entities/Device";

export class DeviceGetByIdRepositoryMapper extends Mapper<ResponseDevice, DeviceModel> {
  mapFrom(response: ResponseDevice): DeviceModel {
    const device = response.data.attributes;
    return {
      Id: response.data.id,
      Id_model: device.id_model,
      Id_status: device.id_status,
      Manufacturing_date: device.manufacturing_date ? new Date(device.manufacturing_date) : null,
      Installation_date: device.installation_date ? new Date(device.installation_date) : null,
      Maintenance_date: device.maintenance_date ? new Date(device.maintenance_date) : null,
      Withdrawal_date: device.withdrawal_date ? new Date(device.withdrawal_date) : null,
    };
  }
}
