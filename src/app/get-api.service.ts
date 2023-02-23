import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {

  constructor(
    private http:HttpClient
  ) { }

  // ('https://jsonplaceholder.typicode.com/todos/1'


  //consume api
  apiCall()
  {
    //send request to the url api
    return this.http.get("https://jsonplaceholder.typicode.com/todos/")
  }
  

}

