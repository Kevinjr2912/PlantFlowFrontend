import { Observable } from "rxjs";
import { ParcelModel } from "../../models/Parcel/parcel.model";
import { ParcelMinInfo, ParcelMinInfoModel } from "../../models/Parcel/parcelMinInfo.model";


export abstract class ParcelRepository {

    abstract registerParcel(parcel: ParcelModel): Observable<ParcelModel>
    abstract getParcels(id_user: number): Observable<ParcelMinInfoModel[]> 
    // abstract getParcelByID(Id:number, parcel: ParcelModel) : Observable<ParcelModel >
    // abstract deleteParcel(Id: number): Observable<void>


}
