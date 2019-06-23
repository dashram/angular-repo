import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created.";
  serverName = '';
  serverCreated: boolean = false;
  servers = ['TestSrv', 'ProdSrv'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onServerCreate(){
    //to log output on terminal of developer-tool
    console.log("### onServerCreate triggered on CLICK event...");
    this.serverCreated = true;
    //used js method to add new element to array
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server created successfully... Server Name is : " + this.serverName;
  }

  onServerUpdate(event: Event){
    //to log output on terminal of developer-tool
    console.log(event);
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
