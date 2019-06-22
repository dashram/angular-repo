import { Component } from '@angular/core';

function log(target, name, descriptor) {
  console.log(target, name, descriptor)
  //store the original function in a variable
  const original = descriptor.value;
  //do some manipulation with descriptor.value
  descriptor.value = function(...args) {
    console.log("Arguments ", args, " were passed in this function")
    const result = original.apply(this, args)
    console.log("The result of the function is ", result)
  }
  //return the descriptor
  return descriptor;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro2angular';

  constructor() {
    console.log("The statement was generated by constructure", this.calMultiply(2, 3))
  }

  //Example of member decorator
  @log
  calMultiply(num1, num2) {
    return num1 * num2;
  }
}