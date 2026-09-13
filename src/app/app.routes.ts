import { Routes } from '@angular/router';
import { Home } from './Component/home/home/home';
import { Employee } from './Component/employee/employee';
import { EmployeeForm } from './Component/employee-form/employee-form';
import { EmployeeAdd } from './Component/home-crud/employee-add/employee-add';
import { EmployeeList } from './Component/home-crud/employee-list/employee-list';
import { Login } from './Component/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
{path:'',component:Home, canActivate:[authGuard] },
{path:'employee',component:Employee, canActivate:[authGuard]},
{path:'employee-form',component:EmployeeForm, canActivate:[authGuard]},
{path:'employee-add/:id',component:EmployeeAdd, canActivate:[authGuard]},
{path:'employee-list',component:EmployeeList, canActivate:[authGuard]},
{path:'login-page',component:Login}

];
