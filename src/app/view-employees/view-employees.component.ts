import { Component } from '@angular/core';
import { GetAPIService } from '../get-api.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent {

  result:any

  constructor(
    private service:GetAPIService


  ){}



  //call the service
  callService(){
    this.service.apiCall().subscribe(res=>{
      this.result=res
      console.log(this.result)

    })
  }





}
