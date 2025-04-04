import { Mapper } from "../../../../base/mapper";
import { CropModel } from "../../../../domain/models/Crop/crop.model";
import { ResponseCrop } from "../entities/Crop";

export class CropRepositoryMapper extends Mapper<ResponseCrop, CropModel> {
    mapFrom(response: ResponseCrop): CropModel {
        const crop = response.data.attributes
        return {
            id: Number(response.data.id),
            crop_name: response.data.attributes.crop_name,
            id_cultivation_parameter: response.data.attributes.id_cultivation_parameter,
            id_crop_type: response.data.attributes.id_crop_type,
        };
    }
}
