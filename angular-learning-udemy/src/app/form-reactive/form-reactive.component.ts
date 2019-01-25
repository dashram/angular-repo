import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUserName = ['Chris', 'Anna'];

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        'userName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),        
      }),      
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    //captures any value change happening on form/control value
    //Can be subscribed to form or individual form-controls
    /*this.signupForm.valueChanges.subscribe(
      (value) => console.log(value)
    )*/
    //captures any status change happening on form/control status
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    )

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

  //Asyncronous validation (can be used in webservice calls)
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>( (resolve, reject) => {
      setTimeout(() => {
        if( control.value === 'test@test.com'){
          resolve({emailIsForbideen: true})
        } else {
          resolve(null)
        }
      }, 1500);
    })
    return promise;
  }

  //Set all the form values using setValue
  onSetValue(){
    this.signupForm.setValue(
      { userData: {
          userName: "ALL User",
          email: 'allField@test.com'
        },
        gender: 'female',
        hobbies: []
      }
    )
  }

  //Set partial form values using patchValue
  onPatchValue(){
    this.signupForm.patchValue(
      { userData: {
          userName: "Patched User",
          email: 'patched@test.com'
        }
      }
    )
  }

  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }
}
