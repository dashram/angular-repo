import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../_models";

@Injectable()
export class UserService{
    constructor(private http: HttpClient){}

    getUsers(){
        return this.http.get<User[]>('/oms/users');
    }

    getUserById(id: number){
        return this.http.get('/oms/users/' + id);
    }

    createUser(user: User){
        return this.http.post('/oms/users', user);
    }

    updateUser(user: User){
        return this.http.put('/oms/users/' + user.id, user);
    }

    deleteUser(id: number){
        return this.http.delete("/oms/delete/" + id);
    }
}