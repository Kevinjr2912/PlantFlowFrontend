import { Observable } from "rxjs";
import { DeviceModel } from "../../../domain/models/Device/device.model";
import { ResponseDevice } from "./entities/Device";
import { DeviceRepository } from "../../../domain/repositories/Device/device.repository"; 
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { DeviceGetByIdRepositoryMapper } from "./mappers/device-getById-repository-mapper";

@Injectable({
  providedIn: "root",
})
export class DeviceImplementationRepository extends DeviceRepository {
  private url = "http://54.156.75.55/devices";

  constructor(private http: HttpClient) {
    super();
  }
  
  private deviceGetByIdMapper = new DeviceGetByIdRepositoryMapper();

  getDeviceByID(id: string): Observable<DeviceModel> {
    return this.http
      .get<ResponseDevice>(`${this.url}/one/${id}`) 
      .pipe(
        map((response) => {
          return this.deviceGetByIdMapper.mapFrom(response); 
        })
      );
  }
}
