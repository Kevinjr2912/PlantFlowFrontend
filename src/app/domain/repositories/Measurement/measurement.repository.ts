import { Observable } from "rxjs";
import { MeasurementModel } from "../../models/Measurement/Measurement";

export abstract class MeasurementRepository {
    abstract takeMeasurement(measurement: MeasurementModel): Observable<MeasurementModel>
    abstract getMeasurements(id_device: string): Observable<MeasurementModel[]>
    abstract getAMeasurement(id: number): Observable<MeasurementModel>
}