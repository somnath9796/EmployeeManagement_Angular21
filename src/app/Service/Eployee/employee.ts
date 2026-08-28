import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {

  getEmployees() {
    return[
      { employeeId: 1, employeeName: "Somnath", employeeAge: 24 },
      { employeeId: 2, employeeName: "Nikhil", employeeAge: 27 },
      { employeeId: 3, employeeName: "Manish", employeeAge: 24 },
      { employeeId: 4, employeeName: "Ramesh", employeeAge: 24 }
    ];
  }  
}

