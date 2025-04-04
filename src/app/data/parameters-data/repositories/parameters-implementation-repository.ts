import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

import { ParameterRepository } from "../../../domain/repositories/Parameters/parameter.repository";
import { CultivationParametersModel } from "../../../domain/models/Parameters/param.model";
import { ResponseCultivationParameter } from "./entities/Parameters";
import { ParameterGetByIdRepositoryMapper } from "./mappers/parameter-getById-repository-mapper";
import { ParameterSetRepositoryMapper } from "./mappers/parameter-set-repository-mapper";

@Injectable({
  providedIn: "root",
})
export class ParameterImplementationRepository extends ParameterRepository {
  constructor(private http: HttpClient) {
    super();
  }

  private url = "http://localhost:8080/params";

  parameterGetByIdMapper = new ParameterGetByIdRepositoryMapper();
  parameterSetMapper = new ParameterSetRepositoryMapper();

  GetParametersById(id: number): Observable<CultivationParametersModel> {
    return this.http
      .get<ResponseCultivationParameter>(`${this.url}/${id}`)
      .pipe(map(response => this.parameterGetByIdMapper.mapFrom(response)));
  }

  SetParameters(parameter: CultivationParametersModel): Observable<CultivationParametersModel> {
    return this.http
      .post<ResponseCultivationParameter>(this.url, parameter)
      .pipe(map(response => this.parameterSetMapper.mapFrom(response)));
  }
}
