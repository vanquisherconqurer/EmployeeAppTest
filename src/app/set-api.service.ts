import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetApiService {
//Dependancy Injection
  constructor(
    public http:HttpClient
  ) { }

//consume api
SetApi()
          {
  //send request to the url api
  return this.http.get('https://jsonplaceholder.typiccode.com/todos/1');
}



}




