import { Component, OnInit } from "@angular/core";

import { UserService } from "../../_services/index";
import { User } from "../../_models/index";

@Component({
    moduleId: module.id,
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService){ 
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit(){
        this.loadAllUsers();
    }

    private loadAllUsers(){
        this.userService.getUsers().subscribe( users => { this.users = users})
    }

    deleteUser(id: number){
        this.userService.deleteUser(id).subscribe( () => {this.loadAllUsers} )
    }

}