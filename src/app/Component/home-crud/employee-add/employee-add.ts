import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormBuilder,Validators,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../../services/employee-service';
import { ActivatedRoute, isActive } from '@angular/router';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
})

export class EmployeeAdd implements OnInit {
employeeForm! : FormGroup;
id! : number;

 
constructor(private objFB : FormBuilder, private objEmployeeService : EmployeeService, 
  private objRoute : ActivatedRoute,private router : Router)  
{} 

  ngOnInit(): void {

    this.employeeForm = this.objFB.group({  
      employeeId : 0,
      employeeName : ['',Validators.required],
      employeeEmail : ['',[Validators.required,Validators.email]],
      employeeDepartment : ['',Validators.required],
      salary : ['',[Validators.required,Validators.min(10000),Validators.max(1000000)]],
      dateOfJoining : ['',Validators.required],
      isActive:[true]
    })

    this.id = Number(this.objRoute.snapshot.paramMap.get('id'));
    
    if(this.id > 0){
      this.loadEmployeeById(this.id);
    }
  }

  onSubmit(): void {

    this.employeeForm.markAllAsTouched();
       if(this.employeeForm.invalid){
      return;
    }

    const employee = this.employeeForm.value; 
 
    if (this.id > 0) {
      this.objEmployeeService.updateEmployee(this.id, employee).subscribe({
        next: (updResponse) => {
          console.log(updResponse);
          alert('Data Updated Successfully');
          this.router.navigate(['/employee-list']);
        },
        error: (err) => {
          console.error(err);
          alert("Something went wrong");
        },
      })
    }
    else {
      this.objEmployeeService.addEmployee(employee)
        .subscribe({              
          next:() => { 
            alert("Data Added Successfully");
            this.employeeForm.reset({
              isActive: true
            })
            this.router.navigate(['/employee-list'])
          },
          error:() => {
            alert("Something went wrong");
          }
        })
    } 
  }

  loadEmployeeById(id:number){
    this.objEmployeeService.getEmployeeDataById(id).subscribe({
      next:(response)=>{
        this.employeeForm.patchValue({
          employeeId : response.employeeId,
          employeeName : response.employeeName,
           employeeEmail : response.employeeEmail,
           employeeDepartment : response.employeeDepartment,
           salary :response.salary,
           isActive : response.isActive,
           dateOfJoining : response.dateOfJoining.split('T')[0],
        })
      },
      error:()=>{
        alert('Failed to load employee data');
      }
    });
  }
}
