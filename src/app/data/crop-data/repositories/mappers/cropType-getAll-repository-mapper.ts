import { Mapper } from "../../../../base/mapper";
import { CropTypeModel } from "../../../../domain/models/Crop/crop_type.model";
import { ResponseCropType } from "../entities/CropType";

export class CropTypeRepositoryMapper extends Mapper<ResponseCropType, CropTypeModel> {
  mapFrom(response: ResponseCropType): CropTypeModel {
    const crop = response.data.attributes;
    return {
      id: parseInt(response.data.id, 10), 
      crop_type_name: crop.crop_type_name,
      description: crop.description,
    };
  }
}
