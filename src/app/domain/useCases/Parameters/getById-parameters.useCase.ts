import { ParameterRepository } from "../../repositories/Parameters/parameter.repository";
import { Observable } from "rxjs";
import { CultivationParametersModel } from "../../models/Parameters/param.model";

export class GetParameterByIdUseCase {
    constructor(private parameterRepo: ParameterRepository) {}

    execute(id: number): Observable<CultivationParametersModel> {
        return this.parameterRepo.GetParametersById(id)
    }
}