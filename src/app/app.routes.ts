import { Routes } from '@angular/router';
import { Home } from './Component/home/home/home';
import { Employee } from './Component/employee/employee';
import { EmployeeForm } from './Component/employee-form/employee-form';
import { EmployeeAdd } from './Component/home-crud/employee-add/employee-add';
import { EmployeeList } from './Component/home-crud/employee-list/employee-list';

export const routes: Routes = [
{path:'',component:Home },
{path:'employee',component:Employee},
{path:'employee-form',component:EmployeeForm},
{path:'employee-add/:id',component:EmployeeAdd},
{path:'employee-list',component:EmployeeList}
];
