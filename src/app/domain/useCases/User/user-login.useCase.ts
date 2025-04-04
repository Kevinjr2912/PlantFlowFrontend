import { Observable } from "rxjs";
import { UseCase } from "../../../base/use-case";
import { AccessCredentials } from "../../models/User/access-credentials.model";
import { UserModel } from "../../models/User/user.model";
import { UserRepository } from "../../repositories/User/user.repository";

export class loginUseCase implements UseCase<AccessCredentials, UserModel> {
    constructor(private userRepository: UserRepository) {}
    execute(params: AccessCredentials): Observable<UserModel> {
        return this.userRepository.login(params)
    }
}