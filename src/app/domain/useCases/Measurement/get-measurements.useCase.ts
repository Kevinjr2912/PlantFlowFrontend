import { Observable } from "rxjs";
import { UseCase } from "../../../base/use-case";
import { MeasurementModel } from "../../models/Measurement/Measurement";
import { MeasurementRepository } from "../../repositories/Measurement/measurement.repository";

export class getMeasurementsUseCase implements UseCase<string, MeasurementModel[]> {
    constructor(private measurementRepo: MeasurementRepository){}
    execute(params: string): Observable<MeasurementModel[]> {
        return this.measurementRepo.getMeasurements(params)
    }
}