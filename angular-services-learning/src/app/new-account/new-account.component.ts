import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {
  //Removed as we use service instead of emitter
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  //Injecting service in constructor
  constructor(private loggingService: LoggingService,
              private accountService: AccountService){
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);

    //Moved to newly created service
    //console.log('A server status changed, new status: ' + accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }
}
