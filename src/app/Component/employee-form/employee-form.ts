import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl,Validators,FormBuilder,FormArray } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { EmployeeService } from '../../services/employee-service';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {

  //Example FormGroup
  // employeeForm = new FormGroup({
  //   employeeName : new FormControl('',[Validators.required, Validators.maxLength(100)]),
  //   employeeAge : new FormControl('',[Validators.required, Validators.min(18), Validators.max(60)]),
  //   employeeCity : new FormControl('',[Validators.required]),
  // })

//FormBuilder Example
  employeeForm! : FormGroup;

  // Initialize Form
  constructor(private fb:FormBuilder, private objEmpService : EmployeeService)
  {

    this.objEmpService.getEmployeeData();

    this.employeeForm = this.fb.group({
      employeeName : ['',[Validators.required,Validators.maxLength(100)]],
      employeeAge : ['',[Validators.required,Validators.min(18),Validators.max(60)]],
      employeeCity : ['',[Validators.required]],
      employeeSkills:this.fb.array([this.fb.control('')])
    })
  }

  //Getter
  get employeeSkills() : FormArray{
    return this.employeeForm.get('employeeSkills') as FormArray;
  }

  get skillControls(): FormControl[]{
    return this.employeeSkills.controls as FormControl[];
  }

  addSkill(){
    this.employeeSkills.push(this.fb.control(''));
  }


  removeSkill(index:number){
    this.employeeSkills.removeAt(index);
  }
OnSubmit(){
alert('Submit Button Clicked');
  this.employeeForm.markAllAsTouched();

 if(this.employeeForm.invalid){
      return;
  }

  console.log(this.employeeForm.value);
}

}
