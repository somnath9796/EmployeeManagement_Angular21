import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { Employee } from './Component/employee/employee';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EmployeeManagement');

 //Interpolation definition
  Interpolation = "Interpolation is used to display component data in the HTML template using double curly braces.";
  //variable declared for interpolation data binding 
  //Interpolation is used to display component data in the HTML template using double curly braces.
  Pagetitle = "Employee Management System Is Page Title";
  PageDescription = "Angular 21 is running Successfully";
  

  //Event Binding Method
  onButtonClick(){
    alert("Display Message on Button Click Event");
  }

  //Property Binding 
  PropertyBinding = "Property binding is used to bind component data to an HTML element property using square brackets.";
  isButtonEnabled = true;
  onDisabledClicked(){
    alert("Employee data Saved");
  }

  //Two Way Binding
  employeeFName = "";
  employeeLname = "";
  employeeAge = "";
}
