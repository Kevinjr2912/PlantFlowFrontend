import { Observable } from "rxjs";
import { UseCase } from "../../../base/use-case";
import { MeasurementModel } from "../../models/Measurement/Measurement";
import { MeasurementRepository } from "../../repositories/Measurement/measurement.repository";

export class getAMeasurementUseCase implements UseCase<number, MeasurementModel> {
    constructor(private measurementRepo: MeasurementRepository) {}
    execute(params: number): Observable<MeasurementModel> {
        return this.measurementRepo.getAMeasurement(params)
    }
}