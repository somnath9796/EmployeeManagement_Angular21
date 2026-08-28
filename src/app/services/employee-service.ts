import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel,APIResponse } from '../models/employee-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private baseURL = "https://localhost:7148/api/Employee"; 

  constructor(private http : HttpClient){} 

  getEmployeeData() : Observable<EmployeeModel[]>{
    return this.http.get<EmployeeModel[]>(`${this.baseURL}/GetAllEmployee`); 
  } 

  addEmployee(employee : EmployeeModel) : Observable<EmployeeModel>{
    return this.http.post<EmployeeModel>(`${this.baseURL}/AddEmployeeData`,employee); 
  }
  
  getEmployeeDataById(id:number) : Observable<EmployeeModel>{
    return this.http.get<EmployeeModel>(`${this.baseURL}/GetEmployeeById/${id}`);
  }
  
  updateEmployee(id:number,employee: EmployeeModel) : Observable<EmployeeModel>{
return this.http.put<EmployeeModel>(`${this.baseURL}/UpdateEmployee/${id}`,employee);
  }

  deleteEmployee(id:number){
    return this.http.delete<APIResponse>(`${this.baseURL}/DeleteEmployee/${id}`);
  }
}
