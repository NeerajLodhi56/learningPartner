import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsertableService {

  constructor( private _http:HttpClient) {

  }
getAllUser():Observable<any[]>{
  return this._http.get<any[]>("https://jsonplaceholder.typicode.com/users");
}
}
