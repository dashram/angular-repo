import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular6';

  //Another approach to capture form object using decorator
  @ViewChild('frm') userForm: NgForm;

  /*onSubmit(form: NgForm){
    console.log(form);
  }*/

  onSubmit(){
    console.log(this.userForm)
  }
}
