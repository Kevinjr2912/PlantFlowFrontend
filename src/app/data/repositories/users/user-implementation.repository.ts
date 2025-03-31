import { Injectable } from "@angular/core";
import { UserRepository } from "../../../domain/repositories/User/user.repository";
import { HttpClient } from "@angular/common/http";
import { UserImplementationRepositoryMapper } from "./mappers/user-repository-mapper";
import { UserModel } from "../../../domain/models/User/user.model";
import { map, Observable } from "rxjs";
import { ResponseUser } from "./entities/User";

@Injectable({
    providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {

    constructor(private http: HttpClient){
        super();
    }

    userMapper = new UserImplementationRepositoryMapper();

    // Definimos la ruta al recurso student
    private url = "http://localhost:8080/users"
    
    createUser(user : UserModel): Observable<UserModel> {
        return this.http.post<ResponseUser> (this.url, user).pipe(map(this.userMapper.mapFrom))
    }   

}

