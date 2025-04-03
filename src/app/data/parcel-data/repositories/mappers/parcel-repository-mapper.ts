import { Mapper } from "../../../../base/mapper";
import { ParcelModel } from "../../../../domain/models/Parcel/parcel.model";
import { ParcelMinInfo } from "../../../../domain/models/Parcel/parcelMinInfo.model";
import { ResponseParcels } from "../entities/Parcel";

export class ParcelImplementationRepositoryMapper extends Mapper<
  ResponseParcels,
  ParcelModel[]
> {
  mapFrom(res: ResponseParcels): ParcelModel[] {
    return res.data.map(parcel => ({
      Id: parseInt(parcel.id),
      Id_user: parcel.attributes.id_user,
      Id_crop: parcel.attributes.id_crop,
      Id_device: parcel.attributes.id_device,
    }));
  }
}
