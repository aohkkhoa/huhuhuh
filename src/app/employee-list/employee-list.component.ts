import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  userr : String;
  roless: String;
  constructor(private employeeService: EmployeeService ) {
    this.userr=sessionStorage.getItem('username')||'{}'
    this.roless=sessionStorage.getItem('role')||'{}'
   }

  ngOnInit(): void {
   this.getEmployees(); 
  }
  private getEmployees(){
    this.employeeService.getemployeelist().subscribe(data => {
        this.employees = data;
    });
  }
  
}
