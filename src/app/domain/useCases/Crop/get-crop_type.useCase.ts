import { Observable } from "rxjs";
import { UseCase } from "../../../base/use-case";
import { CropTypeModel } from "../../models/Crop/crop_type.model";
import { CropTypeRepository } from "../../repositories/Crop/crop_type.repository";

export class getCropTypeUseCase implements UseCase<number, CropTypeModel>{
    constructor (private cropTypeRepo: CropTypeRepository){}
    execute(id: number): Observable<CropTypeModel> {
        return this.cropTypeRepo.getTypeCrop(id)
    }
}

