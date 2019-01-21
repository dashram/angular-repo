import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular6';
  dafaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  userDetail = {
    userName: '',
    email: '',
    gender: '',
    secretQ: '',
    answer: ''
  }
  formSubmitted = false;

  //Another approach to capture form object using decorator
  @ViewChild('frm') userForm: NgForm;

  suggestedUserName(){
    const suggestedName = "SuperUser";
    /*this.userForm.setValue({
      userData: {
        userName: suggestedName,
        email: '',
        gender: 'male'
      },
      secret: 'pet',
      questionAnswer: ''
    });*/

    this.userForm.form.patchValue({
      userData: {
        userName: suggestedName
      }
    });
  }


  /*onSubmit(form: NgForm){
    console.log(form);
  }*/

  onSubmit(){
    console.log(this.userForm)
    this.formSubmitted = true;
    this.userDetail.userName = this.userForm.value.userData.userName;
    this.userDetail.email = this.userForm.value.userData.email;
    this.userDetail.gender = this.userForm.value.userData.gender;
    this.userDetail.secretQ = this.userForm.value.secret;
    this.userDetail.answer = this.userForm.value.questionAnswer;

    //Reset form data
    this.userForm.reset();
  }
  
}
