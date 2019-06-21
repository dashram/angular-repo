import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private loggingervice: LoggingService) {}

  ngOnInit() {
    this.authService.autoLogin();
    this.loggingervice.printLog('Hello! From AppComponent ngOnInit');
  }
}
