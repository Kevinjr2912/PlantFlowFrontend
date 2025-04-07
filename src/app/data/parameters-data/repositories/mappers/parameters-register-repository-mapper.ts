import { Mapper } from "../../../../base/mapper";
import { CultivationParametersModel } from "../../../../domain/models/Parameters/param.model";
import { ResponseCultivationParameter } from "../entities/Parameters";

export class ParameterRegisterRepositoryMapper extends Mapper<ResponseCultivationParameter, CultivationParametersModel> {
  mapFrom(response: ResponseCultivationParameter): CultivationParametersModel {
    const attributes = response.data.attributes;

    return {
      id: Number(response.data.id),
      humidity_min: attributes.min_humedity,
      humidity_max: attributes.max_humedity,
      temp_min: attributes.min_temp,
      temp_max: attributes.max_temp,
      max_air_con: attributes.max_air_con,
      // min_air_con: attributes.min_air_con,
    };
  }
}
