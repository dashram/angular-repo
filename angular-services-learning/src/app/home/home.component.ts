import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFakeService } from '../auth/auth-fake.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authFakeService: AuthFakeService) { }

  ngOnInit() {
  }

  onLoadServer(id: number){
    //some calculation
    this.router.navigate( ['/servers', id, 'edit'], { queryParams: {allowEdit: '1'}, fragment: 'loading'} );
  }

  onLogin(){
    this.authFakeService.login();
  }

  onLogout(){
    this.authFakeService.logout();
  }

}
