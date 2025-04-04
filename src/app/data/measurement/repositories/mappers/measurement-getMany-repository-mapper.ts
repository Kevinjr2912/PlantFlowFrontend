import { Mapper } from "../../../../base/mapper";
import { MeasurementModel } from "../../../../domain/models/Measurement/Measurement";
import { ResponseMeasurements } from "../models/measurement";

export class ManyMeasurementsRepositoryMapper extends Mapper<ResponseMeasurements, MeasurementModel[]>{
    override mapFrom(param: ResponseMeasurements): MeasurementModel[] {
        return param.Data.map(measurement => ({
            id: parseInt(measurement.Id),
            id_device: measurement.Attributes.Id_device,
            temp: measurement.Attributes.Humedity,
            humedity: measurement.Attributes.Humedity,
            air: measurement.Attributes.Air,
            sun: measurement.Attributes.Sun,
            date_and_hour: measurement.Attributes.Date_and_hour
        }))
    }
}