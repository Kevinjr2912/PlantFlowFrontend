import { Mapper } from "../../../../base/mapper";
import { ParcelModel } from "../../../../domain/models/Parcel/parcel.model";
import { ResponseOneParcel } from "../entities/Parcel"; 

export class ParcelGetByIdRepositoryMapper extends Mapper<ResponseOneParcel, ParcelModel> {
  mapFrom(response: ResponseOneParcel): ParcelModel {
    const parcel = response.data.attributes;

    return {
      Id: Number(response.data.id), 
      Id_user: parcel.id_user,
      Id_crop: parcel.id_crop,
      Id_device: parcel.id_device,
    };
  }
}
