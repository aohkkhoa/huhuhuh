import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private employeeSevice: EmployeeService,
    private router: Router) { }
  employee: Employee = new Employee()
  ngOnInit(): void {
  }
  save(){
    this.employeeSevice.createEmployee(this.employee).subscribe(data =>{
        console.log(data);
        this.gotoemployeelist();
    },
    error => console.log(error));
    
  }

  gotoemployeelist(){
    this.router.navigate(['/employeesss'])
  }
  onSubmit(){
    console.log(this.employee);
    this.save();
  }
}
