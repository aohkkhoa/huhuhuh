import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {
 
  employee: Employee = new Employee()
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    
  }
}
