import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private employeeservice: EmployeeService,
    private router: Router ) { }

  ngOnInit(): void {
    this.employeeservice.logOut();
    this.router.navigate(['employeesss']);
  }

}
