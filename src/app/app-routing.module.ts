import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
   {path: 'employeesss',  component: EmployeeListComponent},
  {path: '', redirectTo:'employeesss', pathMatch: 'full'},
  {path: 'create-employee', component:CreateEmployeeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'regis', component: HomeLoginComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
