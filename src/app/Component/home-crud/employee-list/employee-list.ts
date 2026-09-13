import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee-service'; 
import { EmployeeModel } from '../../../models/employee-model';
import { Router, RouterLink } from "@angular/router"; 
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-employee-list',
  standalone:true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {

searchText : string = "";
empListData : EmployeeModel[] = []; 
isAscending = true;
isLowToHigh = true;
isLoading = false;
hasError = false;
currentPageNo : number = 1;
currentPageSize : number = 3;
pageSizeOptions : number[] = [3,5,10,15,20]

constructor(private employeeService : EmployeeService,
  private cdr: ChangeDetectorRef,
  private router : Router){}

 ngOnInit(): void {
  this.loadEmployee();
}


loadEmployee():void {

  this.isLoading= true;
  this.hasError = false;

  this.employeeService.getEmployeeData().subscribe({
    next:(response)=>{
      this.empListData = response;
      this.isLoading = false;
      this.cdr.detectChanges();
    },
    error:(error)=>{
      console.error("Error Loading Employees : ",error);
      this.isLoading = false;
      this.hasError = true;
      //alert("Unable To Load Employee Data ")
    }}
)
  
}

editEmployeeData(id:number): void{
this.router.navigate(['/employee-add',id]);
}

deleteEmployeeData(id:number){
  const isDelete = confirm('Are you sure you want to delete?');

  if(!isDelete){
    return;
  }

  this.employeeService.deleteEmployee(id).subscribe({
    next:(response)=>{
      alert(response.message);
      this.loadEmployee();
    },
    error:(err)=> {
      console.log("Error Deleting Employee :",err);
      alert("Unable To delete Employee");
    },
  })
}

get FilteredEmployees(): EmployeeModel[]{ 

  const search = this.searchText.toLowerCase();

  return this.empListData.filter(emp=> 
    emp.employeeName.toLowerCase().includes(search) ||
    emp.employeeDepartment.toLowerCase().includes(search) ||
    emp.employeeEmail.toLowerCase().includes(search)
  )
}

sortByName(){
  this.empListData.sort((a, b)=>{  //(a, b) => yaha a aur b do employees hain, jinhe JavaScript compare kar raha hai.
 const result = a.employeeName.localeCompare(b.employeeName) //localeCompare() Ye dono names compare karta hai.
 // result me us comparison ka result store kar diya.
 return this.isAscending ? result: -result
});
this.isAscending = !this.isAscending
}

sortBySalary(){
this.empListData.sort((a, b)=>{
  const lowToHigh = a.salary - b.salary

  return this.isLowToHigh ? lowToHigh : -lowToHigh
})
 this.isLowToHigh = !this.isLowToHigh
}

getPaginatedEmployees() : EmployeeModel[]{
const startIndex  = (this.currentPageNo - 1) * this.currentPageSize; //eg (1 - 1) × 5 = 0
const endIndex = startIndex + this.currentPageSize //  0 + 5 = 5

return this.FilteredEmployees.slice(startIndex,endIndex); // records 0–4
}

get totalPages() : number{
  return Math.ceil(this.FilteredEmployees.length / this.currentPageSize); // eg 7 / 5 = 1.4, Math.ceil(1.4) = 2

}

goToPage(page : number) : void {
    if(page >= 1 && page <= this.totalPages){
      this.currentPageNo = page;
    }
}

changePageSize() : void {
  this.currentPageNo = 1
}

onSearchChange():void{
  this.currentPageNo =  1
}

}
