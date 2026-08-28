import { Component } from '@angular/core';
//import { Employee as Employeeservice } from '../../Service/Eployee/employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../services/employee-service';
import { EmployeeModel } from '../../models/employee-model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {

  // Variable created for if condition 
  isEmployeeAvailable = false;


  empListData :EmployeeModel[] = [];

  constructor(private objEmployeeservice : EmployeeService, private cdr : ChangeDetectorRef ){}

  ngOnInit(){
     this.objEmployeeservice.getEmployeeData().subscribe({
      next:(data)=>{
        //console.log(data);
        this.empListData = data;
        this.cdr.detectChanges();
      },
      error:(errMsg) =>{
        console.error(errMsg);
      }
     });

    
  }

  
  DeleteEmployee(id:number)
  {
    this.empListData = this.empListData.filter(Employee=>Employee.employeeId != id);
  }
}
