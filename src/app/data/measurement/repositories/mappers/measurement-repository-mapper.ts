import { Mapper } from "../../../../base/mapper";
import { MeasurementModel } from "../../../../domain/models/Measurement/Measurement";
import { ResponseMeasurement } from "../models/measurement";

export class MeasurementRepositoryMapper extends Mapper<ResponseMeasurement, MeasurementModel> {
    override mapFrom(param: ResponseMeasurement): MeasurementModel {
        let measurement = param.Data.Attributes
        return {
            id: parseInt(param.Data.Id),
            id_device: measurement.Id_device,
            temp: measurement.Temp,
            humedity: measurement.Humedity,
            air: measurement.Air,
            sun: measurement.Sun,
            date_and_hour: measurement.Date_and_hour
        }
    }
}