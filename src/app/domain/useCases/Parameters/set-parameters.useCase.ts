import { Observable } from "rxjs";
import { CultivationParametersModel } from "../../models/Parameters/param.model";
import { ParameterRepository } from "../../repositories/Parameters/parameter.repository";
import { UseCase } from "../../../base/use-case";

export class SetParametersUseCase implements UseCase<CultivationParametersModel, CultivationParametersModel> {
    constructor(private parameterRepository: ParameterRepository) { }
    execute(cultivationParameters: CultivationParametersModel): Observable<CultivationParametersModel> {
        return this.parameterRepository.SetParameters(cultivationParameters);

    }
}
