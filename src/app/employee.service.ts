import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = "http://localhost:8080/khoa/api/employee";
  constructor(private httpClient: HttpClient ) { }
  getemployeelist(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  isAdmin(){
    let admin = sessionStorage.getItem('role')
    console.log((admin === "admin"))
    return (admin === "admin")
  }
  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('role')
  }
  
}
