import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  genders = ['male', 'Female'];
  signupForm: FormGroup;
  forbiddenUserName = ['Chris', 'Anna'];

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        'userName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),        
      }),      
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onAddHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);

  }

  forbiddenNames(control: FormControl): {[s: String]: boolean} {
    if( this.forbiddenUserName.indexOf(control.value) !== -1){
      return { 'nameIsForbidden': true }
    }

    //if validation is false either return null or no return but do not pass with false object.
    return null;
  }

}
