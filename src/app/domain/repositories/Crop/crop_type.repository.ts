import { Observable } from "rxjs";
import { CropTypeModel } from "../../models/Crop/crop_type.model";


export abstract class CropTypeRepository {
    abstract getTypeCrop (id: number ) : Observable<CropTypeModel>
}
