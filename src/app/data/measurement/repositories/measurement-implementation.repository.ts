import { Injectable } from "@angular/core";
import { MeasurementRepository } from "../../../domain/repositories/Measurement/measurement.repository";
import { HttpClient } from "@angular/common/http";
import { MeasurementRepositoryMapper } from "./mappers/measurement-repository-mapper";
import { ManyMeasurementsRepositoryMapper } from "./mappers/measurement-getMany-repository-mapper";
import { map, Observable } from "rxjs";
import { MeasurementModel } from "../../../domain/models/Measurement/Measurement";
import { ResponseMeasurement, ResponseMeasurements } from "./models/measurement";

@Injectable({
    providedIn: "root"
})
export class MeasurementImplementationRepository extends MeasurementRepository {
    private url = "http://localhost:8080/measurements/"

    constructor(private http: HttpClient){
        super();
    }

    private measurementMapper = new MeasurementRepositoryMapper();
    private manyMeasurementMapper = new ManyMeasurementsRepositoryMapper();

    override takeMeasurement(measurement: MeasurementModel): Observable<MeasurementModel> {
        return this.http
            .post<ResponseMeasurement>(`${this.url}`, measurement)
            .pipe(
                map((response) => this.measurementMapper.mapFrom(response))
            )
    }

    override getMeasurements(id_device: string): Observable<MeasurementModel[]> {
        return this.http
            .get<ResponseMeasurements>(`${this.url}many/${id_device}`)
            .pipe(
                map((response) => this.manyMeasurementMapper.mapFrom(response))
            )
    }

    override getAMeasurement(id: number): Observable<MeasurementModel> {
        return this.http
            .get<ResponseMeasurement>(`${this.url}${id}`)
            .pipe(
                map((response) => this.measurementMapper.mapFrom(response))
            )
    }
}