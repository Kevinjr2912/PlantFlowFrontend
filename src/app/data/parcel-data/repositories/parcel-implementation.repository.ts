import { Injectable } from "@angular/core";
import { ParcelRepository } from "../../../domain/repositories/Parcel/parcel.repository";
import { HttpClient } from "@angular/common/http";
import { ParcelImplementationRepositoryMapper,  } from "./mappers/parcel-repository-mapper";
import { ParcelModel } from "../../../domain/models/Parcel/parcel.model";
import { map, Observable } from "rxjs";
import { ResponseOneParcel, ResponseParcels } from "./entities/Parcel";
import { ParcelMinInfo } from "../../../domain/models/Parcel/parcelMinInfo.model";
import { ParcelGetAllRepositoryMapper } from "./mappers/parcel-getAll-repository-mapper";
import { ParcelGetByIdRepositoryMapper } from "./mappers/parcel-getById-repository-mapper";

@Injectable({
  providedIn: "root",
})
export class ParcelImplementationRepository extends ParcelRepository {
  constructor(private http: HttpClient) {
    super();
  }

  //para register
  parcelMapper = new ParcelImplementationRepositoryMapper();
  parcelGetAllMapper = new ParcelGetAllRepositoryMapper();
  parcelGetByIdMapper = new ParcelGetByIdRepositoryMapper();
  
  //para get parcels
//   parcelMapperGetParcels = new GetParcelsImplmentationRepossitoryMapper();


  private url = "http://localhost:8080/parcels";
  

  registerParcel(parcel: ParcelModel): Observable<ParcelModel> {
    return this.http
      .post<ResponseParcels>(this.url, parcel)
      .pipe(
        map(response => this.parcelMapper.mapFrom(response)[0]) 
      );
}

  getParcels(id_user: number): Observable<ParcelMinInfo[]> {
    return this.http
    .get<ResponseParcels>(`${this.url}/many/${id_user}`) 
    .pipe(
      map(response => {
        console.log("dato api:", response); 
        return this.parcelGetAllMapper.mapFrom(response);
      })
    );
}

getParcelByID(id: number): Observable<ParcelModel> {
  return this.http
    .get<ResponseOneParcel>(`${this.url}/${id}`) 
    .pipe(
      map(response => this.parcelGetByIdMapper.mapFrom(response)) 
    );
}

}
