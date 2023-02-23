import { Component } from '@angular/core';
import { SetApiService } from '../set-api.service';
@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent {
  name="Vanquisher"

  result:any

  constructor(
    private service:SetApiService


  ){}

  //call the service
  callService(){
    this.service.SetApi().subscribe(res=>{
      this.result=res
      console.log(this.result)

    })
  } 


}