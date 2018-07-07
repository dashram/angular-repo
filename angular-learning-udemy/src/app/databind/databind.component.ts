import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  serverElements = [
    { type: 'server', name: 'QAServer', content: 'QA test server' },
    { type: 'blueprint', name: 'PRODServer', content: 'Prod server' }
  ];
  
  constructor() { }

  ngOnInit() {
  }  

  onServerAdded( serverData: {serverName: string, serverContent: string} ) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluprintAdded( serverData: {serverName: string, serverContent: string} ) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

}
