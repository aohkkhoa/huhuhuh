import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loginmodel } from './loginmodel';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http : HttpClient) {}
  public loginuserfromremote(user :Loginmodel):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login",user)
  }
}
