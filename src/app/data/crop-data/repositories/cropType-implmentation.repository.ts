import { Observable } from "rxjs";
import { CropTypeModel } from "../../../domain/models/Crop/crop_type.model";
import { ResponseCropType } from "./entities/CropType";
import { CropTypeRepository } from "../../../domain/repositories/Crop/crop_type.repository";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { CropTypeRepositoryMapper } from "./mappers/cropType-getAll-repository-mapper";

@Injectable({ 
  providedIn: "root",
})
export class CropTypeImplementationRepository extends CropTypeRepository {
  private url = "http://54.156.75.55/crop_type";

  constructor(private http: HttpClient) {
    super();
  }

  private cropTypeMapper = new CropTypeRepositoryMapper();

  getTypeCrop(id: number): Observable<CropTypeModel> {
    return this.http
      .get<ResponseCropType>(`${this.url}/${id}`)
      .pipe(
        map((response) => this.cropTypeMapper.mapFrom(response)) 
      );
  }
}
