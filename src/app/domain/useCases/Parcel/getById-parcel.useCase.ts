import { ParcelRepository } from '../../repositories/Parcel/parcel.repository';
import { Observable } from 'rxjs';
import { ParcelModel } from '../../models/Parcel/parcel.model';

export class GetParcelByIdUseCase {
  constructor(private parcelRepo: ParcelRepository) {}

  execute(id: number): Observable<ParcelModel> {
    return this.parcelRepo.getParcelByID(id)
  }
}
