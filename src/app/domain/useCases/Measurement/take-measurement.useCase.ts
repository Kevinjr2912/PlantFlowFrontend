import { Observable } from "rxjs";
import { UseCase } from "../../../base/use-case";
import { MeasurementModel } from "../../models/Measurement/Measurement";
import { MeasurementRepository } from "../../repositories/Measurement/measurement.repository";

export class takeMeasurementUseCase implements UseCase<MeasurementModel, MeasurementModel> {
    constructor(private measurementRepository: MeasurementRepository) {}
    execute(params: MeasurementModel): Observable<MeasurementModel> {
        return this.measurementRepository.takeMeasurement(params)
    }
}