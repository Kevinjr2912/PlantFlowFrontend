import { Mapper } from "../../../../base/mapper";
import { ParcelMinInfoModel } from "../../../../domain/models/Parcel/parcelMinInfo.model";
import { ResponseParcels } from "../entities/Parcel";

export class ParcelGetAllRepositoryMapper extends Mapper<ResponseParcels, ParcelMinInfoModel[]> {
    mapFrom(res: ResponseParcels): ParcelMinInfoModel[] {
        return res.data.map(parcel => ({
          id: Number(parcel.id),
          name: parcel.attributes.crop_name || "", 
          type_crop: parcel.attributes.type_crop ?? "",
          device_model: parcel.attributes.device_model ?? "",
        }));
      }
}