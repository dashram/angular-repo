import { Component, OnInit } from "@angular/core";
import { AccountService } from "./account.service";

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html'
  })
  export class ServiceComponent implements OnInit {   
      accounts: {name: string, status: string}[] = [];

      constructor(private accountService: AccountService) {}

      ngOnInit(){
          //calling service to get accounts
          this.accounts = this.accountService.accounts;

      }

  
  }