import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online{
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit {
  serverId: number = 1001;
  serverStatus: string =  '';

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  ngOnInit() {
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
