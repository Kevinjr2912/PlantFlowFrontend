import { Observable } from "rxjs";
import { UserModel } from "../../models/User/user.model";


export abstract class UserRepository {
    abstract createUser(user : UserModel): Observable<UserModel>
}