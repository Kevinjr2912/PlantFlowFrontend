import { Observable } from "rxjs";
import { ParcelModel } from "../../models/Parcel/parcel.model";


export abstract class ParcelRepository {

    abstract createParcel(parcel: ParcelModel): Observable<ParcelModel>
    abstract getAllMyParcels(id_user: number): Observable<ParcelModel[]>
    //FALTA EL GET ALL ABOUT MY PARCEL
    abstract editParcel(ID:number , parcel: ParcelModel): Observable<ParcelModel>
    abstract deleteParcel(ID: number): Observable<void>





    // CreateParcel(parcel models.Parcel)(int, error)
	// GetAllMyParcels(id_user int)([]models.ParcelAllInfo, error) NO SE ALABERGA
	// GetAllAboutMyParcel(id int)([]models.Parcel, error)
	// EditParcel(parcel models.Parcel)error
	// DeleteParcel(id int)error

}
