import { Observable } from "rxjs";
import { UseCase } from "../../../base/use-case";
import { CropModel } from "../../models/Crop/crop.model";
import { CropRepository } from "../../repositories/Crop/crop.repository";

export class getCropByIdUseCase implements UseCase <number, CropModel>{
    constructor (private cropRepository : CropRepository){}
    execute( id : number): Observable<CropModel>{
        return this.cropRepository.getCropById(id)
    }
}
