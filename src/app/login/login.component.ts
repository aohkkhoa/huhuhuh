import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loginmodel } from '../loginmodel';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new Loginmodel();

  constructor(private _service : RegistrationService, private router : Router) { }

  ngOnInit(): void {
    
  }
  loginUser(){
    
    this._service.loginuserfromremote(this.user).subscribe(
     
      data => {
    
        sessionStorage.setItem('role',data) 
        let role = sessionStorage.getItem('role')
        console.log(role)
        this.router.navigate(['/employeesss'])
        sessionStorage.setItem('username',this.user.userName)
        let user = sessionStorage.getItem('username')
        console.log(user)
      },
      
      error => console.log("error")
    )
   
  }
}
