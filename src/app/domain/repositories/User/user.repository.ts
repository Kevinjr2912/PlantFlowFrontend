import { Observable } from "rxjs";
import { UserModel } from "../../models/User/user.model";
import { AccessCredentials } from "../../models/User/access-credentials.model";


export abstract class UserRepository {
    abstract createUser(user : UserModel): Observable<UserModel>
    abstract login(accessCredentials: AccessCredentials): Observable<UserModel>
}