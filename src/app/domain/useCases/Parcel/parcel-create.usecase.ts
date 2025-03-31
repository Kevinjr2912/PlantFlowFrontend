import { Observable } from "rxjs";
import { UseCase } from "../../../base/use-case";
import { ParcelRepository } from "../../repositories/Parcel/parcel.repository";
import { ParcelModel } from "../../models/Parcel/parcel.model";


export class CreateParcelUseCase implements UseCase<ParcelModel, ParcelModel> {
    constructor(private parcelRepository: ParcelRepository) { }

    execute(parcel: ParcelModel): Observable<ParcelModel> {
        return this.parcelRepository.createParcel(parcel);
    }
}