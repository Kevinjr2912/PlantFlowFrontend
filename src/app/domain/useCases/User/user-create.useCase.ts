import { Observable } from "rxjs";
import { UseCase } from "../../../base/use-case";
import { UserModel } from "../../models/User/user.model";
import { UserRepository } from "../../repositories/User/user.repository";

export class CreateUserUseCase implements UseCase<UserModel, UserModel> {
    constructor(private userRepository: UserRepository) { }
    execute(user: UserModel): Observable<UserModel> {
        return this.userRepository.createUser(user);
    }
}