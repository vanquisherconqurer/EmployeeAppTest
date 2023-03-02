import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='call Api in Angular';
  constructor() {}
  ngOnInt()
  {
    // this.api.apicall().subscribe(data)=>{
    //   console.warn("get api data",);
    //   this.title=data['title'];
    // }
 
  }
  AddEmployee = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    Email: new FormControl(''),
    EmployeeID: new FormControl(''),
    Date: new FormControl(''),
  })
}
