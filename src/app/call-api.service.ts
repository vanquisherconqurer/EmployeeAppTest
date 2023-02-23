import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(
    public http:HttpClient
  ) { }

  // ('https://jsonplaceholder.typicode.com/todos/1'


  // consume api
  apiCall()
  {
    //send request to the url api
    return this.http.get('https://jsonplaceholder.typiccode.com/todos/1');
  }
  }